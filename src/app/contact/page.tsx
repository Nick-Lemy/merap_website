"use client";

import React from "react";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <HeroSection />
        <ContactSection />
        <MapSection />
      </main>
    </div>
  );
}

function HeroSection() {
  return (
    <motion.section
      className="bg-[#404040] py-20 lg:py-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <motion.h1
          className="text-4xl lg:text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Contactez-Nous
        </motion.h1>
        <motion.div
          className="w-24 h-1 bg-[#FFB400] mx-auto mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
        <motion.p
          className="text-xl text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Vous avez un projet en tête ? N&apos;hésitez pas à nous contacter.
          Notre équipe est à votre disposition pour discuter de vos besoins.
        </motion.p>
      </div>
    </motion.section>
  );
}

function ContactSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Envoyez-nous un message
            </h2>
            <div className="w-24 h-1 bg-[#FFB400] mb-8" />

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB400] focus:border-transparent outline-none transition-all"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB400] focus:border-transparent outline-none transition-all"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB400] focus:border-transparent outline-none transition-all"
                  placeholder="+237 xxx xxx xxx"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB400] focus:border-transparent outline-none transition-all"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB400] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Décrivez votre projet ou votre demande..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-[#FFB400] hover:bg-yellow-600 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300"
                whileTap={{ scale: 0.98 }}
              >
                Envoyer le message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Informations de contact
            </h2>
            <div className="w-24 h-1 bg-[#FFB400] mb-8" />

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FFB400] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Adresse</h3>
                  <p className="text-gray-600">Douala, Cameroun</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FFB400] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Téléphone</h3>
                  <p className="text-gray-600">
                    +237 667055365 <br />
                    +237 688687717
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FFB400] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">meraps25@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FFB400] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Horaires</h3>
                  <p className="text-gray-600">
                    Lundi - Vendredi: 7h00 - 17h00 <br />
                    Samedi: 8h00 - 12h00
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-12">
              <h3 className="font-bold text-gray-900 mb-4">Suivez-nous</h3>
              <div className="flex gap-4">
                <motion.a
                  href="#"
                  className="w-12 h-12 bg-[#FFB400] rounded-lg flex items-center justify-center text-white hover:bg-yellow-600 transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  <Facebook className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-12 h-12 bg-[#FFB400] rounded-lg flex items-center justify-center text-white hover:bg-yellow-600 transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-12 h-12 bg-[#FFB400] rounded-lg flex items-center justify-center text-white hover:bg-yellow-600 transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  <Twitter className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-12 h-12 bg-[#FFB400] rounded-lg flex items-center justify-center text-white hover:bg-yellow-600 transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Notre Localisation
          </h2>
          <div className="w-24 h-1 bg-[#FFB400] mx-auto mb-8" />
          <p className="text-xl text-gray-600">
            Nous sommes situés au cœur de Douala pour mieux vous servir.
          </p>
        </motion.div>

        <motion.div
          className="bg-white p-4 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 text-lg">
              Carte de localisation - Douala, Cameroun
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
