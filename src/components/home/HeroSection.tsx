import stem from "../../assets/stem-intro-logo.png";
import { Button } from "../ui/button";
// import hero from "../../assets/images/home/hero-img.png";
// import { motion } from "framer-motion";

import hero1 from "../../assets/images/home/journey_section/image2.jpg"
import hero2 from "../../assets/images/home/journey_section/image4.jpg"
import hero3 from "../../assets/images/home/journey_section/image3.jpg"

// import { Bell, Star } from "lucide-react"

// export default function HeroSection() {
//   return (
//     <section className="relative text-white overflow-visible bg-slate-800 ">
//       {/* Background overlay */}
//       {/* <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/90 to-slate-800/70 pointer-events-none" /> */}
//       <div className="absolute inset-0 bg-[url('https://www.azom.com/image-handler/ts/20211021094608/ri/950/src/images/Article_Images/ImageForArticle_20874_16348239662814012.jpg')] bg-cover bg-center opacity-20 pointer-events-none" />

//       {/* Content */}
//       <div className="container flex flex-col lg:flex-row items-center justify-between relative z-10 pt-32 lg:pt-40 pb-16 gap-8 lg:gap-0">
//         {/* Left: Text */}
//         <div className="w-full lg:w-1/2 flex flex-col items-start text-left space-y-6">
//           <img src={stem} alt="Logo" className="h-14 w-auto mb-4" />

//           <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
//             KIDS STEM & CODING <br />
//             FOR <span className="text-orange-500">REAL WORLD</span>
//           </h1>

//           <p className="text-lg  text-gray-200 max-w-md">
//             LearnWare sets your child up for real-world success with online and offline STEM & Coding programs.
//           </p>

//           <Button size="lg" className="bg-orange-500 hover:bg-orange-600 transition">
//             Start Learning Today
//           </Button>
//         </div>

//         {/* Right: Hero Image */}
//         <motion.div
//           className="lg:w-1/2 hidden lg:flex justify-center"
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <img
//             src={hero}
//             alt="Hero"
//             className="w-full max-w-md object-contain drop-shadow-2xl"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }


const HeroSection = () => {
  return (
    <section className="relative bg-slate-100/50 pt-32 pb-10">
      {/* Container */}
      <div className="container flex flex-col md:flex-row md:items-center justify-between gap-10 md:gap-6">
        
        {/* LEFT SIDE CONTENT */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          {/* Logo */}
          <img 
            src={stem} 
            alt="Logo" 
            className="w-20 sm:w-28 bg-slate-800 py-2 px-6 rounded-md shadow-md mb-4" 
          />

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-gray-700 tracking-tight heading__font">
            KIDS STEM & CODING <br />
            FOR <span className="text-primary">REAL WORLD</span>
          </h1>

          {/* Paragraph */}
          <p className="text-sm sm:text-base lg:text-lg text-center md:text-left text-slate-500 max-w-md my-6">
            LearnWare sets your child up for real-world success with engaging online and offline STEM & Coding programs designed by experts.
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
          <div className="bg-yellow-200 p-6 rounded-xl shadow flex flex-col gap-10 items-center justify-center row-span-2">
            <img
              src={hero1}
              alt="Hero 1"
              className="rounded-lg w-full object-contain"
            />
            <img
              src={hero1}
              alt="Hero 1"
              className="rounded-lg w-full object-contain"
            />
          </div>

          {/* Top Right */}
          <div className="bg-blue-300 p-6 rounded-xl shadow flex items-center justify-center">
            <img
              src={hero2}
              alt="Hero 2"
              className="rounded-lg w-full object-contain"
            />
          </div>

          {/* Bottom Right */}
          <div className="bg-pink-300 p-6 rounded-xl shadow flex items-center justify-center">
            <img
              src={hero3}
              alt="Hero 3"
              className="rounded-lg w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
