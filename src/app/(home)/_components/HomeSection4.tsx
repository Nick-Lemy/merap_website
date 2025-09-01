import React from "react";
import { Play } from "lucide-react";
import Image from "next/image";

export default function HomeSection4() {
  return (
    <section>
      <div className="flex flex-col lg:flex-row h-full justify-stretch items-stretch">
        <div className="flex flex-col w-full flex-1 lg:flex-4 order-2 lg:order-1">
          <div className="px-4 sm:px-6 lg:px-10 py-12 lg:py-30 space-y-6 sm:space-y-8 lg:space-y-15 bg-[#2D2D2D] text-white">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <h1 className="text-2xl sm:text-3xl lg:text-[42px] font-bold leading-tight">
                MERAP - Innovation et Excellence depuis 2025
              </h1>
              <div className="w-16 sm:w-20 lg:w-25 h-2 lg:h-2.5 bg-secondary" />
            </div>

            <div className="text-base sm:text-lg text-gray-300 max-w-md">
              <p>
                Notre équipe d&apos;experts qualifiés et notre matériel moderne
                nous permettent de garantir des projets de qualité dans le
                respect des délais et des budgets. MERAP se distingue par sa
                gestion rigoureuse et ses partenariats stratégiques.
              </p>
            </div>

            <button className="text-sm border-2 lg:border-3 w-fit justify-center cursor-pointer bg-secondary hover:bg-primary text-tertiary transition-all transform duration-200 flex items-center gap-2 lg:gap-4 font-bold px-4 lg:px-5 py-2 border-secondary mt-6 lg:mt-8">
              <span>À PROPOS</span>
            </button>
          </div>
        </div>

        <div className="flex-1 lg:flex-10 flex flex-col relative order-1 lg:order-2">
          {/* Background Image with overlay */}
          <div className="w-full h-full bg-none lg:bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] flex-1 lg:flex-10 bg-cover bg-center bg-no-repeat relative">
            <Image
              width={500}
              height={500}
              src={
                "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              }
              alt={"Image"}
              className="object-cover aspect-[2/1.5] lg:hidden"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/80"></div>

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 sm:w-20 sm:h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-200 group">
                <Play
                  className="w-6 h-6 sm:w-8 sm:h-8 text-black ml-1 group-hover:scale-110 transition-transform duration-200"
                  fill="currentColor"
                />
              </button>
            </div>
          </div>
          <div className="flex w-full flex-col lg:flex-row flex-1 h-full lg:flex-2">
            <div className="bg-secondary flex flex-col items-center justify-center gap-1 sm:gap-2 text-tertiary flex-1 h-full py-8 lg:py-0">
              <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-center px-2">
                Appelez pour un Devis
              </h2>
              <p className="text-sm sm:text-xl lg:text-2xl font-bold">
                +237 667055365
              </p>
            </div>
            <div className="bg-tertiary flex flex-col items-center justify-center gap-1 sm:gap-2 text-primary flex-1 h-full py-8 lg:py-0">
              <button className="text-xs sm:text-sm border-2 border-primary px-3 sm:px-4 lg:px-6 py-2 lg:py-3 font-bold hover:bg-primary hover:text-tertiary transition-all duration-200 text-center">
                DEMANDER UN DEVIS EN LIGNE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
