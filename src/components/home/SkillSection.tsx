const skills = [
  {
    title: "Coding - Graphical & Python",
    img: "/images/home/skills/3.jpg",
  },
  {
    title: "Artificial Intelligence",
    img: "/images/home/skills/6.avif",
  },
  {
    title: "Machine Learning",
    img: "/images/home/skills/8.avif",
  },
  {
    title: "Robotics",
    img: "/images/home/skills/1.jpg",
  },
  {
    title: "AR & VR Tech",
    img: "/images/home/skills/5.jpg",
  },
  {
    title: "Internet of Things (IoT)",
    img: "/images/home/skills/7.avif",
  },
  {
    title: "Biomimetic Robot",
    img: "/images/home/skills/2.jpg",
  },
  {
    title: "Advanced Robotics",
    img: "/images/home/skills/4.jpg",
  },
];

const SkillSection = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-20 ">
      <div className="container text-center">
        {/* Heading */}
        <h2 className="main_heading mb-4">
          Empowering Kids with the <br className="hidden md:block" /> Right Future Skills
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full transition-all duration-500 hover:w-32"></div>
        <p className="max-w-2xl mx-auto text-gray-600 mb-12 mt-6">
          With the hands-on approach to AI, Coding, Robotics, and STEM, we cultivate 
          a generation of innovators by providing the 21st-century skills to unleash 
          the true potential of young minds.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-xl shadow-sm hover:shadow-md transition p-4 cursor-pointer"
            >
              <img
                src={skill.img}
                alt={skill.title}
                className="rounded-lg w-full h-40 object-cover mb-4 object-center"
              />
              <h3 className="font-semibold text-slate-800">
                {skill.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
