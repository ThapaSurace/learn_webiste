import React from "react";
import { Check } from "lucide-react";

interface Course {
  level: number;
  title: string;
  classes: string;
  duration: string;
  outcomes: string[];
  image: string;
}

interface LevelColor {
  bg: string;
  text: string;
}

interface CourseListProps {
  courses: Course[];
  levelColors: LevelColor[];
}

const CourseList: React.FC<CourseListProps> = ({ courses, levelColors }) => {
  return (
    <div className="space-y-12">
      {courses.map((course, index) => {
        const isOdd = index % 2 === 1;
        const levelColor = levelColors[index % levelColors.length];

        return (
          <div
            key={course.level + "-" + index} // in case multiple courses have same level
            className={`w-full ${isOdd ? "bg-gray-50/50" : "bg-white"}`}
          >
            <div
              className={`flex flex-col md:flex-row items-center gap-8 p-6 rounded-2xl container mx-auto ${
                isOdd ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Course Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full object-center object-cover"
                />
              </div>

              {/* Course Content */}
              <div className="w-full md:w-1/2 space-y-4">
                <span
                  className={`${levelColor.bg} text-white px-6 py-4 rounded-xl block mb-3 w-fit text-sm font-semibold`}
                >
                  Level {course.level.toString().padStart(2, "0")}
                </span>
                <h2 className={`text-3xl font-bold ${levelColor.text}`}>
                  {course.title}
                </h2>
                <p className="text-gray-600 text-lg font-medium">{course.classes}</p>
                <div>
                  <h3 className="text-2xl text-gray-800 font-bold mb-3">
                    Learning Outcomes
                  </h3>
                  <ul className="space-y-1">
                    {course.outcomes.map((outcome, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-gray-500"
                      >
                        <Check className={`w-5 h-5 ${levelColor.text}`} />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-slate-500 text-lg font-semibold flex items-center gap-1">
                  Duration: <span>{course.duration}</span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CourseList;
