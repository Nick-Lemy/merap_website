import React from "react";
import { PhoneIcon } from "lucide-react";
import Link from "next/link";

export default function HomeSection1() {
  return (
    <section className="py-10">
      <div className="flex flex-col lg:flex-row items-center text-center gap-3 lg:justify-evenly lg:gap-50">
        <h1 className="text-2xl text-primary lg:text-3xl font-bold">
          Appellez Nous Pour Plus D&apos;infomation
        </h1>
        <a
          href={"tel:+237667055365"}
          className="border-3 w-fit text-sm cursor-pointer bg-secondary text-tertiary transition-all transform duration-200 flex items-center gap-2 font-bold px-4 py-3"
        >
          <PhoneIcon className="fill-white w-4 h-4" />
          <span>NOUS JOINDRE</span>
        </a>
      </div>
    </section>
  );
}
