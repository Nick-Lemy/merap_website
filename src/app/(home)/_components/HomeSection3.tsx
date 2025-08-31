"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import ProjectImage from "@/assets/project-card.png";

export default function HomeSection3() {
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
            className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-gray-900 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Nos Projets Récents
          </motion.h1>
          <motion.div
            className="w-16 sm:w-20 lg:w-25 h-2 lg:h-2.5 bg-[#FFB400] mt-4"
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
          {Array.from({ length: 3 }).map((_, index) => (
            <ProjectCard key={index} />
          ))}
        </motion.div>
        <motion.button
          className="w-fit mt-10 justify-center text-sm border-3 cursor-pointer  transition-all transform duration-200 flex items-center gap-4 font-bold px-14 py-3 border-black text-black "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          VOIR TOUS LES PROJETS
        </motion.button>
      </div>
    </motion.section>
  );
}

function ProjectCard() {
  return (
    <motion.div
      className="flex flex-col gap-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={ProjectImage}
          className="aspect-2/1 object-cover"
          alt="Project Image"
          width={500}
          height={500}
        />
      </motion.div>
      <motion.div
        className="border-3 flex gap-10 flex-col lg:py-10 lg:px-7 px-5 py-8 border-[#666666]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="space-y-5">
          <h3 className="text-black text-xl font-[520]">Projet Résidentiel</h3>

          <p className="text-lg">
            Construction complète d&apos;une villa moderne avec piscine. Travaux
            de gros œuvre, aménagement intérieur haut de gamme et finitions
            personnalisées selon les exigences du client.
          </p>
        </div>
        <motion.button
          className="w-fit justify-center text-xs border-3 cursor-pointer  transition-all transform duration-200 flex items-center gap-4 font-bold px-4 py-2 border-[#666666] text-[#666666]"
          whileHover={{ borderColor: "#FFB400", color: "#FFB400" }}
          transition={{ duration: 0.3 }}
        >
          VOIR LE PROJET
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
