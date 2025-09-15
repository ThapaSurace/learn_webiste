export interface Course {
  level: string;
  title: string;
  classes: string;
  duration: string;
  image: string;
  outcomes: string[];
  reverse?: boolean;
}

export const courses: Course[] = [
  {
    level: "LEVEL 01",
    title: "Python Programming",
    classes: "1 - 24 Classes",
    duration: "6 Months",
    image: "img/course-images/course-pythonl.png",
    outcomes: [
      "Perceive the fundamentals of Python and its core concepts",
      "Ability to use Dictionaries, Functions and Modularization",
      "Understand graphical user interface development",
    ],
  },
  {
    level: "LEVEL 02",
    title: "Advanced Python Programming",
    classes: "25 - 48 Classes",
    duration: "6 Months",
    image: "img/course-images/course-advance-python.png",
    outcomes: [
      "Understand object oriented programming",
      "Ability to use Packaging, JSON and File Handling",
      "Develop real-world desktop / software applications",
    ],
    reverse: true,
  },
  {
    level: "LEVEL 03",
    title: "Web Development with HTML/CSS",
    classes: "49 - 72 Classes",
    duration: "6 Months",
    image: "img/course-images/course-html-css.png",
    outcomes: [
      "Understand the fundamentals of HTML tags, elements and attributes",
      "Understand the fundamentals of web styling using CSS",
      "Develop web pages using text formatting, graphics, audio & video",
    ],
  },
  {
    level: "LEVEL 04",
    title: "JavaScript Programming",
    classes: "73 - 96 Classes",
    duration: "6 Months",
    image: "img/course-images/course-javascript.png",
    outcomes: [
      "Understand fundamentals of JavaScript programming",
      "Ability to use DOMs, Events, Functions and Objects",
      "Develop interactive websites",
    ],
    reverse: true,
  },
  {
    level: "LEVEL 05",
    title: "Database Management with MySQL",
    classes: "97 - 120 Classes",
    duration: "6 Months",
    image: "img/course-images/course-mysql.png",
    outcomes: [
      "Learn databases using Structured Query Language (SQL)",
      "Understand relational databases and normalization",
      "Develop CRUD-based Applications using Python & MySQL",
    ],
  },
  {
    level: "LEVEL 06",
    title: "PHP Programming",
    classes: "121 - 144 Classes",
    duration: "6 Months",
    image: "img/course-images/course-php.png",
    outcomes: [
      "Learn web application setups using Apache Server",
      "Understand fundamentals of PHP & Statement Management",
      "Develop CRUD-based Applications using PHP & MySQL",
    ],
    reverse: true,
  },
];
