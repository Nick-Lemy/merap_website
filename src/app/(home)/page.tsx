import Hero from "./_components/Hero";
import HomeSection1 from "./_components/HomeSection1";
import HomeSection2 from "./_components/HomeSection2";
import HomeSection3 from "./_components/HomeSection3";
import HomeSection4 from "./_components/HomeSection4";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <div className="container mx-auto px-6">
        <HomeSection1 />
      </div>
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
    </main>
  );
}
