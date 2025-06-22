import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import ColorSelector from "../components/ColorSelector";
import ScrollJourney from "../components/ScrollJourney";
import SubscribeForm from "../components/SubscribeForm";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <FeatureSection />
      <ColorSelector />
      <ScrollJourney />
      <SubscribeForm />
      <Footer />
    </main>
  );
}
