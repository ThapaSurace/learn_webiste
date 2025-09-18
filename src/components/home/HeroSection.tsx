import stem from "../../assets/stem-intro-logo.png";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-slate-100/50 pt-28 md:pt-40 pb-28">
      {/* Container */}
      <div className="container flex flex-col md:flex-row md:items-center gap-10">
        {/* LEFT SIDE CONTENT */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          {/* Logo */}
          <img
            src={stem}
            alt="Logo"
            className="w-20 sm:w-32 bg-slate-800 py-2 px-6 rounded-md shadow-md mb-4"
          />

          {/* Heading */}
          <h1 className="text-center md:text-left text-3xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-gray-700 tracking-tight heading__font">
            KIDS STEM & CODING FOR <br />
            <span className="text-primary">REAL WORLD</span>
          </h1>

          {/* Paragraph */}
          <p className="text-sm sm:text-base lg:text-lg text-center md:text-left text-slate-500 my-6 max-w-lg">
            YoungScientist sets your child up for real-world success with engaging
            online and offline STEM & Coding programs designed by experts.
          </p>

          {/* CTA Button */}
          <Button size="lg">Start Learning Today</Button>

          {/* Stats Section */}
          <div className="flex flex-wrap gap-6 pt-6">
            <div>
              <p className="text-2xl font-bold text-gray-800">9K+</p>
              <p className="text-gray-500 text-sm">Tutors</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">110K+</p>
              <p className="text-gray-500 text-sm">Students</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">210+</p>
              <p className="text-gray-500 text-sm">Subjects</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (Image Grid) */}
        <div className="flex-1 grid grid-cols-2 gap-6">
          {/* Big Left Block */}
          <div className="bg-pink-300 p-4 rounded-xl shadow  row-span-2">
            <img
              src="/images/home/hero/img1.jpg"
              alt="Hero 1"
              className="rounded-lg w-full h-full  object-cover"
            />
          </div>

          {/* Top Right */}
          <div className="bg-blue-300 p-4 rounded-xl shadow flex items-center justify-center">
            <img
              src="/images/home/hero/img3.jpg"
              alt="Hero 2"
              className="rounded-lg w-full h-auto max-h-[170px] object-cover"
            />
          </div>

          {/* Bottom Right */}
          <div className="bg-yellow-300 p-4 rounded-xl shadow flex items-center justify-center">
            <img
              src="/images/home/hero/img2.jpg"
              alt="Hero 3"
              className="rounded-lg w-full h-auto max-h-[170px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
