import FaqAccordion from "@/components/FaqAccordion";
import { littleCoderFaqs } from "@/constant/faq";
import { courses } from "@/constant/junior-coder";
import CourseList from "@/CourseList";

const levelColors = [
  { bg: "bg-pink-300", text: "text-pink-600" },
  { bg: "bg-sky-300", text: "text-sky-600" },
  { bg: "bg-teal-300", text: "text-teal-500" },
  { bg: "bg-yellow-300", text: "text-yellow-500" },
  { bg: "bg-purple-400", text: "text-purple-600" },
];

export default function CodeJunior() {
  return (
    <div>
      <section className="min-h-screen bg-lime-300"></section>

      <CourseList courses={courses} levelColors={levelColors} />

      {/* faq */}
      <div className="container mt-20 mb-28">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-blue-950">
            Frequently Asked <br /> Questions
          </h2>
          <div className="w-20 h-[1.5px] bg-orange-500 mx-auto mt-4 rounded"></div>
        </div>
        <FaqAccordion items={littleCoderFaqs} />
      </div>
    </div>
  );
}
