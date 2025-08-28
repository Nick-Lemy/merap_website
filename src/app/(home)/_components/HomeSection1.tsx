import React from "react";
import { PhoneIcon } from "lucide-react";

export default function HomeSection1() {
  return (
    <section className="py-10">
      <div className="flex items-center justify-evenly gap-50">
        <h1 className="text-4xl font-bold">
          Appellez Nous Pour Plus D&apos;infomation
        </h1>
        <button className="border-3 cursor-pointer hover:bg-[#FFB400] hover:text-white transition-all transform duration-200 flex items-center gap-4 font-bold p-4 border-[#FFB400] text-[#FFB400]">
          <PhoneIcon />
          <span>NOUS JOINDRE</span>
        </button>
      </div>
    </section>
  );
}
