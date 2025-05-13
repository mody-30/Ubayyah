"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "Dashboard", href: "/Dashboard" },
    { name: "Team", href: "/team" },
    { name: "FAQ", href: "/Faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-[#9c6544] bg-[#471b0a] text-[#d19e74] shadow-lg">
      <div className="container mx-auto h-20 px-4 flex items-center justify-between">
        {/* Left - Logo */}
        <Link href="/" className="flex items-end gap-0.5">
          <div className="text-[#d19e74] text-5xl font-extrabold leading-none">U</div>
          <span className="text-[#d19e74] text-3xl font-bold">bayyah</span>
        </Link>

        {/* Center - Navigation */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 flex gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-lg font-semibold transition-colors ${
                pathname === item.href
                  ? "text-[#d19e74] border-b-2 border-[#9c6544]" // Active link style
                  : "text-[#9c6544] hover:text-[#d19e74]" // Hover effect
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right - Secondary Logo */}
        <div className="hidden md:flex">
          <Image
            src="\HealthonLogo_white.png" // Replace with your secondary logo path
            alt="Secondary Logo"
            width={240}
            height={40}
            className="opacity-80"
          />
        </div>
      </div>
    </header>
  );
}