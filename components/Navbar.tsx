"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "الرئيسية" },
  { href: "/services", label: "الخدمات" },
  { href: "/about", label: "من نحن" },
  { href: "/faq", label: "الأسئلة الشائعة" },
  { href: "/contact", label: "تواصل معنا" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="ch-navbar" dir="rtl">
      <Link href="/" className="ch-logo">
        ChinaHere
        <span>حلول التوريد من الصين</span>
      </Link>

      <nav className="ch-nav-links">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? "active" : ""}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Link href="/contact" className="ch-nav-cta">
        احصل على عرض سعر
      </Link>
    </header>
  );
}