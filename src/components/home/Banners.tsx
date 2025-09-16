import scratch from "../../assets/images/banners/scratch.png";
import scratch_jr from "../../assets/images/banners/scratch-junior.png";
import android from "../../assets/images/banners/android.png";
import html_css from "../../assets/images/banners/html-css.png";
import microbit from "../../assets/images/banners/microbit.png";
import python from "../../assets/images/banners/python.png";
import JavaScript from "../../assets/images/banners/JavaScript.png";

const banners = [
  { src: scratch, alt: "Scratch" },
  { src: scratch_jr, alt: "Scratch Jr" },
  { src: android, alt: "Android" },
  { src: html_css, alt: "HTML & CSS" },
  { src: microbit, alt: "Micro:bit" },
  { src: python, alt: "Python" },
  { src: JavaScript, alt: "JavaScript" },
];

export default function Banners() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6 container mt-10">
      {banners.map((banner, index) => (
        <div
          key={index}
          className="rounded-lg p-1 shadow hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          <img
            src={banner.src}
            alt={banner.alt}
            loading="lazy"
            // className="w-full h-32 object-cover"
          />
        </div>
      ))}
    </div>
  );
}
