import Link from "next/link";
import type { ComponentProps } from "react";

type ActionLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "light";
};

export function ActionLink({ variant = "primary", className = "", children, ...props }: ActionLinkProps) {
  return <Link className={`action-link action-link--${variant} ${className}`} {...props}>{children}</Link>;
}
