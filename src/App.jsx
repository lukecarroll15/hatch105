import Nav from "./components/Nav";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhoItsFor from "./components/WhoItsFor";
import SocialProof from "./components/SocialProof";
import Pricing from "./components/Pricing";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-bone text-charcoal">
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <WhoItsFor />
        <SocialProof />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
