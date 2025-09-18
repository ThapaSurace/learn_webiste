import stemCertificate from "../../assets/images/home/stem-certificate.png";
import { Button } from "../ui/button";

export default function WhyUsSection() {
  return (
    <section className="bg-gray-100 py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={stemCertificate}
              alt="STEM Accredited"
              className="max-w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2">
            <div className="space-y-4 text-center md:text-left">
              {/* Section Header */}
              <div className="flex items-center justify-center md:justify-start gap-2">
                <div className="w-10 h-[1.5px] bg-primary rounded hidden md:block"></div>
                <h5 className="text-slate-600 font-semibold uppercase text-lg">
                  Why Us?
                </h5>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-header">
                Our Recognitions
              </h2>

              <p className="text-sm sm:text-base text-gray-600">
                Young Scientist is proud to say its programs are now accredited by{" "}
                <a href="#" className="text-blue-600 underline">
                  STEM.org
                </a>
                . STEM.org Education Research™ (SER) is the longest continuously
                operating STEM education research and credentialing organization
                in the USA.
              </p>

              <Button size="lg">
                Read More Inside
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
