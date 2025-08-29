import Hero from "./_components/Hero";
import HomeSection1 from "./_components/HomeSection1";
import HomeSection2 from "./_components/HomeSection2";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <div className="container mx-auto px-6">
        <HomeSection1 />
      </div>
      <HomeSection2 />
    </main>
  );
}
