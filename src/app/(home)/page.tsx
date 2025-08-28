import Hero from "./_components/Hero";
import HomeSection1 from "./_components/HomeSection1";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <div className="container mx-auto px-6">
        <HomeSection1 />
      </div>
    </main>
  );
}
