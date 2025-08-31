"use client";

import React from "react";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {
  Building,
  Construction,
  Wrench,
  Palette,
  Droplets,
  Zap,
  FileText,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <HeroSection />
        <ServicesGrid />
      </main>
      <Footer />
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
          Nos Services
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
          MERAP offre une gamme complète de services dans le domaine du BTP, de
          la conception à la livraison finale de vos projets.
        </motion.p>
      </div>
    </motion.section>
  );
}

function ServicesGrid() {
  const services = [
    {
      icon: FileText,
      title: "Études et Gestion de Projets",
      description:
        "Conception, planification et gestion complète de vos projets de construction avec un suivi rigoureux de A à Z.",
    },
    {
      icon: Building,
      title: "Construction de Bâtiments",
      description:
        "Gros œuvre et second œuvre pour bâtiments à usage d'habitation et commercial avec des matériaux de qualité.",
    },
    {
      icon: Construction,
      title: "Construction de Routes",
      description:
        "Terrassement et revêtement routier avec expertise technique pour des infrastructures durables.",
    },
    {
      icon: Palette,
      title: "Travaux de Finitions",
      description:
        "Finitions de haute qualité pour donner à vos projets l'aspect final souhaité.",
    },
    {
      icon: Wrench,
      title: "Rénovations et Réhabilitation",
      description:
        "Travaux de rénovation, réhabilitation et aménagement intérieur (peinture, carrelage, Pierre de Pouma).",
    },
    {
      icon: Droplets,
      title: "Installation Sanitaire",
      description:
        "Conception et installation de systèmes de plomberie conformes aux normes en vigueur.",
    },
    {
      icon: Zap,
      title: "Électricité",
      description:
        "Conception et installation d'installations électriques sécurisées et aux normes.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Notre Expertise
          </h2>
          <div className="w-24 h-1 bg-[#FFB400] mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos domaines d&apos;expertise et laissez-nous transformer
            vos projets en réalité.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;

  return (
    <motion.div
      className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <motion.div
        className="w-16 h-16 bg-[#FFB400] rounded-lg flex items-center justify-center mb-6"
        whileHover={{ rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <Icon className="w-8 h-8 text-white" />
      </motion.div>

      <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>

      <p className="text-gray-600 leading-relaxed">{service.description}</p>

      <motion.button
        className="mt-6 text-[#FFB400] font-semibold hover:text-[#404040] transition-colors duration-300"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
      >
        En savoir plus →
      </motion.button>
    </motion.div>
  );
}
