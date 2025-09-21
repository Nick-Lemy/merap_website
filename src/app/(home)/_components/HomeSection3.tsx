"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/utils/dummydata";
import ProjectModal from "@/components/ProjectModal";
import { MapPin, ArrowRight } from "lucide-react";

export default function HomeSection3() {
  // Get first 3 projects for homepage display
  const featuredProjects = projects.slice(0, 3);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6">
              Nos Projets Récents
            </h2>
            <div className="w-24 h-2 bg-secondary mx-auto"></div>
          </motion.div>

          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Découvrez quelques-uns de nos projets récents qui témoignent de
            notre expertise et de notre engagement envers l&apos;excellence dans
            la construction.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onProjectClick={handleProjectClick}
            />
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href="/projects">
            <motion.button
              className="bg-gray-900 text-white rounded-md font-medium px-8 py-3 text-sm flex items-center gap-2 border border-gray-900 mx-auto"
              whileTap={{ scale: 0.98 }}
            >
              <span>Voir Tous les Projets</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
}

export interface Project {
  id: number;
  titre: string;
  lieu: string;
  catégorie: string;
  description: string;
  imageDeCouverture: string | StaticImageData;
  autresImages: (string | StaticImageData)[];
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
