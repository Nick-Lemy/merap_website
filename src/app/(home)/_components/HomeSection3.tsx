import Image from "next/image";
import React from "react";
import ProjectImage from "@/assets/project-card.png";

export default function HomeSection3() {
  return (
    <section className="lg:px-20">
      <div className="px-30.5 py-28.5 gap-6 flex-8 flex flex-col items-center justify-center">
        <div className="flex items-center flex-col justify-center">
          <h1 className="text-[42px] font-bold">Projects Recents</h1>
          <div className="w-25 h-2.5 bg-[#FFB400] " />
        </div>
        <div className="flex text-lg gap-10 text-[#666666] *:flex-1">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <button className="w-fit mt-10 justify-center text-sm border-3 cursor-pointer  transition-all transform duration-200 flex items-center gap-4 font-bold px-14 py-3 border-black text-black ">
          VIEW ALL
        </button>
      </div>
    </section>
  );
}

function ProjectCard() {
  return (
    <div className="flex flex-col gap-4">
      <Image
        src={ProjectImage}
        className="aspect-2/1 object-cover"
        alt="Project Image"
        width={500}
        height={500}
      />
      <div className="border-3 flex gap-10 flex-col py-10 px-7 border-[#666666]">
        <div className="space-y-5">
          <h3 className="text-black text-xl font-[520]">Project Title</h3>

          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et
            euismod bibendum adipiscing et orci, fermentum. Cras tristique
            viverra gravida et sit egestas.
          </p>
        </div>
        <button className="w-fit justify-center text-xs border-3 cursor-pointer  transition-all transform duration-200 flex items-center gap-4 font-bold px-4 py-2 border-[#666666] text-[#666666]">
          VIEW PROJECT
        </button>
      </div>
    </div>
  );
}
