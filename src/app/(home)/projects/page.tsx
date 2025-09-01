"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ProjectImage from "@/assets/project-card.png";
import { projects } from "@/utils/dummydata";
import { MapPin } from "lucide-react";
import ProjectModal from "@/components/ProjectModal";

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
      className="bg-[var(--color-primary)] py-20 lg:py-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 lg:px-20 text-center">
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

interface Project {
  id: number;
  titre: string;
  lieu: string;
  catégorie: string;
  description: string;
  imageDeCouverture: string;
  autresImages: string[];
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
      className="bg-white rounded-sm border border-secondary overflow-hidden  transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div
        className="relative overflow-hidden"
        transition={{ duration: 0.3 }}
      >
        <Image
          src={project.imageDeCouverture || ProjectImage}
          alt={project.titre}
          className="w-full h-48 object-cover"
          width={400}
          height={300}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-[var(--color-secondary)] text-[var(--color-tertiary)] px-3 py-1 rounded-full text-sm font-semibold">
            {project.catégorie}
          </span>
        </div>
      </motion.div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {project.titre}
        </h3>

        <p className="text-sm flex gap-1 items-center text-primary font-medium mb-2">
          <MapPin /> {project.lieu}
        </p>

        <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        <motion.button
          onClick={() => onProjectClick(project)}
          className="text-[var(--color-secondary)] cursor-pointer font-semibold hover:text-[var(--color-primary)] transition-colors duration-300"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          Voir les détails →
        </motion.button>
      </div>
    </motion.div>
  );
}
