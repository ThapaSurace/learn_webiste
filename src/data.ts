import littleJuniorsImg from "./assets/images/featured/course-little-coders.jpg";
import codeJuniorsImg from "./assets/images/featured/course-code-juniors.jpg";
import mastersImg from "./assets/images/featured/course-code-masters.jpg";

export const featuredCourses = [
  {
    id: 1,
    title: "Little Coders",
    age: "Age 5-8 Yrs",
    description:
      "Helps kindergarten and primary school children develop their computational thinking through visual-base programming language.",
    img: littleJuniorsImg,
    color: "blue-800",
  },
  {
    id: 2,
    title: "Creative Minds",
    age: "Age 8-12 Yrs",
    description:
      "Encourages creativity and problem-solving skills using art and technology projects for young learners.",
    img: codeJuniorsImg,
    color: "purple-600",
  },
  {
    id: 3,
    title: "Tech Explorers",
    age: "Age 10-14 Yrs",
    description:
      "Introduces children to robotics, coding, and hands-on experiments to explore the world of technology.",
    img: mastersImg,
    color: "green-600",
  },
];
