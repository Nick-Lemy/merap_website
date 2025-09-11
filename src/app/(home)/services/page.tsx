"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Building,
  Construction,
  Wrench,
  Palette,
  Droplets,
  Zap,
} from "lucide-react";
import Image, { StaticImageData } from "next/image";
import RenovationImage from "@/assets/renovation.png";
import Etude from "@/assets/etude.jpg";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <ServicesGrid />
      </main>
    </div>
  );
}

function HeroSection() {
  return (
    <motion.section
      className="relative py-20 lg:py-32"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/african-american-worker-standing-uniform-wearing-safety-hat-factory_1303-30616.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-[#1F1F1F]/85 z-0 pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-20 text-center relative z-10">
        <motion.h1
          className="text-3xl lg:text-6xl font-bold text-[var(--color-tertiary)] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Nos Services
        </motion.h1>
        <motion.div
          className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
        <motion.p
          className="text-lg text-gray-300 max-w-3xl mx-auto"
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
      image:
        "https://i.pinimg.com/1200x/42/28/24/42282462f38c8cae0035f69733a9ef7f.jpg",
      icon: Building,
      title: "Construction de Bâtiments",
      description:
        "Gros œuvre et second œuvre pour bâtiments à usage d'habitation et commercial avec des matériaux de qualité.",
    },
    {
      image: Etude,
      icon: null,
      title: "Études et Gestion de Projets",
      description:
        "Conception, planification et gestion complète de vos projets de construction avec un suivi rigoureux Du debut jusqu'a la fin.",
    },
    {
      image: RenovationImage,
      icon: Wrench,
      title: "Rénovations et Réhabilitation",
      description:
        "Travaux de rénovation, réhabilitation et aménagement intérieur (peinture, carrelage, Pierre de Pouma).",
    },
    {
      image:
        "https://img.freepik.com/photos-premium/pelle-niveleuse-se-tiennent-cote-cote-contre-ciel-bleu-engins-terrassement-construction-lourde-construction-routes-communications-souterraines-industrie-construction_331695-519.jpg",
      icon: Construction,
      title: "Construction de Routes",
      description:
        "Terrassement et revêtement routier avec expertise technique pour des infrastructures durables.",
    },
    {
      image:
        "https://comparateurtravaux.fr/wp-content/uploads/2017/10/cr%C3%A9pis-8.jpg",
      icon: Palette,
      title: "Travaux de Finitions",
      description:
        "Finitions de haute qualité pour donner à vos projets l'aspect final souhaité.",
    },
    {
      image:
        "https://img.freepik.com/premium-photo/closeup-african-plumber-showing-one-dirty-one-clean-filters-changing-water-filters_404612-2338.jpg",
      icon: Droplets,
      title: "Installation Sanitaire",
      description:
        "Conception et installation de systèmes de plomberie conformes aux normes en vigueur.",
    },
    {
      image:
        "https://i.pinimg.com/736x/20/f5/21/20f521248c2b9d07de1b59932871df30.jpg",
      icon: Zap,
      title: "Électricité",
      description:
        "Conception et installation électrique sécurisées et aux normes.",
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
          <h2 className="text-3xl lg:text-5xl font-bold text-[var(--color-primary)] mb-6">
            Notre Expertise
          </h2>
          <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-8" />
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
  image: string | StaticImageData;
  title: string;
  description: string;
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      className="p-8 relative rounded-md border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover w-full h-full"
        />
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>
      {/* Content */}
      <div className="space-y-2 relative z-20 flex flex-col items-start">
        <h3 className="text-xl font-bold text-secondary mb-4">
          {service.title}
        </h3>
        <p className="text-gray-200 leading-relaxed">{service.description}</p>
        {/* <motion.button
          className="mt-6 cursor-pointer text-[var(--color-secondary)] font-semibold hover:text-[var(--color-primary)] transition-colors duration-300"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          En savoir plus →
        </motion.button> */}
      </div>
    </motion.div>
  );
}
