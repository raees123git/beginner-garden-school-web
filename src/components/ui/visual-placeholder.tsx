import { ImageIcon } from "lucide-react";

export function VisualPlaceholder({ label, tone = "blue", variant = "arch" }: {
  label: string;
  tone?: "blue" | "green" | "soft";
  variant?: "arch" | "leaves" | "pages";
}) {
  return <div className={`visual-placeholder visual-placeholder--${tone}`}>
    <div className={`placeholder-art placeholder-art--${variant}`} aria-hidden="true"><i /><i /><i /></div>
    <span className="placeholder-caption"><ImageIcon size={16} aria-hidden="true" />{label}</span>
  </div>;
}
