import { readFile, readdir, mkdir, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

type SourcePhoto = {
  source: string; id: string; category: string; caption: string; alt: string;
  rotation?: number; brightness: number; gamma?: number; contrast: number;
  saturation: number; review: string;
};
const project = new URL("../", import.meta.url);
const input = new URL("public/school-life-images/", project);
const output = new URL("public/images/school-life/", project);
const sources: SourcePhoto[] = JSON.parse(await readFile(new URL("src/content/school-life-source.json", project), "utf8"));
const files = await readdir(input);
if (files.length !== sources.length) throw new Error("Source inventory changed; inspect new files first.");
if (new Set(sources.map(p => p.id)).size !== sources.length) throw new Error("Duplicate output filename.");
await mkdir(output, { recursive: true });
const manifest = [];
const pixelHashes = new Set<string>();
for (const photo of sources) {
  const original = `WhatsApp Image 2026-10-11 at ${photo.source}.jpeg`;
  const sourcePath = new URL(original, input);
  const bytes = await readFile(sourcePath);
  const sha256 = createHash("sha256").update(bytes).digest("hex");
  const raw = await sharp(bytes).rotate().removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const pixelHash = createHash("sha256").update(`${raw.info.width}x${raw.info.height}:`).update(raw.data).digest("hex");
  if (pixelHashes.has(pixelHash)) throw new Error(`Exact duplicate requires review: ${original}`);
  pixelHashes.add(pixelHash);
  const corrected = await sharp(bytes).rotate().toBuffer();
  const rotated = await sharp(corrected).rotate(photo.rotation ?? 0).toBuffer();
  const info = await sharp(rotated)
    .resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true })
    .gamma(photo.gamma ?? 1.02)
    .modulate({ brightness: photo.brightness, saturation: photo.saturation })
    .linear(photo.contrast, 128 * (1 - photo.contrast))
    .sharpen({ sigma: 0.5, m1: photo.brightness > 1.05 ? 0.25 : 0.3, m2: 0.5 })
    .webp({ quality: 80, effort: 6 })
    .toFile(fileURLToPath(new URL(`${photo.id}.webp`, output)));
  const after = createHash("sha256").update(await readFile(sourcePath)).digest("hex");
  if (sha256 !== after) throw new Error(`Original changed: ${original}`);
  manifest.push({ ...photo, original, sourceSha256: sha256, src: `/images/school-life/${photo.id}.webp`, width: info.width, height: info.height, bytes: info.size });
  console.log(`${photo.id}: ${info.width} × ${info.height}, ${Math.round(info.size / 1024)} KiB`);
}
await writeFile(new URL("src/content/school-life-manifest.json", project), JSON.stringify(manifest, null, 2) + "\n");
console.log(`${manifest.length} valid unique photographs; all originals unchanged.`);
