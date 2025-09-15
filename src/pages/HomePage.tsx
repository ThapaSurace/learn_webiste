import HeroSection from "../components/home/HeroSection";
import scratch from "../assets/images/banners/scratch.png";
import scratch_jr from "../assets/images/banners/scratch-junior.png";
import android from "../assets/images/banners/android.png";
import html_css from "../assets/images/banners/html-css.png";
import microbit from "../assets/images/banners/microbit.png";
import python from "../assets/images/banners/python.png";
import JavaScript from "../assets/images/banners/JavaScript.png";
import learningImg from "../assets/images/home/learning_img.png";
import stemCertificate from "../assets/images/home/stem-certificate.png";

import Feature_Course from "../components/home/Feature_Course";

import { Button } from "../components/ui/button";
import LearningMethodologies from "@/components/home/LearningMethodologies";
import EventGrid from "@/components/home/EventGrid";

const banners = [
  { src: scratch, alt: "Scratch" },
  { src: scratch_jr, alt: "Scratch Jr" },
  { src: android, alt: "Android" },
  { src: html_css, alt: "HTML & CSS" },
  { src: microbit, alt: "Micro:bit" },
  { src: python, alt: "Python" },
  { src: JavaScript, alt: "JavaScript" },
];

export default function HomePage() {
  return (
    <div className="min-h-[200vh]">
      <HeroSection />

      {/* banners */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 container mt-32">
        {banners.map((banner, index) => (
          <div
            key={index}
            className="rounded-lg p-1 shadow hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img
              src={banner.src}
              alt={banner.alt}
              // className="w-full h-32 object-cover"
            />
          </div>
        ))}
      </div>

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
              />
            </div>

            {/* Right Text */}
            <div className="w-full basis-1/2">
              <div className="space-y-4">
                <h5 className="text-teal-600 font-semibold uppercase">
                  About Us
                </h5>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
                  Learn, Code & Explore
                </h2>
                <p className="text-gray-600">
                  LearnWare is an ed-tech organization that aims to enable
                  children from all backgrounds to learn the Art of Coding. We
                  believe that coding is a fundamental requirement for any kid
                  to explore their future in this rapidly growing technology
                  driven world.
                </p>
                <a
                  href="/our-story"
                  className="inline-block px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition"
                >
                  Read More About Us
                </a>
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
              />
            </div>

            {/* Text */}
            <div className="lg:w-1/2">
              <div className="space-y-4 text-center lg:text-left">
                <h5 className="text-orange-500 font-semibold">Why Us?</h5>
                <h2 className="text-3xl font-bold text-gray-800">
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
