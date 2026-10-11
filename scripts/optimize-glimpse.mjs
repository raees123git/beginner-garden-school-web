import { mkdir, readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

// Deterministic tonal corrections only: no synthesized detail or changes to people.
// Sharp is already supplied by Next.js; no additional dependency is required.
const source = new URL("../public/glimpse-bgs-section-images/", import.meta.url);
const destination = new URL("../public/images/glimpse-optimized/", import.meta.url);
const photos = [
  { time: "22.40.05", name: "school-celebration", brightness: 1.07, gamma: 1.06, contrast: 1.025 },
  { time: "22.39.59", name: "outdoor-exercise", brightness: 1.025, gamma: 1.02, contrast: 1.02 },
  { time: "22.39.19", name: "students-together", brightness: 1.025, gamma: 1.02, contrast: 1.025 },
];

await mkdir(destination, { recursive: true });
for (const photo of photos) {
  const original = new URL(`WhatsApp Image 2026-10-11 at ${photo.time}.jpeg`, source);
  const before = createHash("sha256").update(await readFile(original)).digest("hex");
  const output = new URL(`${photo.name}.webp`, destination);
  const info = await sharp(await readFile(original))
    .rotate() // Bake in EXIF orientation, notably the landscape student portrait.
    .resize({ width: 1280, height: 1280, fit: "inside", withoutEnlargement: true })
    .gamma(photo.gamma)
    .modulate({ brightness: photo.brightness, saturation: 1 })
    .linear(photo.contrast, 128 * (1 - photo.contrast))
    .sharpen({ sigma: 0.5, m1: 0.3, m2: 0.6 })
    .webp({ quality: 80, effort: 6 })
    .toFile(fileURLToPath(output));
  const after = createHash("sha256").update(await readFile(original)).digest("hex");
  if (before !== after) throw new Error(`Original changed: ${photo.time}`);
  console.log(`${photo.name}.webp: ${info.width} × ${info.height}, ${info.size} bytes; original unchanged`);
}
