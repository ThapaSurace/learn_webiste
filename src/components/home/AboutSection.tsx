import learningImg from "../../assets/images/home/learning_img.png";
import { Button } from "../ui/button";

export default function AboutSection() {
  return (
        <section className="bg-white py-8 md:py-12 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center ga-10 md:gap-20">
            {/* Left Image */}
            <div className="w-full basis-1/2 mb-8 lg:mb-0">
              <img
                src={learningImg}
                alt="learning image"
                className="w-full h-auto rounded-lg shadow"
                loading="lazy"
              />
            </div>

            {/* Right Text */}
            <div className="w-full basis-1/2">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-[1.5px] bg-primary rounded"></div>
                  <h5 className="text-slate-600 font-semibold uppercase text-lg">
                  About Us
                </h5>
                </div>
                <h2 className="text-4xl font-extrabold text-header">
                  Learn, Code & Explore
                </h2>
                <p className="text-gray-600">
                  LearnWare is an ed-tech organization that aims to enable
                  children from all backgrounds to learn the Art of Coding. We
                  believe that coding is a fundamental requirement for any kid
                  to explore their future in this rapidly growing technology
                  driven world.
                </p>
                <Button
                size="lg"
                >
                  Read More About Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}