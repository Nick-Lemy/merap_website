"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ProjectImage from "@/assets/project-card.png";
import { projects } from "@/utils/dummydata";
import { ArrowRight, MapPin } from "lucide-react";
import ProjectModal from "@/components/ProjectModal";
import { Project } from "../_components/HomeSection3";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <ProjectsGrid onProjectClick={handleProjectClick} />
      </main>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

function HeroSection() {
  return (
    <motion.section
      className="relative py-20 lg:py-32"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/e3/9f/cc/e39fcce361440cc48d1c8ee40dc04e30.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-[#1F1F1F]/80 z-0 pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-20 text-center relative z-10">
        <motion.h1
          className="text-4xl lg:text-6xl font-bold text-[var(--color-tertiary)] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Nos Projets
        </motion.h1>
        <motion.div
          className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-8"
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

function ProjectsGrid({
  onProjectClick,
}: {
  onProjectClick: (project: (typeof projects)[0]) => void;
}) {
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
            Nos Réalisations
          </h2>
          <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chaque projet est unique et reflète notre engagement à fournir des
            solutions de construction de haute qualité.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              onProjectClick={onProjectClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  onProjectClick,
}: {
  project: Project;
  index: number;
  onProjectClick: (project: Project) => void;
}) {
  return (
    <motion.div
      className="group bg-white border rounded-md border-gray-200 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
    >
      {/* Image Container */}
      <motion.div
        className="relative aspect-[4/3] overflow-hidden bg-gray-100"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={project.imageDeCouverture}
          className="w-full h-full object-cover"
          alt={project.titre}
          width={400}
          height={300}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-medium px-3 py-1.5 border border-gray-200">
            {project.catégorie}
          </span>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="p-6 flex flex-col"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Title and Location */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight">
            {project.titre}
          </h3>
          <div className="flex items-center gap-1.5 text-sm text-gray-500">
            <MapPin className="w-4 h-4" />
            <span>{project.lieu}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Action Button */}
        <motion.button
          onClick={() => onProjectClick(project)}
          className="w-full bg-primary text-white font-medium px-4 py-2.5 text-sm flex items-center justify-center gap-2 border border-primary rounded-md"
          whileTap={{ scale: 0.98 }}
        >
          <span>Voir le Projet</span>
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
