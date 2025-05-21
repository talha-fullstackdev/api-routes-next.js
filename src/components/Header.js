"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Header = () => {
  const pathName = usePathname();
  const links = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Profile", href: "/profile" },
    { name: "Docs", href: "/docs" },
    { name: "User One", href: "/user-one" },
    { name: "products", href: "/products" },
  ];
  return (
    <header className="bg-slate-600 p-4">
      <h1 className="text-center font-semibold text-2xl text-white">Header</h1>
      <ul className="flex gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={
              pathName === link.href
                ? "bg-red-700 px-2 rounded-md text-white"
                : ""
            }
          >
            {link.name}
          </Link>
        ))}
      </ul>
    </header>
  );
};
export default Header;
