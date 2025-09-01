import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  TwitterIcon,
} from "lucide-react";
import XIcon from "./icons/XIcon";

export default function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row w-full">
      <ContactForm />
      <ContactInfo />
    </footer>
  );
}

function ContactForm() {
  return (
    <div className="bg-secondary lg:w-1/2 w-full px-6 lg:px-0 py-12 lg:py-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold text-tertiary mb-2">
          Contactez-Nous
        </h2>
        <div className="w-16 h-1.5 bg-tertiary mb-8"></div>

        <form className="flex flex-col w-full space-y-4">
          <div className="grid grid-cols-2 w-full flex-col lg:flex-row gap-4">
            <input
              type="text"
              placeholder="Nom"
              className="flex-1 px-4 py-3 border-none outline-none text-gray-700 placeholder-gray-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-4 py-3 border-none outline-none text-gray-700 placeholder-gray-500"
            />
          </div>

          <textarea
            placeholder="Message"
            rows={6}
            className="w-full px-4 py-3 border-none outline-none resize-none text-gray-700 placeholder-gray-500"
          />

          <button
            type="submit"
            className="w-fit text-sm cursor-pointer self-end bg-transparent border-3 border-tertiary text-tertiary font-bold px-8 py-2.5 hover:bg-tertiary hover:text-primary transition-all duration-200"
          >
            ENVOYER MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="lg:w-1/2 w-full ">
      <div className="flex flex-col h-full">
        {/* Social Media Icons */}
        <div className="flex w-full justify-center gap-25 items-center py-8 bg-primary">
          <div className="bg-white p-1.5 flex items-center justify-center rounded-full">
            <Facebook className="w-6 h-6 fill-primary text-primary hover:fill-secondary  hover:text-secondary cursor-pointer transition-colors duration-200" />
          </div>
          <div className="bg-white p-1.5 flex items-center justify-center rounded-full">
            <Instagram className="w-6 font-bold h-6 fill-transparent text-primary hover:text-secondary cursor-pointer transition-colors duration-200" />
          </div>
          <div className="bg-white p-2 flex items-center justify-center rounded-full">
            <XIcon className="w-5 h-5 fill-primary hover:fill-secondary text-primary hover:text-secondary cursor-pointer transition-colors duration-200" />
          </div>
          <div className="bg-white p-2 flex items-center justify-center rounded-full">
            <Linkedin className="w-5 h-5 border rounded-sm p-0.5 border-primary fill-primary hover:fill-secondary hover:border-secondary text-primary hover:text-secondary cursor-pointer transition-colors duration-200" />
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex-1 flex flex-col items-center text-primary px-6 lg:px-0 py-20 bg-tertiary">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <p className="font-semibold text-sm lg:text-base">
                Douala, Cameroun
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 flex-shrink-0" />
              <p className="font-semibold text-sm lg:text-base">
                +237 667055365 / 688687717
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 flex-shrink-0" />
              <p className="font-semibold text-sm lg:text-base">
                meraps25@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
