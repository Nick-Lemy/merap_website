import React from "react";
import Section2Img from "@/assets/home-section2.png";
import Image from "next/image";

export default function HomeSection2() {
  return (
    <section>
      <div className="flex flex-col lg:flex-row h-full justify-stretch items-stretch">
        <div className="flex-1 lg:flex-4 order-2 lg:order-1">
          <Image
            src={Section2Img}
            alt="Section 2"
            className="w-full h-auto lg:h-full object-cover"
          />
        </div>
        <div className="flex flex-col w-full flex-1 lg:flex-10 order-1 lg:order-2">
          <div className="px-4 sm:px-6 lg:px-30.5 py-8 sm:py-12 lg:py-28.5 space-y-4 sm:space-y-6 flex-8">
            <h1 className="text-2xl sm:text-3xl lg:text-[42px] font-bold leading-tight">
              Pas de Gros ou Petit Projects
            </h1>

            <div className="w-16 sm:w-20 lg:w-25 h-2 lg:h-2.5 bg-[#FFB400]" />
            <div className="flex flex-col lg:flex-row text-base sm:text-lg gap-6 lg:gap-20 text-[#666666]">
              <div className="flex flex-col gap-4 sm:gap-6 lg:gap-10 flex-1">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sapien, dignissim tristique tellus sed faucibus nullam.
                  Tincidunt mauris ut quam sed mauris proin feugiat. Scelerisque
                  lorem posuere iaculis nunc amet phasellus.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sapien, dignissim tristique tellus sed faucibus nullam.
                </p>
              </div>
              <div className="flex flex-col justify-between gap-4 lg:gap-0 flex-1">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sapien, dignissim tristique tellus sed faucibus nullam.
                  Tincidunt mauris ut quam sed mauris proin feugiat. Scelerisque
                  lorem posuere iaculis nunc amet phasellus.
                </p>
                <button className="border-2 lg:border-3 w-fit justify-center cursor-pointer hover:bg-[#404040] hover:text-white transition-all transform duration-200 flex items-center gap-2 lg:gap-4 font-bold p-3 lg:p-4 border-[#404040] text-[#404040] text-sm lg:text-base">
                  <span>LEARN MORE</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-1 lg:flex-3">
            <div className="bg-[#FFB400] flex flex-col items-center justify-center gap-1 lg:gap-2 text-black flex-1 h-full py-6 lg:py-0">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">12</h1>
              <p className="font-extrabold text-xs sm:text-sm text-center px-2">
                YEARS ESTABLISHED
              </p>
            </div>
            <div className="bg-[#404040] flex flex-col items-center justify-center gap-1 lg:gap-2 text-white flex-1 h-full py-6 lg:py-0">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                250
              </h1>
              <p className="font-extrabold text-xs sm:text-sm text-center px-2">
                COMPLETED PROJECTS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
