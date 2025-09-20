const programs = [
  {
    title: "ELEMENTARY SCHOOL",
    age: "Ages 8 – 10",
    img: "/images/home/courses/1.png",
  },
  {
    title: "MIDDLE SCHOOL",
    age: "Ages 11 – 13",
    img: "/images/home/courses/2.png",
  },
  {
    title: "HIGH SCHOOL",
    age: "Ages 14 – 18",
    img: "/images/home/courses/3.png",
  },
];

export default function CodingPrograms() {
  return (
    <section className="bg-gray-50 my-10 md:py-16 lg:my-20">
      <div className="container text-center">
        {/* Heading */}
        <h2 className="main_heading">
          Our Instructor-Led Online Coding Classes
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full transition-all duration-500 hover:w-32"></div> 
        <p className="text-gray-700 mt-6">
          Structured coding curriculum for ages 8–18
        </p>

        {/* Cards */}
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {programs.map((program, index) => (
            <div
              key={index}
              className="relative bg-white rounded-md shadow transition pb-10"
            >
              <img
                src={program.img}
                alt={program.title}
                className="w-full object-cover object-center rounded-t-md"
              />
              <div className="px-6 py-4">
                <h3 className="text-xl md:text-2xl font-extrabold text-slate-700">
                  {program.title} <br />
                 <span> Program</span>
                </h3>
              </div>

              {/* Age Badge at bottom center */}
              <span className="text-sm absolute -bottom-4 left-1/2 -translate-x-1/2 inline-block px-5 py-1.5 font-medium bg-slate-700 text-white rounded-full shadow">
                {program.age}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
