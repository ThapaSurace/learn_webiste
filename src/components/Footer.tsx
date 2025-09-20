import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0A1E3F] text-gray-300 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Programs */}
        <div>
          <h4 className="text-white font-semibold mb-4">Programs</h4>
          <ul className="space-y-2">
            <li>Elementary School Classes</li>
            <li>Middle School Classes</li>
            <li>High School Classes</li>
            <li>Python Language Track</li>
            <li>AP CS Prep Program</li>
            <li>Summer Camps</li>
            <li>Pricing</li>
          </ul>
        </div>

        {/* Community Engagement */}
        <div>
          <h4 className="text-white font-semibold mb-4">Community Engagement</h4>
          <ul className="space-y-2">
            <li>Homeschool Families</li>
            <li>Military Families</li>
            <li>Scholarships</li>
            <li>Online Charter Schools</li>
            <li>PTA Partnerships</li>
            <li>Affiliate Program</li>
            <li>Community Education</li>
          </ul>
        </div>

        {/* Why CodeWizardsHQ */}
        <div>
          <h4 className="text-white font-semibold mb-4">Why CodeWizardsHQ</h4>
          <ul className="space-y-2">
            <li>Our Instructors</li>
            <li>Our Curriculum</li>
            <li>Our Platform</li>
            <li>Our Support</li>
            <li>Our Internship Program</li>
            <li>Parent Reviews</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* About CodeWizardsHQ */}
        <div>
          <h4 className="text-white font-semibold mb-4">About CodeWizardsHQ</h4>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Our Story</li>
            <li>Blog</li>
            <li>Newsletter Subscribe</li>
            <li>Referral Program</li>
            <li>Jobs</li>
            <li>Calendar</li>
            <li>Enroll</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Logo & Contact */}
        <div className="flex flex-col items-start">
          <div className="mb-4">
            <img src="/logo.png" alt="CodeWizardsHQ" className="h-12 w-auto mb-2" />
            <p className="text-white font-semibold">CodeWizardsHQ</p>
          </div>
          <div className="space-y-1 text-sm">
            <p><span className="font-semibold text-white">Mailing Address:</span></p>
            <p>11900 Jollyville Rd, #203278</p>
            <p>Austin, Texas, 78720</p>
            <p>1-800-213-2417</p>
            <p>Monday - Friday</p>
            <p>9:00am - 5:00pm CT</p>
          </div>
          <div className="flex gap-3 mt-4 text-gray-400">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaPinterestP className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        <span>Privacy Policy</span> | <span>Billing Policy</span> | <span>Terms of Service</span> | © Copyright 2024 CodeWizardsHQ
      </div>
    </footer>
  );
}
