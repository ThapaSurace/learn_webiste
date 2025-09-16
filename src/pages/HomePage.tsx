import HeroSection from "../components/home/HeroSection";

import learningImg from "../assets/images/home/learning_img.png";
import stemCertificate from "../assets/images/home/stem-certificate.png";

import Feature_Course from "../components/home/Feature_Course";

import { Button } from "../components/ui/button";
import LearningMethodologies from "@/components/home/LearningMethodologies";
import EventGrid from "@/components/home/EventGrid";
import Banners from "@/components/home/Banners";

export default function HomePage() {
  return (
    <div className="">
      <HeroSection />

      {/* banners */}
      <Banners />

      {/* about us */}
      <section className="py-16 bg-white my-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            {/* Left Image */}
            <div className="w-full basis-1/2 mb-8 lg:mb-0">
              <img
                src={learningImg}
                alt="learning image"
                className="w-full h-auto rounded-lg shadow"
                loading="lazy"
              />
            </div>

            {/* Right Text */}
            <div className="w-full basis-1/2">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-[1.5px] bg-primary rounded"></div>
                  <h5 className="text-slate-600 font-semibold uppercase text-lg">
                  About Us
                </h5>
                </div>
                <h2 className="text-4xl font-extrabold text-header">
                  Learn, Code & Explore
                </h2>
                <p className="text-gray-600">
                  LearnWare is an ed-tech organization that aims to enable
                  children from all backgrounds to learn the Art of Coding. We
                  believe that coding is a fundamental requirement for any kid
                  to explore their future in this rapidly growing technology
                  driven world.
                </p>
                <Button
                size="lg"
                >
                  Read More About Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* featured course */}
      <Feature_Course />

      {/* why us */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Image */}
            <div className="lg:w-1/2 flex justify-center">
              <img
                src={stemCertificate}
                alt="STEM Accredited"
                className="max-w-full h-auto"
                loading="lazy"
              />
            </div>

            {/* Text */}
            <div className="lg:w-1/2">
              <div className="space-y-4 text-center lg:text-left">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-[1.5px] bg-primary rounded"></div>
                  <h5 className="text-slate-600 font-semibold uppercase text-lg">
                  Why Us?
                </h5>
                </div>
                <h2 className="text-4xl font-extrabold text-header">
                  Our Recognitions
                </h2>
                <p className="text-gray-600">
                  LearnWare is proud to say its programs are now accredited by{" "}
                  <a href="#" className="text-blue-600 underline">
                    STEM.org
                  </a>
                  . STEM.org Education Research™ (SER) is the longest
                  continuously operating STEM education research and
                  credentialing organization in the USA.
                </p>
                <p className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                  <span className="font-semibold">Proud Member of</span>
                  {/* <img src={fitisLogo} alt="FITIS Accredited" width={120} />
                <img src={slasscomLogo} alt="SLASSCOM Accredited" width={200} /> */}
                </p>
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 "
                >
                  Read More Inside
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LearningMethodologies />

      <EventGrid />
    </div>
  );
}
