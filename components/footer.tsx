import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t bg-ksu-beige text-ksu-black">
      <div className="container py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* University Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Image
                src="/KSU_ShieldLogo_Colour_RGB.png"
                alt="King Saud University"
                width={60}
                height={60}
              />
              <Image
                src="/logo-mark-transparent.png"
                alt="Secondary Logo"
                width={60}
                height={60}
              />
            </div>
          
            <h3 className="text-lg font-semibold text-ksu-blue">ChatKSU</h3>
            <p className="text-sm text-ksu-gray leading-relaxed">
              Smart assistant platform for students and faculty of King Saud University.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-ksu-blue">Explore</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-ksu-gray hover:text-ksu-blue">Home</Link></li>
              <li><Link href="/About" className="text-sm text-ksu-gray hover:text-ksu-blue">About</Link></li>
              <li><Link href="/ChatKSU" className="text-sm text-ksu-gray hover:text-ksu-blue">ChatKSU</Link></li>
              <li><Link href="/team" className="text-sm text-ksu-gray hover:text-ksu-blue">Team</Link></li>
              <li><Link href="/contact" className="text-sm text-ksu-gray hover:text-ksu-blue">FAQ</Link></li>
            </ul>
          </div>

          {/* University Info */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-ksu-blue">University Info</h3>
            <ul className="space-y-2">
              <li className="text-sm text-ksu-gray">support@chatksu.edu.sa</li>
              <li className="text-sm text-ksu-gray">King Saud University</li>
              <li className="text-sm text-ksu-gray">Riyadh, Saudi Arabia</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-6 border-t border-ksu-gray/30 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-ksu-gray">
          <p>© {new Date().getFullYear()} King Saud University. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-ksu-blue">Privacy Policy</Link>
            <Link href="#" className="hover:text-ksu-blue">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
