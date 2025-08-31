"use client";
import React from "react";
import Section2Img from "@/assets/home-section2.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HomeSection2() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col lg:flex-row h-full justify-stretch items-stretch">
        <motion.div
          className="flex-1 lg:flex-4 order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src={Section2Img}
            alt="Section 2"
            className="w-full aspect-[2/1.5] lg:aspect-auto h-auto lg:h-full object-cover"
          />
        </motion.div>
        <motion.div
          className="flex flex-col w-full flex-1 lg:flex-10 order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="px-4 sm:px-6 lg:px-30.5 py-8 sm:py-12 lg:py-28.5 space-y-4 sm:space-y-6 flex-8">
            <motion.h1
              className="text-2xl sm:text-3xl lg:text-[42px] font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Excellence et Innovation dans la Construction
            </motion.h1>

            <motion.div
              className="w-16 sm:w-20 lg:w-25 h-2 lg:h-2.5 bg-[#FFB400]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            />
            <motion.div
              className="flex flex-col lg:flex-row text-base sm:text-lg gap-6 lg:gap-20 text-[#666666]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div className="flex flex-col gap-4 sm:gap-6 lg:gap-10 flex-1">
                <p>
                  MERAP, créée le 20 janvier 2025 à Douala par M. Armel Nlend,
                  est une entreprise de BTP spécialisée dans la construction de
                  bâtiments à usage d&apos;habitation et commercial ainsi que
                  les travaux d&apos;infrastructures.
                </p>
                <p>
                  Face à une urbanisation rapide et à une demande accrue pour
                  des constructions de qualité, MERAP se distingue par son
                  équipe d&apos;experts qualifiés et son matériel moderne.
                </p>
              </div>
              <div className="flex flex-col justify-between gap-4 lg:gap-0 flex-1">
                <p>
                  Notre mission est de concevoir, réaliser et rénover des
                  infrastructures tout en garantissant la sécurité et la qualité
                  des travaux. Nous nous engageons à respecter les normes
                  environnementales et à utiliser des matériaux durables.
                </p>
                <motion.button
                  className="border-2 lg:border-3 w-fit justify-center cursor-pointer hover:bg-[#404040] hover:text-white transition-all transform duration-200 flex items-center gap-2 lg:gap-4 font-bold p-3 lg:p-4 border-[#404040] text-[#404040] text-sm lg:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <span>LEARN MORE</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="flex w-full flex-col lg:flex-row flex-1 lg:flex-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="bg-[#FFB400] flex flex-col items-center justify-center gap-1 lg:gap-2 text-black flex-1 h-full py-12 lg:py-0"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                2025
              </h1>
              <p className="font-extrabold text-xs sm:text-sm text-center px-2">
                ANNÉE DE CRÉATION
              </p>
            </motion.div>
            <motion.div
              className="bg-[#404040] flex flex-col items-center justify-center gap-1 lg:gap-2 text-white flex-1 h-full py-12 lg:py-0"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                100%
              </h1>
              <p className="font-extrabold text-xs sm:text-sm text-center px-2">
                SATISFACTION CLIENT
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
