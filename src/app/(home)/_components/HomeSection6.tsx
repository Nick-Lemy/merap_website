"use client";
import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function HomeSection6() {
  const testimonials = [
    {
      quote:
        "MERAP a réalisé la construction de notre immeuble résidentiel avec un professionnalisme exemplaire. Délais respectés et qualité au rendez-vous !",
      author: "M. Jean Baptiste",
      rating: 5,
    },
    {
      quote:
        "Excellent travail pour la rénovation de notre bureau. L'équipe MERAP est compétente et à l'écoute de nos besoins. Je recommande vivement.",
      author: "Mme Sarah Kamga",
      rating: 5,
    },
    {
      quote:
        "Nous avons fait appel à MERAP pour des travaux d'infrastructure. Très satisfait du résultat et du suivi du projet. Une équipe fiable.",
      author: "M. Paul Nguema",
      rating: 5,
    },
  ];

  return (
    <section className="bg-gray-50 lg:px-20">
      <motion.div
        className="lg:px-30.5 py-16 sm:py-20 lg:py-28.5 gap-6 lg:gap-8 flex-8 flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="flex items-center flex-col justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-primary text-center">
            Témoignages Clients
          </h1>
          <motion.div
            className="w-16 sm:w-20 lg:w-25 h-2 lg:h-2.5 bg-secondary mt-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </motion.div>
        <div className="px-4 sm:px-6 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-7 w-full max-w-7xl mt-3 lg:mt-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.2 + 0.4,
                ease: "easeOut",
              }}
            >
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
                rating={testimonial.rating}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  rating: number;
}

function TestimonialCard({ quote, author, rating }: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-white border h-full border-gray-200 p-6 lg:p-8 flex flex-col gap-6 transition-all duration-300 hover:border-gray-300"
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Star Rating */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <Star
              className={`w-5 h-5 ${
                index < rating
                  ? "text-secondary fill-secondary"
                  : "text-gray-300 fill-gray-300"
              }`}
            />
          </motion.div>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-gray-600 text-base lg:text-lg leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="mt-auto">
        <p className="text-gray-900 font-semibold text-sm">{author}</p>
      </div>
    </motion.div>
  );
}
