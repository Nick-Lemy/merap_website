"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/utils/dummydata";
import ProjectModal from "@/components/ProjectModal";
import { MapPin } from "lucide-react";

export default function HomeSection3() {
  // Get first 3 projects for homepage display
  const featuredProjects = projects.slice(0, 3);
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
    <motion.section
      className=" lg:px-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="lg:px-30.5 py-16 sm:py-20 lg:py-28.5 gap-6 lg:gap-8 flex-8 flex flex-col items-center justify-center">
        <motion.div
          className="flex items-center flex-col justify-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-primary text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Nos Projets Récents
          </motion.h1>
          <motion.div
            className="w-16 sm:w-20 lg:w-25 h-2 lg:h-2.5 bg-secondary mt-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </motion.div>
        <motion.div
          className="px-6 lg:px-0 grid grid-cols-1 lg:grid-cols-3 text-lg gap-10 text-[#666666] *:flex-1"
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
        <Link href="/projects">
          <motion.button
            className="w-fit mt-10 justify-center text-sm border-3 cursor-pointer  transition-all transform duration-200 flex items-center gap-4 font-bold px-14 py-3 border-primary text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            VOIR TOUS LES PROJETS
          </motion.button>
        </Link>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </motion.section>
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
      className="flex flex-col gap-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={project.imageDeCouverture}
          className="aspect-2/1 object-cover"
          alt={project.titre}
          width={500}
          height={500}
        />
      </motion.div>
      <motion.div
        className="border-3 flex gap-10 flex-col lg:py-10 lg:px-7 px-5 py-8 border-gray-500"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="space-y-5">
          <div className="flex flex-col gap-2">
            <span className="text-secondary text-sm font-medium">
              {project.catégorie}
            </span>
            <h3 className="text-primary text-xl font-[520] line-clamp-2">
              {project.titre}
            </h3>
            <p className="text-sm flex gap-1 items-center text-gray-600 font-medium">
              <MapPin className="size-5" />
              {project.lieu}
            </p>
          </div>

          <p className="text-lg line-clamp-3">{project.description}</p>
        </div>
        <motion.button
          onClick={() => onProjectClick(project)}
          className="w-fit justify-center text-xs border-3 cursor-pointer hover:bg-secondary hover:text-tertiary transition-all transform duration-200 flex items-center gap-4 font-bold px-4 py-2 border-primary text-primary"
          transition={{ duration: 0.3 }}
        >
          VOIR LE PROJET
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
