import CTA from "../components/Calltoaction";
import Hero from "../components/Herosection";
import Services from "../components/Services";

const Homepage = () => {
  return (
    <div className="min-h-screen font-sans antialiased">
      <main>
        <Hero />
        <Services />
        <CTA />
      </main>
    </div>
  );
};

export default Homepage;
