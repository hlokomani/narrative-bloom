import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-primary text-accent py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo.png"
                alt="Narrative Bloom Psychology"
                width={40}
                height={40}
                className="w-10 h-10 brightness-0 invert"
              />
              <h3 className="text-2xl font-serif font-bold">
                Narrative Bloom
              </h3>
            </div>
            <p className="text-accent/90 text-sm">
              Supporting emotional health in people, communities & teams.
            </p>
            <p className="text-accent/80 text-xs mt-4">
              HPCSA Registration: PS 016 4445
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-accent/90 hover:text-accent transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-accent/90 hover:text-accent transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-accent/90 hover:text-accent transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-accent/90 hover:text-accent transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Get in Touch</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-accent/90">
                <a
                  href="mailto:hello@narrativebloom.co.za"
                  className="hover:text-accent transition-colors"
                >
                  hello@narrativebloom.co.za
                </a>
              </li>
              <li className="text-accent/90">Johannesburg, South Africa</li>
              <li className="text-accent/90">
                In-person sessions: Bryanston
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent/20 mt-8 pt-8 text-center text-accent/80 text-sm">
          <p>
            © {new Date().getFullYear()} Narrative Bloom Psychology. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}