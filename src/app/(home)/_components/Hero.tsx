import BricksIcon from "@/components/icons/BricksIcon";
import BuildingIcon from "@/components/icons/BuildingIcon";
import ConstructionIcon from "@/components/icons/ConstructionIcon";
import React from "react";

const Hero = () => {
  return (
    <section className="relative flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-[#1F1F1F]/85" />
      </div>

      <div className="relative z-10 w-full">
        <div className="flex flex-col lg:flex-row">
          <LeftContent />
          <RightContent />
        </div>
      </div>
    </section>
  );
};

function LeftContent() {
  return (
    <div className="flex-10 flex items-center px-6 sm:px-8 lg:px-16 py-12 lg:py-0">
      <div className="max-w-3xl mx-auto">
        {/* Yellow accent bar */}
        <div className="flex items-center mb-5 gap-5">
          <div className="w-3 h-25 bg-[#FFB400] " />
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
            Construction
          </h1>
        </div>

        <p className="text-gray-200 text-lg sm:text-xl mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
          egestas pellentesque libero dolor in diam consequat ut. Mi nibh amet
          viverra id aliquet neque odio.
        </p>

        <button className="bg-[#FFB400] hover:bg-yellow-600 text-white cursor-pointer font-semibold px-8 py-4 transition-colors duration-300 uppercase tracking-wide">
          VIEW OUR WORK
        </button>
      </div>
    </div>
  );
}

function RightContent() {
  return (
    <div className="bg-[#FFB400] flex-4 lg:py-30 p-8 lg:p-12 flex flex-col gap-8 justify-center">
      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#404040] leading-tight">
        Our Services
      </h2>

      <div className="space-y-10">
        {/* Building Construction */}
        <div className="flex items-center space-x-4">
          {/* image */}
          <BuildingIcon className="size-20" />
          <div>
            <h3 className="text-xl font-semibold text-[#2A2A2A] mb-1">
              Building Construction
            </h3>
            <p className="text-white text-lg">
              Lorem ipsum dolor sit consectetur adipiscing elit.
            </p>
          </div>
        </div>

        {/* Foundation Work */}
        <div className="flex items-start space-x-4">
          <BricksIcon className="size-20" />
          <div>
            <h3 className="text-xl font-semibold text-[#2A2A2A] mb-1">
              Foundation Work
            </h3>
            <p className="text-white text-lg">
              Lorem ipsum dolor sit consectetur adipiscing elit.
            </p>
          </div>
        </div>

        {/* Site Management */}
        <div className="flex items-start space-x-4">
          <ConstructionIcon className="size-20" />
          <div>
            <h3 className="text-xl font-semibold text-[#2A2A2A] mb-1">
              Site Management
            </h3>
            <p className="text-white text-lg">
              Lorem ipsum dolor sit consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
