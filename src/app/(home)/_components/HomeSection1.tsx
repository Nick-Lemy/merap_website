"use client";
import React from "react";
import { PhoneIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function HomeSection1() {
  return (
    <section className="py-10">
      <div className="flex flex-col lg:flex-row items-center text-center gap-3 lg:justify-evenly lg:gap-50">
        <h1 className="text-2xl text-gray-700 lg:text-3xl font-bold">
          Appellez Nous Pour Plus D&apos;infomation
        </h1>
        <a href={"tel:+237657055365"}>
          <motion.button
            className="group bg-secondary hover:bg-secondary/90 text-white font-semibold px-5  py-3 rounded-md transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
            whileTap={{ scale: 0.95 }}
          >
            <PhoneIcon className="fill-white w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Nous Joindre
          </motion.button>
        </a>
      </div>
    </section>
  );
}
