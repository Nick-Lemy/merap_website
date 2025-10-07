import Hero from "./_components/Hero";
import HomeSection1 from "./_components/HomeSection1";
import HomeSection2 from "./_components/HomeSection2";
import HomeSection3 from "./_components/HomeSection3";
import HomeSection4 from "./_components/HomeSection4";
import HomeSection5 from "./_components/HomeSection5";
import HomeSection6 from "./_components/HomeSection6";
import { PartnersSection } from "./about/page";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <HomeSection2 />
        <HomeSection3 />
        <HomeSection4 />
        <HomeSection5 />
        <HomeSection6 />
        <PartnersSection />
        <div className="container mx-auto px-6">
          <HomeSection1 />
        </div>
      </main>
    </>
  );
}
