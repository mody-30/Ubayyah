"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import ChatKsuLogo from "@/components/ChatKsuLogo";

export default function Header() {
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "ChatKSU", href: "/ChatKSU" },
    { name: "Team", href: "/team" },
    { name: "FAQ", href: "/Faq" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-ksu-beige text-ksu-black">
      <div className="container mx-auto h-24 px-4 flex items-center justify-between">
        {/* Left - KSU Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="\KSU_ShieldLogo_Colour_RGB.png"
            alt="KSU Logo"
            width={50}
            height={48}
          />
          <span className="font-bold text-2xl text-ksu-blue">ChatKSU</span>
        </Link>

        {/* Center - Navigation */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 flex gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-base font-medium transition-colors hover:text-ksu-blue ${
                pathname === item.href ? "text-ksu-blue" : "text-ksu-gray"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right - Placeholder Logo */}
        <div className="hidden md:flex">
          <Image
            src="\hksu-our-ksu-logo.png" // Replace with your own image path
            alt="Secondary Logo"
            width={350}
            height={48}
          />
        </div>
      </div>
    </header>
  )
}
