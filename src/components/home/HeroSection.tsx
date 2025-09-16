import stem from "../../assets/stem-intro-logo.png";
import { Button } from "../ui/button";
import hero from "../../assets/images/home/hero-img.png";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative text-white overflow-visible bg-slate-800 ">
      {/* Background overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/90 to-slate-800/70 pointer-events-none" /> */}
      <div className="absolute inset-0 bg-[url('https://www.azom.com/image-handler/ts/20211021094608/ri/950/src/images/Article_Images/ImageForArticle_20874_16348239662814012.jpg')] bg-cover bg-center opacity-20 pointer-events-none" />

      {/* Content */}
      <div className="container flex flex-col lg:flex-row items-center justify-between relative z-10 pt-32 lg:pt-40 pb-16 gap-8 lg:gap-0">
        {/* Left: Text */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left space-y-6">
          <img src={stem} alt="Logo" className="h-14 w-auto mb-4" />

          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            KIDS STEM & CODING <br />
            FOR <span className="text-orange-500">REAL WORLD</span>
          </h1>

          <p className="text-lg  text-gray-200 max-w-md">
            LearnWare sets your child up for real-world success with online and offline STEM & Coding programs.
          </p>

          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 transition">
            Start Learning Today
          </Button>
        </div>

        {/* Right: Hero Image */}
        <motion.div
          className="lg:w-1/2 hidden lg:flex justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={hero}
            alt="Hero"
            className="w-full max-w-md object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
