import React from "react";
import Section2Img from "@/assets/home-section2.png";
import Image from "next/image";

export default function HomeSection2() {
  return (
    <section>
      <div className="flex h-full justify-stretch items-stretch">
        <div className="flex-4">
          <Image src={Section2Img} alt="Section 2" className="w-full h-auto" />
        </div>
        <div className="flex flex-col w-full flex-10">
          <div className="px-30.5 py-28.5 space-y-6 flex-8">
            <h1 className="text-[42px] font-bold">
              Pas de Gros ou Petit Projects
            </h1>

            <div className="w-25 h-2.5 bg-[#FFB400] " />
            <div className="flex text-lg gap-20 text-[#666666] *:flex-1">
              <div className="flex flex-col gap-10">
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
              <div className="flex flex-col justify-between">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sapien, dignissim tristique tellus sed faucibus nullam.
                  Tincidunt mauris ut quam sed mauris proin feugiat. Scelerisque
                  lorem posuere iaculis nunc amet phasellus.
                </p>
                <button className="border-3 w-fit justify-center cursor-pointer hover:bg-[#404040] hover:text-white transition-all transform duration-200 flex items-center gap-4 font-bold p-4 border-[#404040] text-[#404040]">
                  <span>LEARN MORE</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-3">
            <div className="bg-[#FFB400] flex flex-col items-center justify-center gap-2 text-black flex-1 h-full">
              <h1 className="text-5xl font-bold">12</h1>
              <p className="font-extrabold text-sm">YEARS ESTABLISHED</p>
            </div>
            <div className="bg-[#404040] flex flex-col items-center justify-center gap-2 text-white flex-1 h-full">
              <h1 className="text-5xl font-bold">250</h1>
              <p className="font-extrabold text-sm">COMPLETED PROJECTS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
