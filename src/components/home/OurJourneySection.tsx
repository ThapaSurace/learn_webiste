const OurJourneySection = () => {
  return (
    <section className="relative min-h-[50vh] py-12 md:py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-14 px-4">
          <p className="text-sm font-semibold uppercase mb-2 text-primary">
            Our Journey
          </p>
          <h2 className="main_heading">
            A Complete Platform for <br className="hidden md:block" /> AI and Robotics Education
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full transition-all duration-500 hover:w-32"></div>
          <p className="mt-6 max-w-3xl mx-auto text-slate-600 leading-relaxed text-base">
            Young Scientist is an innovative tech-education ecosystem highly
            recommended by teachers and embraced by students for classroom
            learning. Designed for kids aged 7-18, our tailored solutions
            provide educators and students with the tools to cultivate coding
            and problem-solving skills, enabling them to engineer their future.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Curriculum */}
          <div className="relative col-span-2 rounded-2xl overflow-hidden h-72 group shadow-lg hover:shadow-xl transition-all duration-500">
            <img
              src="/images/home/journey-section/image4.jpg"
              alt="AI Learning Curriculum"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-6">
              <h3 className="text-white font-semibold text-lg md:text-xl">
                Curriculum
              </h3>
            </div>
          </div>

          {/* AI Tools */}
          <div className="relative rounded-2xl overflow-hidden h-72 group shadow-lg hover:shadow-xl transition-all duration-500">
            <img
              src="/images/home/journey-section/image1.jpg"
              alt="AI Tools and Resources"
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-6">
              <h3 className="text-white font-semibold text-lg md:text-xl">
                AI Tools & Resources
              </h3>
            </div>
          </div>

          {/* Hands-on Projects */}
          <div className="relative rounded-2xl overflow-hidden h-72 group shadow-lg hover:shadow-xl transition-all duration-500">
            <img
              src="/images/home/journey-section/image3.jpg"
              alt="Hands-on AI Projects"
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-6">
              <h3 className="text-white font-semibold text-lg md:text-xl">
                Hands-on Projects
              </h3>
            </div>
          </div>

          {/* Student Development */}
          <div className="relative rounded-2xl overflow-hidden h-72 group shadow-lg hover:shadow-xl transition-all duration-500">
            <img
              src="/images/home/journey-section/image5.jpg"
              alt="Student AI Development Program"
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-6">
              <h3 className="text-white font-semibold text-lg md:text-xl">
                Student Development Program
              </h3>
            </div>
          </div>

          {/* Educational Kits */}
          <div className="relative rounded-2xl overflow-hidden h-72 group shadow-lg hover:shadow-xl transition-all duration-500">
            <img
              src="/images/home/journey-section/image2.jpg"
              alt="AI Educational Kits"
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-6">
              <h3 className="text-white font-semibold text-lg md:text-xl">
                Educational Kits
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourneySection;
