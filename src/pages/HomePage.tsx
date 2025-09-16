import HeroSection from "../components/home/HeroSection";
import Feature_Course from "../components/home/Feature_Course";
import LearningMethodologies from "@/components/home/LearningMethodologies";
import EventGrid from "@/components/home/EventGrid";
import Banners from "@/components/home/Banners";
import AboutSection from "@/components/home/AboutSection";
import { InfiniteMovingCardsDemo } from "@/components/home/Testominal";


export default function HomePage() {
  return (
    <div className="">
      {/* hero section */}
      <HeroSection />

      {/* banners */}
      <Banners />

      {/* about us */}
      <AboutSection />

      {/* featured course */}
      <Feature_Course />

      {/* why us */}
      <LearningMethodologies />

      <InfiniteMovingCardsDemo />

      {/* event grid */}
      <EventGrid />
    </div>
  );
}
