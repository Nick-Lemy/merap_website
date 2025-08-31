"use client";

import React from "react";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Target, Users, Award, Lightbulb } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <StorySection />
        <MissionSection />
        <PartnersSection />
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
          À Propos de MERAP
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
          Découvrez l&apos;histoire et la vision de MERAP, votre partenaire de
          confiance pour tous vos projets de construction et
          d&apos;infrastructure.
        </motion.p>
      </div>
    </motion.section>
  );
}

function StorySection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Notre Histoire
            </h2>
            <div className="w-24 h-1 bg-[#FFB400] mb-8" />
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                MERAP a été créée le 20 janvier 2025 à Douala par M. Armel
                Nlend, avec la vision de transformer l&apos;univers de la
                construction au Cameroun et en Afrique centrale.
              </p>
              <p>
                Face à une urbanisation rapide et à une demande accrue pour des
                constructions de qualité, MERAP se distingue par son équipe
                d&apos;experts qualifiés et son matériel moderne, garantissant
                des projets de qualité dans le respect des délais et des
                budgets.
              </p>
              <p>
                Notre gestion rigoureuse et nos partenariats stratégiques nous
                permettent d&apos;apporter des solutions adaptées aux besoins
                des particuliers, entreprises et institutions dans un secteur en
                pleine expansion.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-[#FFB400] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Fondateur</h3>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  M. Armel Nlend
                </h4>
                <p className="text-gray-600">
                  Fondateur et Directeur Général de MERAP, expert en BTP avec
                  une vision innovante pour le développement des infrastructures
                  au Cameroun.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MissionSection() {
  const missions = [
    {
      icon: Target,
      title: "Notre Mission",
      description:
        "Concevoir, réaliser et rénover des infrastructures tout en garantissant la sécurité et la qualité des travaux.",
    },
    {
      icon: Users,
      title: "Notre Engagement",
      description:
        "Satisfaire les besoins de nos clients, partenaires et entreprises en offrant des solutions personnalisées.",
    },
    {
      icon: Award,
      title: "Notre Qualité",
      description:
        "Respecter les normes environnementales et utiliser des matériaux durables pour tous nos projets.",
    },
    {
      icon: Lightbulb,
      title: "Notre Innovation",
      description:
        "Favoriser l'innovation technique et le développement durable dans tous nos projets.",
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
            Nos Missions
          </h2>
          <div className="w-24 h-1 bg-[#FFB400] mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MERAP a pour missions principales de concevoir, réaliser et rénover
            des infrastructures avec un suivi rigoureux de la planification à la
            livraison finale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {missions.map((mission, index) => (
            <MissionCard key={index} mission={mission} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface Mission {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

function MissionCard({ mission, index }: { mission: Mission; index: number }) {
  const Icon = mission.icon;

  return (
    <motion.div
      className="bg-white p-8 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-start gap-6">
        <motion.div
          className="w-16 h-16 bg-[#FFB400] rounded-lg flex items-center justify-center flex-shrink-0"
          whileHover={{ rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            {mission.title}
          </h3>

          <p className="text-gray-600 leading-relaxed">{mission.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

function PartnersSection() {
  const partners = [
    "SCB",
    "CABUILD",
    "MAESTRIA",
    "GEO FONDATION",
    "SOREPCO",
    "QUIFEROU",
    "ROAD VISION",
    "COMAR",
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nos Partenaires
          </h2>
          <div className="w-24 h-1 bg-[#FFB400] mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MERAP collabore avec des partenaires de confiance pour garantir
            l&apos;excellence dans tous nos projets.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg text-center hover:bg-[#FFB400] hover:text-white transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="font-bold text-lg">{partner}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
