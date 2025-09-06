"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Users,
  Calendar,
  Target,
  Shield,
} from "lucide-react";

export default function HomeSection2() {
  return (
    <section className="py-20 bg-white">
      <div className="px-4 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block bg-secondary/10 text-secondary font-semibold px-4 py-2 rounded-full text-sm mb-4">
                À Propos de MERAP
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6">
                Excellence et Innovation dans la{" "}
                <span className="text-secondary">Construction</span>
              </h2>
              <div className="w-20 h-1 bg-secondary rounded-full"></div>
            </motion.div>

            <motion.div
              className="space-y-6 text-gray-600 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p>
                MERAP, créée le 20 janvier 2025 à Douala par M. Armel Nlend, est
                une entreprise de BTP spécialisée dans la construction de
                bâtiments à usage d&apos;habitation et commercial ainsi que les
                travaux d&apos;infrastructures.
              </p>
              <p>
                Face à une urbanisation rapide et à une demande accrue pour des
                constructions de qualité, MERAP se distingue par son équipe
                d&;experts qualifiés et son matériel moderne.
              </p>
              <p>
                Notre mission est de concevoir, réaliser et rénover des
                infrastructures tout en garantissant la sécurité et la qualité
                des travaux. Nous nous engageons à respecter les normes
                environnementales et à utiliser des matériaux durables.
              </p>
            </motion.div>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link href="/about">
                <motion.button
                  className="group bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-sm transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
                  whileTap={{ scale: 0.95 }}
                >
                  En Savoir Plus
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Image */}
            <motion.div
              className="relative rounded-lg overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Image
                src="https://i.pinimg.com/736x/76/24/f1/7624f199ebe1b420198bfa16c5771d97.jpg"
                width={600}
                height={400}
                alt="Construction Excellence"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">
                  Projets d&apos;Excellence
                </h3>
                <p className="text-white/90">Construction moderne et durable</p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="bg-gradient-to-br from-primary to-primary/80 p-6 rounded-md text-white text-center">
                <Calendar className="w-8 h-8 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">2025</div>
                <div className="text-sm opacity-90">Année de Création</div>
              </div>
              <div className="bg-gradient-to-br from-secondary to-secondary/80 p-6 rounded-md text-white text-center">
                <Award className="w-8 h-8 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-sm opacity-90">Satisfaction Client</div>
              </div>
            </motion.div>

            {/* Key Features */}
            <motion.div
              className="grid grid-cols-1 gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                { icon: Users, text: "Équipe d'Experts Qualifiés" },
                { icon: Shield, text: "Matériaux Durables & Sécurisés" },
                { icon: Target, text: "Respect des Délais Garanti" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-medium text-gray-800">
                    {feature.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
