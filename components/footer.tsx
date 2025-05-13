import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-4 border-[#9c6544] bg-[#471b0a] text-[#d19e74]">
      <div className="container py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Ubayyah Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold text-[#d19e74]">U</span>
            </div>
            <h3 className="text-2xl font-bold text-[#d19e74]">Ubayyah</h3>
            <p className="text-sm text-[#9c6544] leading-relaxed">
              A platform for smart, user-centered solutions integrating AI and statistics.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-[#d19e74]">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-[#9c6544] hover:text-[#d19e74]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/About" className="text-sm text-[#9c6544] hover:text-[#d19e74]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/Dashboard" className="text-sm text-[#9c6544] hover:text-[#d19e74]">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sm text-[#9c6544] hover:text-[#d19e74]">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/Faq" className="text-sm text-[#9c6544] hover:text-[#d19e74]">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-[#d19e74]">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-[#9c6544]">support@ubayyah.com</li>
              <li className="text-sm text-[#9c6544]">Based in Saudi Arabia</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-6 border-t border-[#9c6544] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#9c6544]">
          <p>© {new Date().getFullYear()} Ubayyah. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-[#d19e74]">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#d19e74]">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}