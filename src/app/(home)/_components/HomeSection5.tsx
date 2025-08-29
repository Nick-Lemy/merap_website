"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

// Left Section Component
const LeftSection = () => {
  return (
    <div className="flex flex-col w-full flex-1 lg:flex-6">
      <div className="px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-30 space-y-6 sm:space-y-8 lg:space-y-15">
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          <h1 className="text-2xl sm:text-3xl lg:text-[42px] font-bold text-gray-900 leading-tight">
            Let&apos;s Build Something Together
          </h1>
          <div className="w-16 sm:w-20 lg:w-25 h-2 lg:h-2.5 bg-[#FFB400]" />
        </div>

        <div className="text-base sm:text-lg text-gray-600 max-w-md">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
            dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut
            quam sed mauris proin feugiat.
          </p>
        </div>

        <button className="border-2 lg:border-3 w-fit text-sm justify-center cursor-pointer hover:bg-[#FFB400] hover:text-white transition-all transform duration-200 flex items-center gap-2 lg:gap-4 font-bold px-4 lg:px-5 py-3 border-[#FFB400] text-[#FFB400] mt-6 lg:mt-8">
          <span>GET IN TOUCH</span>
        </button>
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
    <div className="border-b border-gray-200">
      <button
        className="w-full flex items-center justify-between py-4 sm:py-6 text-left hover:bg-gray-50 transition-colors duration-200"
        onClick={onToggle}
      >
        <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 pr-4 leading-tight">
          {question}
        </h3>
        <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-[#FFB400] rounded-full flex items-center justify-center">
          {isOpen ? (
            <Minus className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          ) : (
            <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          )}
        </div>
      </button>
      {isOpen && (
        <div className="pb-4 sm:pb-6 text-sm sm:text-base text-gray-600 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

// Right Section Component
const RightSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      question: "Donec rutrum congue leo eget malesuada?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat.",
    },
    {
      question: "Vivamus suscipit tortor eget felis porttitor volutpat?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat.",
    },
    {
      question: "Curabitur non nulla sit amet nisl tempus?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat.",
    },
    {
      question: "Pellentesque in ipsum id orci porta dapibus?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat.",
    },
    {
      question: "Curabitur non nulla sit amet nisl?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat.",
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
