
export default function OurBrandPartners() {
  // Generate image paths dynamically from 1.png to 18.png
  const brandImages = Array.from(
    { length: 18 },
    (_, i) => `/images/brand_partners/${i + 1}.png`
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="mb-10">
          <h2 className="main_heading text-center">Our Brand Partners</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full transition-all duration-500 hover:w-32"></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {brandImages.map((src, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <img
                src={src}
                alt={`Brand ${index + 1}`}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
