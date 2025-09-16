import python_course from "../assets/images/little coders/course-advance-python.png"
import js_course from "../assets/images/little coders/course-javascript.png"
import scratch_course from "../assets/images/little coders/course-scratch-jr.png"
import course_html from "../assets/images/little coders/course-html-css.png"
import course_mysql from "../assets/images/little coders/course-mysql.png"



interface Course {
  level: number;
  title: string;
  classes: string;
  duration: string;
  outcomes: string[];
  image: string;
}

export const courses: Course[] = [
  {
    level: 1,
    title: "Block Programming with Scratch Jr.",
    classes: "1 - 24 Classes",
    duration: "6 Months",
    outcomes: [
      "Perceive the fundamentals of block coding",
      "Understand sequencing and loops",
      "Demonstrate creativity through simple animated stories and games",
    ],
    image: python_course,
  },
  {
    level: 2,
    title: "Scratch Programming",
    classes: "25 - 56 Classes",
    duration: "8 Months",
    outcomes: [
      "Perceive the essentials of block coding",
      "Understand conditional, loops, variables and event handling",
      "Develop interactive games and apps",
    ],
    image: course_html,
  },
  {
    level: 3,
    title: "Mobile App Development with App Inventor",
    classes: "57 - 80 Classes",
    duration: "6 Months",
    outcomes: [
      "Understand the fundamentals of mobile user interface, multimedia, sensors and maps",
      "Practice advance block coding",
      "Develop real-world android mobile apps",
    ],
    image: course_mysql,
  },
  {
    level: 4,
    title: "Turtle Programming with Python",
    classes: "81 - 104 Classes",
    duration: "6 Months",
    outcomes: [
      "Perceive the fundamentals Python and Turtle Graphics",
      "Demonstrate creativity through digital doodles",
      "Develop simple console applications",
    ],
    image: js_course,
  },
  {
    level: 5,
    title: "Web Development with HTML/CSS",
    classes: "105 - 128 Classes",
    duration: "6 Months",
    outcomes: [
      "Understand the fundamentals of HTML tags, elements and attributes",
      "Understand the fundamentals of web styling using CSS",
      "Develop web pages using text formatting, graphics, audio & video",
    ],
    image: scratch_course,
  },
];
