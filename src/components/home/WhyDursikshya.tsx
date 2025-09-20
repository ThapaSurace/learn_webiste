import { useState } from "react";
import { GraduationCap, Video, UserCheck, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const options = [
  { id: 1, title: "STEM & AI Accredited Curriculum", desc: "Students learn coding using the same platforms as professionals", icon: GraduationCap, img: "/images/home/why_dursikshya/1.webp" },
  { id: 0, title: "Live online", desc: "1:1 classes with personalized instructors", icon: Video, img: "/images/home/why_dursikshya/2.webp" },
  { id: 2, title: "Top CS teachers", desc: "From across the globe trained by our Expert team to teach coding in English & Nepali", icon: UserCheck, img: "/images/home/why_dursikshya/3.webp" },
  { id: 3, title: "Long-term tech career plan", desc: "With visibility into your child’s growth", icon: Briefcase, img: "/images/home/why_dursikshya/4.webp" },
];

export default function WhyDursikshya() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex justify-center mb-20">
          <div className="w-full xl:w-5/12 text-center">
            <h2 className="main_heading">Why Dursikshya?</h2>
            <div className="w-28 h-1 bg-gradient-to-r from-primary to-orange-400 mx-auto mt-4 rounded-full"></div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* LEFT SIDE: Options */}
          <div className="flex-1 flex flex-col gap-5">
            {options.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelected(item)}
                  className={`
                    w-full text-left p-5 rounded-2xl border transition-all duration-300
                    flex items-center gap-4 cursor-pointer
                    ${selected.id === item.id
                      ? "border-slate-400 bg-gray-700 shadow-md scale-105"
                      : "border-gray-200 hover:border-slate-400 hover:bg-slate-100 bg-white"
                    }
                  `}
                >
                  <div className={`text-3xl rounded-full p-4 ${selected.id === item.id ? "bg-slate-200" : "bg-orange-300 text-white"}`}>
                    <Icon />
                  </div>
                  <div>
                    <h3 className={`font-semibold text-xl ${selected.id === item.id ? "text-white" : "text-gray-800"}`}>
                      {item.title}
                    </h3>
                    <p className={`${selected.id === item.id ? "text-gray-200" : "text-gray-600"} text-sm`}>{item.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT SIDE: Animated Image */}
          <div className="flex-1 flex justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={selected.id}
                src={selected.img}
                alt={selected.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className=" w-full object-cover object-center"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
