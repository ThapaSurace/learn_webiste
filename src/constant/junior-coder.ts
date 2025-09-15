interface Course {
  level: number;
  title: string;
  classes: string;
  duration: string;
  outcomes: string[];
  images: {
    desktop: string;
    mobile: string;
  };
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
    images: {
      desktop: "img/LC/level1.png",
      mobile: "img/LC/level1.jpg",
    },
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
    images: {
      desktop: "img/course-images/course-android-2.png",
      mobile: "img/course-images/course-android-2.png",
    },
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
    images: {
      desktop: "img/course-images/course-python-turtle.png",
      mobile: "img/course-images/course-python-turtle.png",
    },
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
    images: {
      desktop: "img/course-images/course-python-gui.png",
      mobile: "img/course-images/course-python-gui.png",
    },
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
    images: {
      desktop: "img/course-images/course-html-css.png",
      mobile: "img/course-images/course-html-css.png",
    },
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
    images: {
      desktop: "img/course-images/course-javascript.png",
      mobile: "img/course-images/course-javascript.png",
    },
  },
];
