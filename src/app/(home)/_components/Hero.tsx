"use client";
import React from "react";
import { motion } from "framer-motion";
import BuildingIcon from "@/components/icons/BuildingIcon";
import BricksIcon from "@/components/icons/BricksIcon";
import ConstructionIcon from "@/components/icons/ConstructionIcon";
import Link from "next/link";

// Simple icon components as placeholders

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-[#1F1F1F]/85" />
      </div>

      <div className="relative z-10 w-full">
        <div className="flex flex-col lg:flex-row min-h-screen">
          <LeftContent />
          {/* <RightContent /> */}
        </div>
      </div>
    </section>
  );
};

function LeftContent() {
  return (
    <div className="flex-1 lg:flex-10 flex items-center px-4 sm:px-6 lg:px-16 py-12">
      <div className="max-w-3xl mx-auto lg:mx-0 w-full">
        {/* Yellow accent bar */}
        <motion.div
          className="flex items-center mb-7 gap-3 sm:gap-5"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="w-2 sm:w-3 h-10 sm:h-18 lg:h-25 bg-secondary"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            MERAP
          </motion.h1>
        </motion.div>

        <motion.p
          className="text-gray-200 text-base sm:text-lg lg:text-xl mb-6 lg:mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Entreprise de BTP spécialisée dans la construction de bâtiments à
          usage d&apos;habitation et commercial, ainsi que les travaux
          d&apos;infrastructures. Notre mission est de transformer
          l&apos;univers de la construction avec des pratiques durables et
          innovantes.
        </motion.p>
        <Link href="/projects">
          <motion.button
            className="bg-primary hover:bg-secondary text-tertiary cursor-pointer font-semibold px-6 sm:px-8 py-3 sm:py-4 transition-colors duration-300 uppercase tracking-wide text-sm sm:text-base"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            DÉCOUVRIR NOS PROJETS
          </motion.button>
        </Link>
      </div>
    </div>
  );
}

function RightContent() {
  return (
    <motion.div
      className="bg-[#d87700] flex-1 lg:flex-4 p-5 flex flex-col gap-6 lg:gap-8 justify-center lg:py-30"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.8 }}
    >
      <motion.h2
        className="text-2xl md:text-3xl lg:text-5xl font-bold text-primary leading-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        Nos Services
      </motion.h2>

      <div className="space-y-6 lg:space-y-10">
        {/* Construction de Bâtiments */}
        <motion.div
          className="flex items-center space-x-3 sm:space-x-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <BuildingIcon className="fill-primary *:text-primary size-12 sm:size-16 lg:size-20 flex-shrink-0" />
          <div>
            <h3 className="text-lg lg:text-xl font-semibold text-primary mb-1">
              Construction de Bâtiments
            </h3>
            <p className=" text-base text-black lg:text-lg">
              Gros œuvre et second œuvre pour habitations et commerces
            </p>
          </div>
        </motion.div>

        {/* Travaux d'Infrastructures */}
        <motion.div
          className="flex items-center space-x-3 sm:space-x-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <BricksIcon className="fill-primary *:text-primary size-12 sm:size-16 lg:size-20 flex-shrink-0" />
          <div>
            <h3 className="text-lg lg:text-xl font-semibold text-primary mb-1">
              Infrastructures
            </h3>
            <p className=" text-base text-black lg:text-lg">
              Construction de routes, terrassement et revêtement
            </p>
          </div>
        </motion.div>

        {/* Études et Gestion */}
        <motion.div
          className="flex items-center space-x-3 sm:space-x-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <ConstructionIcon className="fill-primary *:text-primary size-12 sm:size-16 lg:size-20 flex-shrink-0" />
          <div>
            <h3 className="text-lg lg:text-xl font-semibold text-primary mb-1">
              Études & Gestion
            </h3>
            <p className=" text-base text-black lg:text-lg">
              Études et gestion de projets de A à Z
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Hero;
