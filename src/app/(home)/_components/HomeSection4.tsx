"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomeSection4() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Content */}
          <motion.div
            className="space-y-8 flex-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Video Section */}
            <motion.div
              className="relative rounded-lg h-full overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/JQBsU8j68KQ?autoplay=1&mute=1&si=example"
                title="MERAP Construction Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>

          {/* Right Content */}

          <motion.div
            className="flex flex-col flex-4 items-end"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-8 flex flex-col items-end text-right"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6">
                Innovation et Excellence depuis{" "}
                <span className="text-secondary">2025</span>
              </h2>
              <div className="w-24 h-2 bg-secondary"></div>
            </motion.div>

            <motion.div
              className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p
                style={{
                  textAlign: "justify",
                }}
              >
                Notre équipe d&apos;experts qualifiés et notre matériel moderne
                nous permettent de garantir des projets de qualité dans le
                respect des délais et des budgets. MERAP se distingue par sa
                gestion rigoureuse et ses partenariats stratégiques.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link href="/about">
                <motion.button
                  className="bg-primary text-white font-semibold px-8 py-4 rounded-md flex items-center gap-2"
                  whileTap={{ scale: 0.95 }}
                >
                  À Propos de MERAP
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
