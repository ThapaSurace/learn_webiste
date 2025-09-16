import python_course from "../assets/images/little coders/course-advance-python.png"
import adv_python_course from "../assets/images/little coders/course-advance-python.png"
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
  image: string
}

export const courses: Course[] = [
  {
    level: 1,
    title: "Scratch Programming",
    classes: "1 - 24 Classes",
    duration: "6 Months",
    outcomes: [
      "Perceive the fundamentals of block coding",
      "Understand sequencing and loops",
      "Demonstrate creativity through simple animated stories and games",
    ],
    image: python_course
  },
  {
    level: 2,
    title: "Mobile App Development with App Inventor",
    classes: "25 - 48 Classes",
    duration: "6 Months",
    outcomes: [
      "Understand the fundamentals of mobile user interface, multimedia, sensors and maps",
      "Practice advance block coding",
      "Develop real-world android mobile apps",
    ],
    image: js_course
  },
  {
    level: 3,
    title: "Turtle Programming with Python",
    classes: "49 - 72 Classes",
    duration: "6 Months",
    outcomes: [
      "Demonstrate creativity through digital doodles",
      "Perceive the fundamentals Python and its core concepts",
      "Understand graphical user interface development",
    ],
    image: scratch_course
  },
  {
    level: 4,
    title: "GUI Programming with Python",
    classes: "73 - 96 Classes",
    duration: "6 Months",
    outcomes: [
      "Understand object oriented programming",
      "Ability to use Packaging, JSON and File Handling",
      "Develop real-world desktop / software applications",
    ],
    image: course_html,
  },
  {
    level: 5,
    title: "Web Development with HTML/CSS",
    classes: "97 - 120 Classes",
    duration: "6 Months",
    outcomes: [
      "Understand the fundamentals of HTML tags, elements and attributes",
      "Understand the fundamentals of web styling using CSS",
      "Develop web pages using text formatting, graphics, audio & video",
    ],
    image: course_mysql,
  },
  {
    level: 6,
    title: "JavaScript Programming",
    classes: "121 - 144 Classes",
    duration: "6 Months",
    outcomes: [
      "Understand fundamentals of JavaScript programming",
      "Ability to use DOMs, Events, Functions and Objects",
      "Develop interactive websites",
    ],
    image: adv_python_course,
  },
];
