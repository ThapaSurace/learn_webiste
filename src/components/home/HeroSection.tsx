import stem from "../../assets/stem-intro-logo.png"
import hero_video from "../../assets/videos/hero.mp4"
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="relative text-white overflow-visible bg-teal-800">
      {/* Content container */}
      <div className="container flex flex-col lg:flex-row items-center justify-between relative pt-40 pb-20 z-10">
        {/* Left side: Text */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left space-y-6">
          {/* Logos */}
          <img
            src={stem}
            alt="Logo"
            className="h-14 w-auto mb-4"
          />


          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            KIDS STEM & CODING <br />
            FOR <span className="text-orange-400">REAL WORLD</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg text-gray-200 max-w-md">
            LearnWare sets your child up for real world success by offering
            online and offline education for STEM / Coding programs.
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
          >
            Start Learning Today
          </Button>
        </div>

        {/* Right side: Image overlapping bottom */}
        <div className="lg:w-1/2 hidden mt-0  lg:flex justify-center">
          <div className="absolute -bottom-10 w-[500px] h-[500px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden border-8 border-white shadow-lg">
             <video
              src={hero_video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Optional background pattern */}
      <div className="absolute inset-0 bg-[url('https://your-pattern.png')] bg-cover bg-center opacity-20 pointer-events-none" />
    </section>
  );
}
