const StatsSection = () => {
  const stats = [
    { label: "Founded", value: "2014" },
    { label: "Learners Transformed & Certified", value: "10000+" },
    { label: "Career-Focused Learning with Global Certifications", value: "100%" },
    { label: "Driving Innovation in Education & Workforce Training", value: "5+ years" },
  ];

  return (
    <section className="relative container mt-20 overflow-hidden">
      {/* Background gradient blob */}
      <svg
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl h-[30rem] text-sky-100 blur-3xl"
        viewBox="0 0 600 600"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M300,0 C466,0 600,134 600,300 C600,466 466,600 300,600 C134,600 0,466 0,300 C0,134 134,0 300,0 Z"
        />
      </svg>

      {/* Decorative dotted overlay */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-10"
        aria-hidden="true"
      >
        <defs>
          <pattern id="statsDots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#94a3b8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#statsDots)" />
      </svg>

      {/* Header + Paragraph */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <h2 className="main_heading">
          Our Journey at a Glance
        </h2>
               <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full transition-all duration-500 hover:w-32"></div>
        <p className="mt-4 text-slate-700 text-base md:text-lg leading-relaxed">
          From humble beginnings to a thriving learning community, our growth
          reflects a commitment to empowering students and professionals across
          the globe with cutting-edge education and career-focused training.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 py-14">
        {stats.map((item, idx) => (
          <div
            key={item.label}
            className="flex flex-col items-center text-center p-6 rounded-2xl shadow-md
                       bg-gradient-to-b from-white via-slate-50 to-slate-100
                       transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Icon-like colorful circle */}
            <div
              className={`mb-4 w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg
                ${[
                  "bg-gradient-to-br from-orange-400 to-pink-500",
                  "bg-gradient-to-br from-sky-400 to-indigo-500",
                  "bg-gradient-to-br from-emerald-400 to-teal-500",
                  "bg-gradient-to-br from-rose-400 to-fuchsia-500",
                ][idx % 4]}`}
            >
              {idx + 1}
            </div>

            <p className="text-sm font-semibold text-slate-700 max-w-[10rem] tracking-wide">
              {item.label}
            </p>

            <p className="text-4xl font-extrabold bg-gradient-to-r from-sky-600 to-blue-800 bg-clip-text text-transparent mt-2">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
