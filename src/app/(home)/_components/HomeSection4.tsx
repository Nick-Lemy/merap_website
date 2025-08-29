import React from "react";
import { Play } from "lucide-react";

export default function HomeSection4() {
  return (
    <section>
      <div className="flex h-full justify-stretch items-stretch">
        <div className="flex flex-col w-full flex-4">
          <div className="px-10 py-30 space-y-15 bg-[#2D2D2D] text-white">
            <h1 className="text-[42px] font-bold leading-tight">
              We&apos;ve Been
              <br />
              Building For Over
              <br />
              10 Years
            </h1>

            <div className="w-25 h-2.5 bg-[#FFB400]" />

            <div className="text-lg text-gray-300 max-w-md">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
                dignissim tristique tellus sed faucibus nullam. Tincidunt mauris
                ut quam sed mauris proin feugiat. Scelerisque lorem posuere
                iaculis nunc amet phasellus.
              </p>
            </div>

            <button className="border-3 w-fit text-sm justify-center cursor-pointer hover:bg-[#FFB400] hover:text-white transition-all transform duration-200 flex items-center gap-4 font-bold px-5 py-3 border-[#FFB400] text-[#FFB400] mt-8">
              <span>ABOUT US</span>
            </button>
          </div>
        </div>

        <div className="flex-10 flex flex-col relative">
          {/* Background Image with overlay */}
          <div
            className="w-full h-full flex-10 bg-cover bg-center bg-no-repeat relative"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/80"></div>

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-200 group">
                <Play
                  className="w-8 h-8 text-black ml-1 group-hover:scale-110 transition-transform duration-200"
                  fill="currentColor"
                />
              </button>
            </div>

            {/* Dotted line decoration */}
          </div>
          <div className="flex w-full flex-2">
            <div className="bg-[#FFB400] flex flex-col items-center justify-center gap-2 text-black flex-1 h-full">
              <h2 className="text-3xl font-bold">Call for a Quote</h2>
              <p className="text-2xl font-bold">(346) 234-6973</p>
            </div>
            <div className="bg-white flex flex-col items-center justify-center gap-2 text-black flex-1 h-full">
              <button className="text-sm border-2 border-black px-6 py-3 font-bold hover:bg-black hover:text-white transition-all duration-200">
                ONLINE ESTIMATE FORM
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
