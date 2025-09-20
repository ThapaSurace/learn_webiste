import Marquee from "react-fast-marquee";

export default function OurBrandPartners() {
  // Generate image paths dynamically from 1.png to 18.png
  const brandImages = Array.from(
    { length: 18 },
    (_, i) => `/images/brand_partners/${i + 1}.png`
  );

  return (
    <section className="py-10 md:py-16 lg:py-20">
      <div className="">
        {/* Section heading */}
        <div className="mb-10 md:mb-16">
          <h2 className="main_heading text-center">Schools Who Trusts Us! Join Us for an Unparalleled Education Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full transition-all duration-500 hover:w-32"></div>
        </div>

        {/* Marquee */}
        <Marquee
          gradient={false}        // no fade edges
          speed={40}              // scroll speed
          pauseOnHover={true}     // stop on hover
        >
          {brandImages.map((src, index) => (
            <div
              key={index}
              className="mx-6 flex items-center justify-center  cursor-pointer"
            >
              <img
                src={src}
                alt={`Brand ${index + 1}`}
                className="object-contain w-52 sm:w-60 md:w-full"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
