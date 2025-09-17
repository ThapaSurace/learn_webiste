const banners = [
  { src: "/images/home/banners/scratch.png", alt: "Scratch" },
  { src: "/images/home/banners/scratch-junior.png", alt: "Scratch Jr" },
  { src: "/images/home/banners/android.png", alt: "Android" },
  { src: "/images/home/banners/html-css.png", alt: "HTML & CSS" },
  { src: "/images/home/banners/microbit.png", alt: "Micro:bit" },
  { src: "/images/home/banners/python.png", alt: "Python" },
  { src: "/images/home/banners/JavaScript.png", alt: "JavaScript" },
];

export default function Banners() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6 container mt-10 mb-16">
      {banners.map((banner, index) => (
        <div
          key={index}
          className="rounded-lg p-1 shadow hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          <img
            src={banner.src}
            alt={banner.alt}
            loading="lazy"
            className="w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
