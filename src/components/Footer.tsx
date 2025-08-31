import React from "react";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from "lucide-react";

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
    <div className="bg-[#FFB400] lg:w-1/2 w-full px-6 lg:px-0 py-12 lg:py-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold text-black mb-2">
          Contactez-Nous
        </h2>
        <div className="w-16 h-1.5 bg-black mb-8"></div>

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
            className="w-fit text-sm cursor-pointer self-end bg-transparent border-3 border-white text-white font-bold px-8 py-2.5 hover:bg-white hover:text-[#FFB400] transition-all duration-200"
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
        <div className="flex w-full justify-center gap-25 items-center py-8 bg-[#404040]">
          <Facebook className="w-6 h-6 fill-white hover:fill-[#FFB400] text-white hover:text-[#FFB400]  cursor-pointer transition-colors duration-200" />
          <Twitter className="w-6 h-6 fill-white hover:fill-[#FFB400] text-white hover:text-[#FFB400]  cursor-pointer transition-colors duration-200" />
          <Linkedin className="w-6 h-6 fill-white hover:fill-[#FFB400] text-white hover:text-[#FFB400]  cursor-pointer transition-colors duration-200" />
        </div>

        {/* Contact Information */}
        <div className="flex-1 flex flex-col items-center text-[#404040] px-6 lg:px-0 py-20">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-[#FFB400] mt-1 flex-shrink-0" />
              <p className="text-white text-sm lg:text-base">
                Douala, Cameroun
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-[#FFB400] flex-shrink-0" />
              <p className="text-white font-semibold text-sm lg:text-base">
                +237 667055365 / 688687717
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-[#FFB400] flex-shrink-0" />
              <p className="text-white font-semibold text-sm lg:text-base">
                meraps25@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
