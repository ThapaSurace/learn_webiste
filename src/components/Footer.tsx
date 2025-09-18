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
  return (
    <footer className="mt-10 border-t border-slate-300 pt-8 md:pt-20 pb-8 bg-gray-50/40">
      <div className="container mx-auto px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Logo & Slogan */}
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="logo" className="w-60 mb-4" />
            <p className="text-sm text-gray-600 text-center w-full  md:max-w-[290px] md:text-justify">
              Dursikshya is the leading training institute for students.
              Training for IT skills can be an ongoing process, as technological
              advancements continue and improvements are made..
            </p>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="font-bold uppercase">Address</h2>
            <p className="mt-2 flex items-center gap-1 justify-center md:justify-start">
              <LocateFixed size={15} />
              Kantipath, Jamal, Kathmandu
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="font-bold uppercase">Get in Touch</h2>
            <p className="mt-2">+977-015358003</p>
            <p>info@dursikshya.edu.np</p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="font-bold uppercase">Connect With Us</h2>
            <div className="mt-3 flex flex-wrap gap-2 justify-center md:justify-start">
              <IconBrandFacebook
                size={40}
                stroke={1.5}
                className="p-2 rounded-md shadow text-[#1877F2] hover:bg-blue-50 transition cursor-pointer"
              />
              <IconBrandInstagram
                size={40}
                stroke={1.5}
                className="p-2 rounded-md shadow text-[#E4405F] hover:bg-pink-50 transition cursor-pointer"
              />
              <IconBrandTwitter
                size={40}
                stroke={1.5}
                className="p-2 rounded-md shadow text-[#1DA1F2] hover:bg-sky-50 transition cursor-pointer"
              />
              <IconBrandLinkedin
                size={40}
                stroke={1.5}
                className="p-2 rounded-md shadow text-[#0A66C2] hover:bg-blue-50 transition cursor-pointer"
              />
              <IconBrandYoutube
                size={40}
                stroke={1.5}
                className="p-2 rounded-md shadow text-[#FF0000] hover:bg-red-50 transition cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Young Scientist. All rights reserved
          |{" "}
          <a href="#" className="underline">
            Legal Information
          </a>{" "}
        </div>
      </div>
    </footer>
  );
}
