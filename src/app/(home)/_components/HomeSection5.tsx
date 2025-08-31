"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Left Section Component
const LeftSection = () => {
  return (
    <div className="flex flex-col w-full flex-1 lg:flex-6">
      <div className="px-4 sm:px-6 lg:px-10 py-12 lg:py-30 space-y-6 sm:space-y-8 lg:space-y-15">
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          <h1 className="text-2xl sm:text-3xl lg:text-[42px] font-bold text-gray-900 leading-tight">
            Construisons Ensemble Votre Projet
          </h1>
          <div className="w-16 sm:w-20 lg:w-25 h-2 lg:h-2.5 bg-[#FFB400]" />
        </div>

        <div className="text-base sm:text-lg text-gray-600 max-w-md">
          <p>
            Vous avez des questions sur nos services ? Découvrez les réponses
            aux questions les plus fréquemment posées par nos clients ou
            contactez-nous directement pour plus d&apos;informations.
          </p>
        </div>

        <Link href="/contact">
          <button className="border-2 lg:border-3 w-fit text-sm justify-center cursor-pointer hover:bg-[#FFB400] hover:text-white transition-all transform duration-200 flex items-center gap-2 lg:gap-4 font-bold px-4 lg:px-5 py-3 border-[#FFB400] text-[#FFB400] mt-6 lg:mt-8">
            <span>NOUS CONTACTER</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

// FAQ Item Component
const FAQItem = ({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <motion.div
      className="border-b border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.button
        className="w-full flex items-center justify-between py-4 sm:py-6 text-left hover:bg-gray-50 transition-colors duration-200"
        onClick={onToggle}
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <h3 className="text-base lg:text-lg font-semibold text-gray-900 pr-4 leading-tight">
          {question}
        </h3>
        <motion.div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-[#FFB400] rounded-full flex items-center justify-center">
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <Minus className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            ) : (
              <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            )}
          </motion.div>
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-4 sm:pb-6 text-sm sm:text-base text-gray-600 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Right Section Component
const RightSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      question: "Quels types de projets MERAP peut-elle réaliser ?",
      answer:
        "MERAP est spécialisée dans la construction de bâtiments à usage d'habitation et commercial, les travaux d'infrastructures routières, les rénovations, l'installation sanitaire, électrique et les finitions. Nous proposons également des services d'études et de gestion de projets.",
    },
    {
      question: "Dans quelles zones géographiques MERAP intervient-elle ?",
      answer:
        "MERAP est basée à Douala et intervient principalement au Cameroun. Nous couvrons l'ensemble du territoire camerounais pour tous types de projets de construction et d'infrastructure.",
    },
    {
      question: "Comment obtenir un devis pour mon projet ?",
      answer:
        "Vous pouvez nous contacter par téléphone au +237 667055365 ou +237 688687717, par email à meraps25@gmail.com, ou utiliser notre formulaire de contact en ligne. Nous étudierons votre projet et vous fournirons un devis détaillé gratuitement.",
    },
    {
      question: "Quels sont les délais moyens de réalisation ?",
      answer:
        "Les délais varient selon la complexité et la taille du projet. MERAP s'engage à respecter les délais convenus lors de la signature du contrat. Nous fournissons un planning détaillé pour chaque projet avec des étapes claires.",
    },
    {
      question: "MERAP propose-t-elle des garanties sur ses travaux ?",
      answer:
        "Oui, MERAP garantit la qualité de tous ses travaux. Nous respectons les normes en vigueur et utilisons des matériaux durables. Les garanties spécifiques sont détaillées dans chaque contrat selon le type de projet.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex-1 lg:flex-10 w-full flex items-center justify-center">
      <div className="bg-white px-4 sm:px-8 lg:px-16 py-6 sm:py-8 lg:py-10 w-full">
        <div className="max-w-2xl mx-auto">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Main HomeSection5 Component
export default function HomeSection5() {
  return (
    <section className="bg-gray-100">
      <div className="flex h-full flex-col lg:flex-row justify-center w-full max-w-[88rem] mx-auto items-center">
        <LeftSection />
        <RightSection />
      </div>
    </section>
  );
}
