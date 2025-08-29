import React from "react";
import { Play } from "lucide-react";
import Image from "next/image";

export default function HomeSection4() {
  return (
    <section>
      <div className="flex flex-col lg:flex-row h-full justify-stretch items-stretch">
        <div className="flex flex-col w-full flex-1 lg:flex-4 order-2 lg:order-1">
          <div className="px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-30 space-y-6 sm:space-y-8 lg:space-y-15 bg-[#2D2D2D] text-white">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <h1 className="text-2xl sm:text-3xl lg:text-[42px] font-bold leading-tight">
                We&apos;ve Been Building For Over 10 Years
              </h1>
              <div className="w-16 sm:w-20 lg:w-25 h-2 lg:h-2.5 bg-[#FFB400]" />
            </div>

            <div className="text-base sm:text-lg text-gray-300 max-w-md">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
                dignissim tristique tellus sed faucibus nullam. Tincidunt mauris
                ut quam sed mauris proin feugiat. Scelerisque lorem posuere
                iaculis nunc amet phasellus.
              </p>
            </div>

            <button className="border-2 lg:border-3 w-fit text-sm justify-center cursor-pointer hover:bg-[#FFB400] hover:text-white transition-all transform duration-200 flex items-center gap-2 lg:gap-4 font-bold px-4 lg:px-5 py-3 border-[#FFB400] text-[#FFB400] mt-6 lg:mt-8">
              <span>ABOUT US</span>
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
            <div className="bg-[#FFB400] flex flex-col items-center justify-center gap-1 sm:gap-2 text-black flex-1 h-full py-4 lg:py-0">
              <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-center px-2">
                Call for a Quote
              </h2>
              <p className="text-sm sm:text-xl lg:text-2xl font-bold">
                (346) 234-6973
              </p>
            </div>
            <div className=" bg-white flex flex-col items-center justify-center gap-1 sm:gap-2 text-black flex-1 h-full py-5 lg:py-0">
              <button className="text-xs sm:text-sm border-2 border-black px-3 sm:px-4 lg:px-6 py-2 lg:py-3 font-bold hover:bg-black hover:text-white transition-all duration-200 text-center">
                ONLINE ESTIMATE FORM
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
