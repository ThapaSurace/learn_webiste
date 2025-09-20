import HeroSection from "../components/home/HeroSection";
import Feature_Course from "../components/home/Feature_Course";
import LearningMethodologies from "@/components/home/LearningMethodologies";
import EventGrid from "@/components/home/EventGrid";
import Banners from "@/components/home/Banners";
import { InfiniteMovingCardsDemo } from "@/components/home/Testominal";
import OurjourneySection from "@/components/home/OurJourneySection";
import WhyUsSection from "@/components/home/WhyUsSection";
import StatsSection from "@/components/home/StatSection";
import WhyDursikshya from "@/components/home/WhyDursikshya";
// import StatSection from "@/components/home/StatSection";

export default function HomePage() {
  return (
    <div className="">
      {/* hero section */}
      <HeroSection />

      {/* banners */}
      <Banners />

      {/* <StatSection /> */}
      <StatsSection />

      {/* about us */}
      {/* <AboutSection /> */}

      {/* AI info section */}
      <OurjourneySection />

      {/* featured course */}
      <Feature_Course />

      {/* why us */}

      <WhyUsSection />

      <WhyDursikshya />


      <InfiniteMovingCardsDemo />

      {/* event grid */}
      <EventGrid />
    </div>
  );
}
