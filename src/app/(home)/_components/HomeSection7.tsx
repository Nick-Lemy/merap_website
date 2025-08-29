import Image from "next/image";
import React from "react";
import Partenairs from "@/assets/partenairs.png";

export default function HomeSection7() {
  return (
    <section className="bg-gray-50 flex justify-center items-center lg:px-20 py-12 lg:py-24">
      <Image
        className="max-w-full h-auto"
        src={Partenairs}
        alt="Project Image"
      />
    </section>
  );
}
