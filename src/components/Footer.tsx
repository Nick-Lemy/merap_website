import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  ArrowRight,
} from "lucide-react";
import XIcon from "./icons/XIcon";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-primary">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Company Info & Contact */}
        <div className="py-16 border-b border-primary">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Company Information */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <h3 className="text-2xl font-bold">MERAP SARL</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                Votre partenaire de confiance pour tous vos projets de
                construction, d&apos;infrastructure et d&apos;ingénierie au
                Cameroun. Nous offrons des solutions innovantes et durables pour
                bâtir l&apos;avenir.
              </p>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h4 className="text-lg w-full text-start font-semibold mb-6 lg:text-center">
                Liens Rapides
              </h4>
              <div className="flex lg:justify-around lg:flex-col gap-10 lg:gap-0">
                <div className="space-y-3">
                  <Link
                    href="/"
                    className="block text-gray-700 hover:text-primary transition-colors text-sm"
                  >
                    Accueil
                  </Link>
                  <Link
                    href="/about"
                    className="block text-gray-700 hover:text-primary transition-colors text-sm"
                  >
                    À Propos
                  </Link>
                  <Link
                    href="/services"
                    className="block text-gray-700 hover:text-primary transition-colors text-sm"
                  >
                    Services
                  </Link>
                </div>
                <div className="space-y-3">
                  <Link
                    href="/projects"
                    className="block text-gray-700 hover:text-primary transition-colors text-sm"
                  >
                    Projets
                  </Link>
                  <Link
                    href="/contact"
                    className="block text-gray-700 hover:text-primary transition-colors text-sm"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold  mb-6">Contactez-Nous</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 text-sm font-medium">Adresse</p>
                    <p className="text-gray-700 text-sm">Douala, Cameroun</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 text-sm font-medium">
                      Téléphone
                    </p>
                    <p className="text-gray-700 text-sm">+237 657055365</p>
                    <p className="text-gray-700 text-sm">+237 688687717</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 text-sm font-medium">Email</p>
                    <p className="text-gray-700 text-sm">meraps25@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="mt-8">
                <h5 className="text-sm font-semibold mb-3">Newsletter</h5>
                <div className="flex gap-2 flex-col lg:flex-row">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="flex-1 px-3 py-2 border border-primary rounded-md text-sm text-gray-900 focus:outline-none focus:border-secondary"
                  />
                  <button className="px-4 py-2 flex items-center w-full justify-center gap-2 bg-primary text-white rounded-md font-medium transition-colors">
                    Subscribe
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Social Media & Legal */}
        <div className="py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/share/14MSyy3abJ6/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-white transition-colors group"
                >
                  <Facebook className="w-5 h-5 fill-white text-white group-hover:fill-secondary group-hover:text-secondary" />
                </a>
                <a
                  href="https://www.instagram.com/merapsarl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-white transition-colors group"
                >
                  <Instagram className="w-5 h-5 text-white group-hover:text-secondary" />
                </a>
                <a
                  href="https://x.com/merap_sarl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-white transition-colors group"
                >
                  <XIcon className="w-5 h-5 fill-white group-hover:fill-secondary" />
                </a>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-sm text-gray-900">
              <p>&copy; 2024 MERAP SARL. Tous droits réservés.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
