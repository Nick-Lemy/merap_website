"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, CheckCircle, Users, Clock, Shield } from "lucide-react";
import { services, Service } from "../../../../utils/servicesData";

export default function ServiceDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const serviceId = params?.id as string;

  const service = services.find((s: Service) => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
            Service non trouvé
          </h1>
          <button
            onClick={() => router.push("/services")}
            className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors"
          >
            Retour aux services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <main>
        <HeroSection service={service} />
        <DetailsSection service={service} />
        <ProcessSection service={service} />
        <QualityCommitmentSection />
      </main>
    </div>
  );
}

function HeroSection({ service }: { service: Service }) {
  const router = useRouter();

  return (
    <motion.section
      className="relative py-20 lg:py-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover w-full h-full"
        />
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/70 z-10" />
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-20">
        {/* Back Button */}
        <motion.button
          onClick={() => router.push("/services")}
          className="flex items-center gap-2 text-white hover:text-[var(--color-secondary)] transition-colors mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ x: -5 }}
        >
          <ArrowLeft size={20} />
          Retour aux services
        </motion.button>

        <div className="text-center">
          <motion.h1
            className="text-3xl lg:text-6xl font-bold text-[var(--color-tertiary)] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {service.title}
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
          <motion.p
            className="text-lg text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {service.shortDescription}
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}

function DetailsSection({ service }: { service: Service }) {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-6">
              Description Détaillée
            </h2>
            <div className="w-16 h-1 bg-[var(--color-secondary)] mb-8" />
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {service.detailedDescription}
            </p>

            {/* Key Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-4">
                Points Clés
              </h3>
              {service.keyFeatures.map((feature: string, index: number) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <CheckCircle
                    className="text-[var(--color-secondary)] mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-600">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection({ service }: { service: Service }) {
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
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-6">
            Notre Processus
          </h2>
          <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les étapes clés de notre approche méthodologique
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.process.map((step: Service["process"][0], index: number) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[var(--color-secondary)] text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-primary)]">
                  {step.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
              {step.details && (
                <ul className="mt-4 space-y-2 text-sm text-gray-500">
                  {step.details.map((detail: string, detailIndex: number) => (
                    <li key={detailIndex} className="flex items-start gap-2">
                      <span className="text-[var(--color-secondary)] mt-1">
                        •
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QualityCommitmentSection() {
  const commitments = [
    {
      icon: Shield,
      title: "Matériaux Certifiés",
      description:
        "Utilisation exclusive de matériaux certifiés et de qualité supérieure",
    },
    {
      icon: Clock,
      title: "Respect des Délais",
      description: "Engagement ferme sur les délais et budgets convenus",
    },
    {
      icon: Users,
      title: "Équipes Qualifiées",
      description:
        "Formation continue de nos équipes aux dernières innovations techniques",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-[var(--color-primary)]">
      <div className="container mx-auto px-6 lg:px-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Engagement Qualité
          </h2>
          <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-8" />
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Chez MERAP BTP, nous nous engageons à fournir des services
            d&apos;excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {commitments.map((commitment, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="w-20 h-20 bg-[var(--color-secondary)] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <commitment.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {commitment.title}
              </h3>
              <p className="text-gray-200 leading-relaxed">
                {commitment.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-xl text-white font-medium">
            Pour des services fiables et sécurisés, faites confiance à MERAP
            BTP.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
