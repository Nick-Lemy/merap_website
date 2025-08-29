import React from "react";
import { Star } from "lucide-react";

export default function HomeSection6() {
  return (
    <section className="bg-gray-50 lg:px-20">
      <div className="lg:px-30.5 py-16 sm:py-20 lg:py-28.5 gap-6 lg:gap-8 flex-8 flex flex-col items-center justify-center">
        <div className="flex items-center flex-col justify-center">
          <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-gray-900 text-center">
            Client Testimonials
          </h1>
          <div className="w-16 sm:w-20 lg:w-25 h-2 lg:h-2.5 bg-[#FFB400] mt-4" />
        </div>
        <div className="px-4 sm:px-6 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 w-full max-w-7xl mt-3 lg:mt-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <TestimonialCard
              key={index}
              quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam."
              author="John Smith"
              rating={5}
            />
          ))}
        </div>
      </div>
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
    <div className="bg-white border border-gray-200 p-6 lg:p-8 flex flex-col gap-6 transition-shadow duration-300 hover:shadow-md">
      {/* Star Rating */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < rating
                ? "text-[#FFB400] fill-[#FFB400]"
                : "text-gray-300 fill-gray-300"
            }`}
          />
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
    </div>
  );
}
