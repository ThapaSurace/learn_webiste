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
    const handleScroll = () => setShowTopNav(window.scrollY > 90);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = showTopNav ? "text-slate-700" : "text-slate-700";

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
          <div className="container flex justify-between items-center py-4">
           <Link to="/">
              <img src={logo} alt="logo" className=" w-32 sm:w-40 md:w-56 bg-white rounded-md p-4 shadow-md" />
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

            <Button size="lg" className="bg-primary text-white opacity-0">
              Get Touch
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
      {/* Mobile Menu */}
{/* Mobile Menu */}
<AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white w-full h-full flex flex-col items-center justify-center gap-8 p-8 overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-gray-700 hover:text-orange-500 cursor-pointer"
        >
          <X size={32} />
        </button>

        {/* Main Links */}
        

        {/* Divider */}
        {/* <hr className="w-3/4 border-gray-300 my-6" /> */}

        {/* Courses Section */}
        <div className="flex flex-col items-center gap-4 text-gray-700 text-lg">
          <h3 className="text-orange-500 font-semibold text-2xl mb-2">
            Courses
          </h3>
          <Link
            to="/little-coder"
            onClick={() => setMenuOpen(false)}
            className="px-6 py-3 rounded hover:bg-orange-500 hover:text-white transition"
          >
            Little Coders
          </Link>
          <Link
            to="/code-junior"
            onClick={() => setMenuOpen(false)}
            className="px-6 py-3 rounded hover:bg-orange-500 hover:text-white transition"
          >
            Coder Junior
          </Link>
          <Link
            to="/code-master"
            onClick={() => setMenuOpen(false)}
            className="px-6 py-3 rounded hover:bg-orange-500 hover:text-white transition"
          >
            Coder Master
          </Link>
        </div>

        {/* Maker Camp Section */}
        <div className="flex flex-col items-center gap-4 text-gray-700 text-lg mt-6">
          <h3 className="text-orange-500 font-semibold text-2xl mb-2">
            Maker Camp
          </h3>
          <Link
            to="/maker-camp"
            onClick={() => setMenuOpen(false)}
            className="px-6 py-3 rounded hover:bg-orange-500 hover:text-white transition"
          >
            Overview
          </Link>
          <Link
            to="/maker-camp/projects"
            onClick={() => setMenuOpen(false)}
            className="px-6 py-3 rounded hover:bg-orange-500 hover:text-white transition"
          >
            Projects
          </Link>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>


    </>
  );
};

export default NavBar;
