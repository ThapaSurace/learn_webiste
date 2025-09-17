import HeroSection from "../components/home/HeroSection";
import Feature_Course from "../components/home/Feature_Course";
import LearningMethodologies from "@/components/home/LearningMethodologies";
import EventGrid from "@/components/home/EventGrid";
import Banners from "@/components/home/Banners";
import { InfiniteMovingCardsDemo } from "@/components/home/Testominal";
import OurjourneySection from "@/components/home/OurJourneySection";
import WhyUsSection from "@/components/home/WhyUsSection";


export default function HomePage() {
  return (
    <div className="">
      {/* hero section */}
      <HeroSection />

      {/* banners */}
      <Banners />

      {/* about us */}
      {/* <AboutSection /> */}

      {/* AI info section */}
      <OurjourneySection />

      {/* featured course */}
      <Feature_Course />

      {/* why us */}

      <WhyUsSection />
      
      <LearningMethodologies />

      <InfiniteMovingCardsDemo />

      {/* event grid */}
      <EventGrid />
    </div>
  );
}
