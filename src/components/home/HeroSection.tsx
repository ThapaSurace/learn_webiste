import stem from "../../assets/stem-intro-logo.png";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-slate-100/50 pt-36 md:pt-40 pb-28 overflow-hidden">
      {/* Large translucent background blob */}
      <svg
        className="absolute -top-32 -left-32 w-[60rem] h-[60rem] text-primary/10 blur-3xl"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M300,0 C466,0 600,134 600,300 C600,466 466,600 300,600 C134,600 0,466 0,300 C0,134 134,0 300,0 Z"
          fill="currentColor"
        />
      </svg>

      {/* Subtle dotted overlay */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-10"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="dots"
            x="0"
            y="0"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="#94a3b8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      {/* Container */}
      <div className="container relative z-10 flex flex-col md:flex-row md:items-center gap-10">
        {/* LEFT SIDE CONTENT */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          {/* Small badge with icon */}
          <div className="flex items-center gap-2 mb-6">
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6l4 2"
              />
            </svg>
            <span className="text-primary font-medium">
              Live Interactive Classes
            </span>
          </div>

          {/* Logo */}
          <img
            src={stem}
            alt="Logo"
            className="w-28 sm:w-32 bg-slate-800 py-2 px-6 rounded-md shadow-md mb-4"
          />

          {/* Heading */}
          <h1 className="text-center md:text-left text-3xl sm:text-3xl lg:text-5xl font-extrabold leading-tight text-gray-700 tracking-tight font-fredoka">
            Building Tomorrow’s Innovators Today <br />
            <span className="text-primary">Coding | Robotics | AI</span>
          </h1>

          {/* Paragraph */}
          <p className="text-sm sm:text-base lg:text-lg text-center md:text-left text-slate-500 my-6 max-w-lg">
            Young Scientist sets your child up for real-world success with
            engaging online and offline STEM & Coding programs designed by
            experts.
          </p>

          {/* CTA Button */}
          <Button size="lg">Start Learning Today</Button>
        </div>

        {/* RIGHT SIDE (Image Grid) */}
        <div className="flex-1 grid grid-cols-2 gap-6">
          {/* Big Left Block */}
          <div className="bg-pink-300 p-4 rounded-xl shadow row-span-2">
            <img
              src="/images/home/hero/img1.jpg"
              alt="Hero 1"
              className="rounded-lg w-full h-full object-cover"
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
