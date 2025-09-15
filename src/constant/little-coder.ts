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
    image: "img/course-images/course-scratch-jr.png",
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
    image: "img/course-images/course-scratch.png",
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
    image: "img/course-images/course-andrioid-1.png",
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
    image: "img/course-images/course-python-turtle.png",
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
    image: "img/course-images/course-html-css.png",
  },
];
