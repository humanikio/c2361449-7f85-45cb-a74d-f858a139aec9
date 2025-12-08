import Link from 'next/link';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-white title-on-dark">
              The Nearest Bar
            </h3>
            <p className="text-secondary-foreground/80 mb-4">
              Premium mobile bartending service bringing professional cocktail artistry to your celebration.
            </p>
            <div className="flex gap-4 items-center">
              <div className="relative group">
                <div className="text-secondary-foreground/60 cursor-not-allowed">
                  <Instagram className="h-5 w-5" />
                </div>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  Coming Soon!
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white title-on-dark">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white title-on-dark">Services</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>Mobile Bar Experience</li>
              <li>Signature Cocktail Design</li>
              <li>Beer & Wine Service</li>
              <li>Bartender Services</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white title-on-dark">Contact</h4>
            <ul className="space-y-3 text-secondary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>Serving Austin & Denver</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:503-317-9794" className="hover:text-primary transition-colors">
                  503-317-9794
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@thenearestbaratx.com" className="hover:text-primary transition-colors">
                  info@thenearestbaratx.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-white">
          <p>&copy; {new Date().getFullYear()} The Nearest Bar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
