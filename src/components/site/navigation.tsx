"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/content/school";

export function Navigation() {
  const pathname = usePathname();
  const menu = useRef<HTMLDetailsElement>(null);
  const closeMenu = () => { if (menu.current) menu.current.open = false; };

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menu.current?.open) {
        menu.current.open = false;
        menu.current.querySelector("summary")?.focus();
      }
    };
    const onOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !menu.current?.contains(event.target)) closeMenu();
    };
    document.addEventListener("keydown", onEscape);
    document.addEventListener("pointerdown", onOutside);
    return () => {
      document.removeEventListener("keydown", onEscape);
      document.removeEventListener("pointerdown", onOutside);
    };
  }, []);

  useEffect(() => { if (menu.current) menu.current.open = false; }, [pathname]);

  const links = navigation.map(({ href, label }) => (
    <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} onClick={closeMenu}>
      {label}
    </Link>
  ));

  return <>
    <nav aria-label="Main navigation" className="desktop-nav">{links}</nav>
    <details className="mobile-menu" ref={menu} onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) closeMenu();
    }}>
      <summary aria-label="Navigation menu" aria-controls="mobile-navigation">
        <Menu className="menu-open-icon" size={23} aria-hidden="true" />
        <X className="menu-close-icon" size={23} aria-hidden="true" />
        <span>Menu</span>
      </summary>
      <nav id="mobile-navigation" aria-label="Mobile navigation">{links}</nav>
    </details>
  </>;
}
