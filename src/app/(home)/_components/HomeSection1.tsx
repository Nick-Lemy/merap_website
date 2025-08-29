import React from "react";
import { PhoneIcon } from "lucide-react";

export default function HomeSection1() {
  return (
    <section className="py-10">
      <div className="flex flex-col lg:flex-row items-center text-center gap-3 lg:justify-evenly lg:gap-50">
        <h1 className="text-2xl lg:text-3xl font-bold">
          Appellez Nous Pour Plus D&apos;infomation
        </h1>
        <button className="border-3 w-fit  text-sm cursor-pointer hover:bg-[#FFB400] hover:text-white transition-all transform duration-200 flex items-center gap-2 font-bold px-4 py-2 border-[#FFB400] text-[#FFB400]">
          <PhoneIcon className="w-5 h-5" />
          <span>NOUS JOINDRE</span>
        </button>
      </div>
    </section>
  );
}
