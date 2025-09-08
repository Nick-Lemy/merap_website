"use client";
import React from "react";
import { motion } from "framer-motion";
import HeroImage from "@/assets/hero.jpg";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  Building2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse pt-16 lg:flex-row min-h-screen items-center">
          <LeftContent />
          <RightContent />
        </div>
      </div>
    </section>
  );
};

function LeftContent() {
  return (
    <div className="flex-1 lg:w-3/5 flex items-center py-16 lg:py-24">
      <div className="w-full max-w-2xl">
        {/* Main Heading */}
        <motion.h1
          className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Construisons l&apos;Avenir du{" "}
          <span className="text-secondary">Cameroun</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-gray-600 text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          MERAP SARL - Votre partenaire de confiance pour des projets de
          construction d&apos;excellence, d&apos;infrastructures durables et
          d&apos;innovations architecturales au Cameroun.
        </motion.p>

        {/* Key Benefits */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            "Expertise Certifiée",
            "Matériaux Durables",
            "Respect des Délais",
            "Prix Compétitifs",
          ].map((benefit, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
              <span className="text-gray-700 text-sm">{benefit}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link href="/projects">
            <motion.button
              className="group bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-4 rounded-md transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
              whileTap={{ scale: 0.95 }}
            >
              Découvrir nos Projets
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
          <Link href="/contact">
            <motion.button
              className="border-2 border-gray-900 hover:border-secondary text-gray-700 hover:text-secondary font-semibold px-8 py-4 rounded-md transition-all duration-300"
              whileTap={{ scale: 0.95 }}
            >
              Demander un Devis
            </motion.button>
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="flex flex-wrap items-center gap-8 mt-12 pt-8 border-t border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-secondary" />
            <span className="text-gray-600 text-sm">50+ Employés</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-secondary" />
            <span className="text-gray-600 text-sm">100+ Projets</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-secondary" />
            <span className="text-gray-600 text-sm">ISO 9001</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function RightContent() {
  return (
    <motion.div
      className="flex-1 lg:w-2/5 relative"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      {/* Main Image */}
      <motion.div
        className="relative rounded-2xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Image
          src={HeroImage}
          alt="Construction Excellence"
          width={600}
          height={600}
          className="w-full h-[500px] lg:h-[600px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute -top-4 -right-4 size-16 lg:size-20 bg-secondary rounded-full flex items-center justify-center shadow-lg"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Building2 className="size-8 lg:size-10 text-white" />
      </motion.div>

      <motion.div
        className="absolute -bottom-4 -left-4 size-12 lg:size-16 bg-primary rounded-full flex items-center justify-center shadow-lg"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <Award className="size-6 lg:size-8 text-white" />
      </motion.div>

      {/* Testimonial Card */}
      <motion.div
        className="absolute bottom-6 right-6 bg-white rounded-xl p-4 shadow-xl max-w-xs"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">AN</span>
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-sm">Armel Nlend</p>
            <p className="text-gray-600 text-xs">Fondateur & CEO</p>
          </div>
        </div>
        <p className="text-gray-700 text-sm">
          &quot;Construire l&apos;avenir du Cameroun avec excellence et
          innovation&quot;
        </p>
        <div className="flex items-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-secondary fill-current" />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Hero;
