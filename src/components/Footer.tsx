import logo from "../assets/logo.png";
import { LocateFixed } from "lucide-react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialIcons = [
    { Icon: IconBrandFacebook, color: "#1877F2", hover: "hover:bg-blue-100" },
    { Icon: IconBrandInstagram, color: "#E4405F", hover: "hover:bg-pink-100" },
    { Icon: IconBrandTwitter, color: "#1DA1F2", hover: "hover:bg-sky-100" },
    { Icon: IconBrandLinkedin, color: "#0A66C2", hover: "hover:bg-blue-100" },
    { Icon: IconBrandYoutube, color: "#FF0000", hover: "hover:bg-red-100" },
  ];

  return (
    <footer className="relative mt-16 bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-100 overflow-hidden">
      {/* Decorative top wave */}
      <svg
        className="absolute -top-10 left-0 w-full h-20 text-primary/10"
        viewBox="0 0 1440 320"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,192L48,170.7C96,149,192,107,288,85.3C384,64,480,64,576,96C672,128,768,192,864,186.7C960,181,1056,107,1152,74.7C1248,43,1344,53,1392,58.7L1440,64V0H0Z"
        />
      </svg>

      {/* Subtle dotted background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-10"
        aria-hidden="true"
      >
        <defs>
          <pattern id="footerDots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#94a3b8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#footerDots)" />
      </svg>

      <div className="container relative z-10 mx-auto px-6 lg:px-8 py-12">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          {/* Logo + Intro */}
          <div>
            <img src={logo} alt="logo" className="w-44 mx-auto md:mx-0 mb-5" />
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Dursikshya is the leading training institute for students.
              Training for IT skills is an ongoing process as technology
              advances and improvements continue.
            </p>
          </div>

          {/* Address */}
          <div>
            <h2 className="font-heading text-lg font-semibold text-gray-900 tracking-wide uppercase">
              Address
            </h2>
            <p className="mt-3 flex items-center justify-center md:justify-start gap-2 text-gray-700">
              <LocateFixed size={18} />
              Kantipath, Jamal, Kathmandu
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-heading text-lg font-semibold text-gray-900 tracking-wide uppercase">
              Get in Touch
            </h2>
            <p className="mt-3 text-gray-700">+977-01-5358003</p>
            <p className="text-gray-700">info@dursikshya.edu.np</p>
          </div>

          {/* Social */}
          <div>
            <h2 className="font-heading text-lg font-semibold text-gray-900 tracking-wide uppercase">
              Connect With Us
            </h2>
            <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-3">
              {socialIcons.map(({ Icon, color, hover }, idx) => (
                <Icon
                  key={idx}
                  size={40}
                  stroke={1.5}
                  className={`p-2 rounded-full border border-gray-200 shadow-sm ${hover} transition-transform duration-200 hover:scale-110 cursor-pointer`}
                  style={{ color }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-gray-200" />

        {/* Bottom note */}
        <div className="pt-6 text-center text-sm text-gray-500">
          &copy; {year} <span className="font-medium text-gray-700">Young Scientist</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
