import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logo from "../assets/logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

// -----------------
// Helper Components
// -----------------
const NavLinks: React.FC = () => (
  <ul className="flex flex-col gap-4 text-lg">
    <li>
      <Link to="/" className="hover:text-orange-500">Home</Link>
    </li>
    <li>
      <Link to="/about" className="hover:text-orange-500">About</Link>
    </li>
    <li>
      <Link to="/services" className="hover:text-orange-500">Services</Link>
    </li>
    <li>
      <Link to="/contact" className="hover:text-orange-500">Contact</Link>
    </li>
  </ul>
);

interface MenuProps {
  textColor: string;
}

const CoursesMenu: React.FC<MenuProps> = ({ textColor }) => (
  <NavigationMenuItem>
    <NavigationMenuTrigger
      className={`text-lg font-semibold hover:text-orange-400 cursor-pointer ${textColor}`}
    >
      Our Courses
    </NavigationMenuTrigger>
    <NavigationMenuContent className="w-[400px] flex flex-col gap-2">
      <Link to="/little-coder" className="w-full">
        <NavigationMenuLink className="block w-full cursor-pointer hover:bg-orange-300 hover:text-white px-4 py-2 rounded">
          Little Coders
        </NavigationMenuLink>
      </Link>
      <Link to="/code-junior" className="w-full">
        <NavigationMenuLink className="block w-full cursor-pointer hover:bg-orange-300 hover:text-white px-4 py-2 rounded">
          Coder Junior
        </NavigationMenuLink>
      </Link>
      <Link to="/code-master" className="w-full">
        <NavigationMenuLink className="block w-full cursor-pointer hover:bg-orange-300 hover:text-white px-4 py-2 rounded">
          Coder Master
        </NavigationMenuLink>
      </Link>
    </NavigationMenuContent>
  </NavigationMenuItem>
);

const MakerCampMenu: React.FC<MenuProps> = ({ textColor }) => (
  <NavigationMenuItem>
    <NavigationMenuTrigger
      className={`text-lg font-semibold hover:text-orange-400 cursor-pointer ${textColor}`}
    >
      Maker Camp
    </NavigationMenuTrigger>
    <NavigationMenuContent className="w-[200px] flex flex-col gap-2">
      <Link to="/little-coder" className="w-full">
        <NavigationMenuLink className="block w-full cursor-pointer hover:bg-orange-300 hover:text-white px-4 py-2 rounded">
          Little Coders
        </NavigationMenuLink>
      </Link>
      <Link to="/code-junior" className="w-full">
        <NavigationMenuLink className="block w-full cursor-pointer hover:bg-orange-300 hover:text-white px-4 py-2 rounded">
          Coder Junior
        </NavigationMenuLink>
      </Link>
      <Link to="/code-master" className="w-full">
        <NavigationMenuLink className="block w-full cursor-pointer hover:bg-orange-300 hover:text-white px-4 py-2 rounded">
          Coder Master
        </NavigationMenuLink>
      </Link>
    </NavigationMenuContent>
  </NavigationMenuItem>
);

// ---------------
// Main NavBar
// ---------------
const NavBar: React.FC = () => {
  const [showTopNav, setShowTopNav] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setShowTopNav(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = showTopNav ? "text-slate-700" : "text-white";

  return (
    <>
      {/* Navbar */}
      <AnimatePresence>
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className={`fixed top-0 left-0 w-full z-40 ${
            showTopNav ? "bg-white shadow" : "bg-transparent"
          }`}
        >
          <div className="container flex justify-between items-center py-6">
           <Link to="/">
              <img src={logo} alt="logo" className="w-40 bg-white rounded-md p-4" />
           </Link>

            {/* Desktop Nav */}
            <div className="hidden md:block">
              <NavigationMenu viewport={false}>
                <NavigationMenuList>
                  <CoursesMenu textColor={textColor} />
                  <MakerCampMenu textColor={textColor} />
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <Button className="bg-orange-500 text-white opacity-0">
              Get Started
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className={`md:hidden ${textColor}`}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 w-full bg-white md:hidden shadow-lg z-50"
          >
            <div className="p-6 text-gray-700 flex flex-col gap-4">
              <NavLinks />
              {/* Mobile courses menu */}
              <Link to="/little-coder" className="hover:text-orange-500">Little Coders</Link>
              <Link to="/code-junior" className="hover:text-orange-500">Coder Junior</Link>
              <Link to="/code-master" className="hover:text-orange-500">Coder Master</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
