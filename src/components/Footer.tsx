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
    <footer className="relative mt-16 bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-8 py-12">
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
                  className={`p-2 rounded-full border border-gray-200 shadow-sm text-[${color}] ${hover} transition-transform duration-200 hover:scale-110 cursor-pointer`}
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
