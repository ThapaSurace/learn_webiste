import Marquee from "react-fast-marquee";

const banners = [
  { src: "/images/home/banners/scratch.png", alt: "Scratch" },
  { src: "/images/home/banners/scratch-junior.png", alt: "Scratch Jr" },
  { src: "/images/home/banners/android.png", alt: "Android" },
  { src: "/images/home/banners/html-css.png", alt: "HTML & CSS" },
  { src: "/images/home/banners/microbit.png", alt: "Micro:bit" },
  { src: "/images/home/banners/python.png", alt: "Python" },
  { src: "/images/home/banners/JavaScript.png", alt: "JavaScript" },
  { src: "/images/home/banners/mit.png", alt: "MIT" },
  { src: "/images/home/banners/thunkable.png", alt: "Thunkable" },
];

export default function Banners() {
  return (
    <div className="w-full mt-16">
      <Marquee
        gradient={true}        // no fade edges
        speed={50}              // scroll speed
        pauseOnHover={true}     // stop when hovered
      >
        {banners.map((banner, index) => (
          <div
            key={index}
            className="mx-6 flex justify-center items-center"
          >
            <div className="rounded-lg py-3 px-6  bg-white hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img
                src={banner.src}
                alt={banner.alt}
                className="h-10 w-auto object-contain"
              />
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
