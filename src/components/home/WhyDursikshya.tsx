import { useState } from "react";
import { GraduationCap, Video, UserCheck, Briefcase } from "lucide-react";

const options = [
  {
    id: 1,
    title: "STEM & AI Accredited Curriculum",
    desc: "Students learn coding using the same platforms as professionals",
    icon: GraduationCap,
    img: "/images/live-online.jpg",
  },
  {
    id: 0,
    title: "Live online",
    desc: "1:1 classes with personalized instructors",
    icon: Video,
    img: "/images/live-online.jpg",
  },
  {
    id: 2,
    title: "Top CS teachers",
    desc: "From across the globe trained by our Expert team to teach coding in English & Nepali",
    icon: UserCheck,
    img: "/images/top-teachers.jpg",
  },
  {
    id: 3,
    title: "Long-term tech career plan",
    desc: "With visibility into your child’s growth",
    icon: Briefcase,
    img: "/images/career-plan.jpg",
  },
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

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* LEFT SIDE: Options */}
          <div className="flex-1 flex flex-col gap-5">
            {options.map((item) => {
              const Icon = item.icon; // get the Lucide icon component
              return (
                <button
                  key={item.id}
                  onClick={() => setSelected(item)}
                  className={`
                    w-full text-left p-5 rounded-2xl border transition-all duration-300
                    flex items-center gap-4 cursor-pointer
                    ${
                      selected.id === item.id
                        ? "border-slate-400 bg-gray-700 shadow-md scale-105"
                        : "border-gray-200 hover:border-slate-400 hover:bg-orange-50 bg-white"
                    }
                  `}
                >
                  <div className={`text-3xl rounded-full p-4 ${selected.id === item.id ? " bg-slate-200" : "bg-orange-300 text-white"}`}>
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

          {/* RIGHT SIDE: Image */}
          <div className="flex-1 flex justify-center">
            <img
              key={selected.id}
              src={selected.img}
              alt={selected.title}
              className="max-w-md w-full rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
