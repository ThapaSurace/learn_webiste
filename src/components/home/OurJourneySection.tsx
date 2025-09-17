const OurjourneySection = () => {
  return (
    <div className=" min-h-[50vh] py-8 md:py-12 lg:py-16">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 px-4 md:px-0">
          <p className="text-sm sm:text-base font-semibold uppercase mb-2 text-slate-600 tracking-widest">
            Our Journey
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-header">
            A Complete Platform for <br /> AI and Robotics Education
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full transition-all duration-500 hover:w-32"></div>
          <p className="mt-6 max-w-4xl mx-auto text-slate-700 leading-7 text-sm">
            STEMpedia is an innovative tech-education ecosystem highly
            recommended by teachers and embraced by students for classroom
            learning. Designed for kids aged 7-18, our tailored solutions
            provide educators and students with the tools to cultivate coding
            and problem-solving skills, enabling them to engineer their future.
          </p>
        </div>

        {/* Bento grid */}
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Curriculum */}
            <div className="relative col-span-2 rounded-2xl overflow-hidden h-64 group cursor-pointer">
              <img
                src="/images/home/journey-section/image4.jpg"
                alt="AI Learning Curriculum"
                className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 flex items-end p-4">
                <h3 className="text-white font-bold">Curriculum</h3>
              </div>
            </div>

            {/* AI Tools */}
            <div className="relative rounded-2xl overflow-hidden h-64 group cursor-pointer">
              <img
                src="/images/home/journey-section/image1.jpg"
                alt="AI Tools and Resources"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 flex items-end p-4">
                <h3 className="text-white font-bold">AI Tools & Resources</h3>
              </div>
            </div>

            {/* Hands-on Projects */}
            <div className="relative rounded-2xl overflow-hidden h-64 group cursor-pointer">
              <img
                src="/images/home/journey-section/image3.jpg"
                alt="Hands-on AI Projects"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 flex items-end p-4">
                <h3 className="text-white font-bold">Hands-on Projects</h3>
              </div>
            </div>

            {/* Student Development */}
            <div className="relative rounded-2xl overflow-hidden h-64 group cursor-pointer">
              <img
                src="/images/home/journey-section/image5.jpg"
                alt="Student AI Development Program"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 flex items-end p-4">
                <h3 className="text-white font-bold">
                  Student Development Program
                </h3>
              </div>
            </div>

            {/* Educational Kits */}
            <div className="relative rounded-2xl overflow-hidden h-64 group cursor-pointer">
              <img
                src="/images/home/journey-section/image2.jpg"
                alt="AI Educational Kits"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 flex items-end p-4">
                <h3 className="text-white font-bold">Educational Kits</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurjourneySection;
