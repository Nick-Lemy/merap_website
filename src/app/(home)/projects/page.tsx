"use client";

import React from "react";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import ProjectImage from "@/assets/project-card.png";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <ProjectsGrid />
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
          Nos Projets
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
          Découvrez quelques-uns de nos projets et réalisations qui témoignent
          de notre expertise et de notre engagement envers l&apos;excellence.
        </motion.p>
      </div>
    </motion.section>
  );
}

function ProjectsGrid() {
  const projects = [
    {
      title: "Résidence Les Palmiers",
      category: "Bâtiment Résidentiel",
      description:
        "Construction d'un immeuble résidentiel moderne de 6 étages avec 24 appartements.",
    },
    {
      title: "Centre Commercial Akwa",
      category: "Bâtiment Commercial",
      description:
        "Réalisation d'un centre commercial avec espaces de vente et parking souterrain.",
    },
    {
      title: "Route Douala-Yaoundé",
      category: "Infrastructure",
      description:
        "Travaux de réfection et d'amélioration d'un tronçon de 15km.",
    },
    {
      title: "Villa Moderne Bonanjo",
      category: "Rénovation",
      description:
        "Rénovation complète d'une villa avec aménagement intérieur et extérieur.",
    },
    {
      title: "Complexe Scolaire",
      category: "Bâtiment Public",
      description:
        "Construction d'un complexe scolaire avec 12 salles de classe et laboratoires.",
    },
    {
      title: "Pont de Wouri",
      category: "Infrastructure",
      description:
        "Travaux de maintenance et renforcement du pont avec nouvelles normes de sécurité.",
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
            Nos Réalisations
          </h2>
          <div className="w-24 h-1 bg-[#FFB400] mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chaque projet est unique et reflète notre engagement à fournir des
            solutions de construction de haute qualité.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface Project {
  title: string;
  category: string;
  description: string;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <motion.div
        className="relative overflow-hidden"
        transition={{ duration: 0.3 }}
      >
        <Image
          src={ProjectImage}
          alt={project.title}
          className="w-full h-48 object-cover"
          width={400}
          height={300}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-[#FFB400] text-white px-3 py-1 rounded-full text-sm font-semibold">
            {project.category}
          </span>
        </div>
      </motion.div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {project.title}
        </h3>

        <p className="text-gray-600 leading-relaxed mb-4">
          {project.description}
        </p>

        <motion.button
          className="text-[#FFB400] font-semibold hover:text-[#404040] transition-colors duration-300"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          Voir les détails →
        </motion.button>
      </div>
    </motion.div>
  );
}
