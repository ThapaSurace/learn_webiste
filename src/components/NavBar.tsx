// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import { Button } from "./ui/button";
// import logo from "../assets/logo.png";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
// import { Link } from "react-router-dom";

// interface MenuProps {
//   textColor: string;
// }


// const programLinks = [
//   { name: "Elementary School ( Age 7-10)", href: "/programs/elementary" },
//   { name: "Middle School (Age 11-13)",  href: "/programs/middle" },
//   { name: " High School (Age 14-18)", href: "/programs/high" },
// ];

// const CoursesMenu: React.FC<MenuProps> = ({ textColor }) => (
//   <NavigationMenuItem>
//     <NavigationMenuTrigger
//       className={`text-base font-semibold hover:text-orange-400 cursor-pointer ${textColor}`}
//     >
//       Programs
//     </NavigationMenuTrigger>
//     <NavigationMenuContent className="">
//       {programLinks.map((program) => (
//         <Link to="#" className="w-full min-w-md">
//           <NavigationMenuLink
//             key={program.href}
//             className="block w-full cursor-pointer hover:bg-orange-300 hover:text-white px-4 py-2 rounded text-center"
//           >
//             {program.name}
//           </NavigationMenuLink>
//         </Link>
//       ))}
//     </NavigationMenuContent>
//   </NavigationMenuItem>
// );

// const CampMenu: React.FC<MenuProps> = ({ textColor }) => (
//   <NavigationMenuItem>
//     <NavigationMenuTrigger
//       className={`text-base font-semibold hover:text-orange-400 cursor-pointer ${textColor}`}
//     >
//        Camp
//     </NavigationMenuTrigger>
//     <NavigationMenuContent className="w-[200px] flex flex-col gap-2">
//       <Link to="#" className="w-full">
//         <NavigationMenuLink className="block w-full cursor-pointer hover:bg-orange-300 hover:text-white px-4 py-2 rounded text-center">
//           Summer Bootcamp
//         </NavigationMenuLink>
//       </Link>
//       <Link to="#" className="w-full">
//         <NavigationMenuLink className="block w-full cursor-pointer hover:bg-orange-300 hover:text-white px-4 py-2 rounded text-center">
//           Winter Bootcamp
//         </NavigationMenuLink>
//       </Link>
//     </NavigationMenuContent>
//   </NavigationMenuItem>
// );

// const CompetitionsMenu: React.FC<MenuProps> = ({ textColor }) => (
//   <NavigationMenuItem>
//     <NavigationMenuTrigger
//       className={`text-base font-semibold hover:text-orange-400 cursor-pointer ${textColor}`}
//     >
//        Competitions
//     </NavigationMenuTrigger>
//     <NavigationMenuContent className="w-[200px] flex flex-col gap-2">
//       <Link to="#" className="w-full">
//         <NavigationMenuLink className="block w-full cursor-pointer hover:bg-orange-300 hover:text-white px-4 py-2 rounded text-center">
//           Summer Bootcamp
//         </NavigationMenuLink>
//       </Link>
//       <Link to="#" className="w-full">
//         <NavigationMenuLink className="block w-full cursor-pointer hover:bg-orange-300 hover:text-white px-4 py-2 rounded text-center">
//           Winter Bootcamp
//         </NavigationMenuLink>
//       </Link>
//     </NavigationMenuContent>
//   </NavigationMenuItem>
// );

// const SchoolSolutionsMenu: React.FC<MenuProps> = ({ textColor }) => (
//   <NavigationMenuItem>
//     <NavigationMenuTrigger
//       className={`text-base font-semibold hover:text-orange-400 cursor-pointer ${textColor}`}
//     >
//        School Solution
//     </NavigationMenuTrigger>
//     <NavigationMenuContent className="w-[200px] flex flex-col gap-2">
//       <Link to="#" className="w-full">
//         <NavigationMenuLink className="block w-full cursor-pointer hover:bg-orange-300 hover:text-white px-4 py-2 rounded text-center">
//           Summer Bootcamp
//         </NavigationMenuLink>
//       </Link>
//       <Link to="#" className="w-full">
//         <NavigationMenuLink className="block w-full cursor-pointer hover:bg-orange-300 hover:text-white px-4 py-2 rounded text-center">
//           Winter Bootcamp
//         </NavigationMenuLink>
//       </Link>
//     </NavigationMenuContent>
//   </NavigationMenuItem>
// );
// const STEAMMenu: React.FC<MenuProps> = ({ textColor }) => (
//   <NavigationMenuItem>
//     <NavigationMenuTrigger
//       className={`text-base font-semibold hover:text-orange-400 cursor-pointer ${textColor}`}
//     >
//        STEAM
//     </NavigationMenuTrigger>
//     <NavigationMenuContent className="w-[200px] flex flex-col gap-2">
//       <Link to="#" className="w-full">
//         <NavigationMenuLink className="block w-full cursor-pointer hover:bg-orange-300 hover:text-white px-4 py-2 rounded text-center">
//           Summer Bootcamp
//         </NavigationMenuLink>
//       </Link>
//       <Link to="#" className="w-full">
//         <NavigationMenuLink className="block w-full cursor-pointer hover:bg-orange-300 hover:text-white px-4 py-2 rounded text-center">
//           Winter Bootcamp
//         </NavigationMenuLink>
//       </Link>
//     </NavigationMenuContent>
//   </NavigationMenuItem>
// );

// const ScienceMenu: React.FC<MenuProps> = ({ textColor }) => (
//   <NavigationMenuItem>
//     <NavigationMenuTrigger
//       className={`text-base font-semibold hover:text-orange-400 cursor-pointer ${textColor}`}
//     >
//        Science
//     </NavigationMenuTrigger>
//     <NavigationMenuContent className="w-[200px] flex flex-col gap-2">
//       <Link to="#" className="w-full">
//         <NavigationMenuLink className="block w-full cursor-pointer hover:bg-orange-300 hover:text-white px-4 py-2 rounded text-center">
//           Summer Bootcamp
//         </NavigationMenuLink>
//       </Link>
//       <Link to="#" className="w-full">
//         <NavigationMenuLink className="block w-full cursor-pointer hover:bg-orange-300 hover:text-white px-4 py-2 rounded text-center">
//           Winter Bootcamp
//         </NavigationMenuLink>
//       </Link>
//     </NavigationMenuContent>
//   </NavigationMenuItem>
// );
// // ---------------
// // Main NavBar
// // ---------------
// const NavBar: React.FC = () => {
//   const [showTopNav, setShowTopNav] = useState<boolean>(false);
//   const [menuOpen, setMenuOpen] = useState<boolean>(false);

//   useEffect(() => {
//     const handleScroll = () => setShowTopNav(window.scrollY > 90);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const textColor = showTopNav ? "text-slate-700" : "text-slate-700";

//   return (
//     <>
//       {/* Navbar */}
//       <AnimatePresence>
//         <motion.div
//           initial={{ y: -80, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: -80, opacity: 0 }}
//           transition={{ duration: 0.4 }}
//           className={`fixed top-0 left-0 w-full z-40 ${
//             showTopNav ? "bg-white shadow" : "bg-transparent"
//           }`}
//         >
//           <div className="container flex justify-between items-center py-4">
//             <Link to="/">
//               <img src={logo} alt="logo" className=" w-36 sm:w-40 md:w-56" />
//             </Link>

//             {/* Desktop Nav */}
//             <div className="hidden md:block">
//               <NavigationMenu viewport={false}>
//                 <NavigationMenuList>
//                   <CoursesMenu textColor={textColor} />
//                   <CampMenu textColor={textColor} />
//                   <CompetitionsMenu textColor={textColor} />
//                   <SchoolSolutionsMenu textColor={textColor} />
//                   <STEAMMenu textColor={textColor} />
//                   <ScienceMenu textColor={textColor} />
//                 </NavigationMenuList>
//               </NavigationMenu>
//             </div>

//             {/* <Button size="lg" className="bg-primary text-white opacity-0">
//               Get Touch
//             </Button> */}

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setMenuOpen((prev) => !prev)}
//               className={`md:hidden ${textColor}`}
//             >
//               {menuOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Mobile Menu */}
//       {/* Mobile Menu */}
//       {/* Mobile Menu */}
//       {/* Mobile Menu */}
// <AnimatePresence>
//   {menuOpen && (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.3 }}
//       className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex flex-col"
//     >
//       <motion.div
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         exit={{ y: -50, opacity: 0 }}
//         transition={{ duration: 0.3 }}
//         className="bg-white w-full h-full flex flex-col p-8 overflow-y-auto"
//       >
//         {/* Close Button */}
//         <button
//           onClick={() => setMenuOpen(false)}
//           className="absolute top-6 right-6 text-gray-700 hover:text-orange-500 cursor-pointer"
//         >
//           <X size={32} />
//         </button>

//         {/* Mobile Nav Links */}
//         <nav className="flex flex-col gap-6 text-gray-700 text-lg mt-12">
//           {/* Programs */}
//           <div className="flex flex-col gap-2">
//             <h3 className="text-orange-500 font-semibold text-xl">Programs</h3>
//             {programLinks.map((program) => (
//               <Link
//                 key={program.href}
//                 to={program.href}
//                 onClick={() => setMenuOpen(false)}
//                 className="px-4 py-2 rounded hover:bg-orange-500 hover:text-white transition"
//               >
//                 {program.name}
//               </Link>
//             ))}
//           </div>

//           {/* Camps */}
//           <div className="flex flex-col gap-2">
//             <h3 className="text-orange-500 font-semibold text-xl">Camps</h3>
//             <Link
//               to="/camps/summer"
//               onClick={() => setMenuOpen(false)}
//               className="px-4 py-2 rounded hover:bg-orange-500 hover:text-white transition"
//             >
//               Summer Bootcamp
//             </Link>
//             <Link
//               to="/camps/winter"
//               onClick={() => setMenuOpen(false)}
//               className="px-4 py-2 rounded hover:bg-orange-500 hover:text-white transition"
//             >
//               Winter Bootcamp
//             </Link>
//           </div>

//           {/* Competitions */}
//           <div className="flex flex-col gap-2">
//             <h3 className="text-orange-500 font-semibold text-xl">Competitions</h3>
//             <Link
//               to="/competitions/local"
//               onClick={() => setMenuOpen(false)}
//               className="px-4 py-2 rounded hover:bg-orange-500 hover:text-white transition"
//             >
//               Local Events
//             </Link>
//             <Link
//               to="/competitions/global"
//               onClick={() => setMenuOpen(false)}
//               className="px-4 py-2 rounded hover:bg-orange-500 hover:text-white transition"
//             >
//               Global Challenges
//             </Link>
//           </div>

//           {/* School Solutions */}
//           <div className="flex flex-col gap-2">
//             <h3 className="text-orange-500 font-semibold text-xl">School Solutions</h3>
//             <Link
//               to="/school-solutions"
//               onClick={() => setMenuOpen(false)}
//               className="px-4 py-2 rounded hover:bg-orange-500 hover:text-white transition"
//             >
//               Overview
//             </Link>
//           </div>

//           {/* STEAM */}
//           <div className="flex flex-col gap-2">
//             <h3 className="text-orange-500 font-semibold text-xl">STEAM</h3>
//             <Link
//               to="/steam"
//               onClick={() => setMenuOpen(false)}
//               className="px-4 py-2 rounded hover:bg-orange-500 hover:text-white transition"
//             >
//               Explore STEAM
//             </Link>
//           </div>

//           {/* Science */}
//           <div className="flex flex-col gap-2">
//             <h3 className="text-orange-500 font-semibold text-xl">Science</h3>
//             <Link
//               to="/science"
//               onClick={() => setMenuOpen(false)}
//               className="px-4 py-2 rounded hover:bg-orange-500 hover:text-white transition"
//             >
//               Explore Science
//             </Link>
//           </div>
//         </nav>
//       </motion.div>
//     </motion.div>
//   )}
// </AnimatePresence>

//     </>
//   );
// };

// export default NavBar;



import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

// --------------------
// Data
// --------------------
const programLinks = [
  { name: "Elementary School (Age 7-10)", href: "/programs/elementary" },
  { name: "Middle School (Age 11-13)", href: "/programs/middle" },
  { name: "High School (Age 14-18)", href: "/programs/high" },
];

const campLinks = [
  { name: "Summer Bootcamp", href: "/camps/summer" },
  { name: "Winter Bootcamp", href: "/camps/winter" },
];

const competitionLinks = [
  {
    name: "Online Coding Competition",
    href: "/competitions/discovery-education-online-coding",
  },
  { name: "First Lego League", href: "/competitions/first-lego-league" },
  { name: "Robotics Competition", href: "/competitions/robotics" },
  { name: "STEM Competition", href: "/competitions/stem" },
];

const schoolLinks = [
  { name: "After School Program", href: "/school-solutions/after-school-program" },
  {
    name: "Arduino Inspiration Lab with Training Program",
    href: "/school-solutions/arduino-inspiration-lab",
  },
  { name: "Lego Lab and Training Program", href: "/school-solutions/lego-lab-training" },
  { name: "Coding and AI Program", href: "/school-solutions/coding-ai-program" },
];

const steamLinks = [
  { name: "Lego Education for Elementary", href: "/steam/lego-education-elementary" },
  { name: "Lego Education for Middle School", href: "/steam/lego-education-middle" },
  { name: "Lego For High School", href: "/steam/lego-high-school" },
];

const scienceLinks = [
  { name: "Grade K-2", href: "/science/grade-k-2" },
  { name: "Grade 3-5", href: "/science/grade-3-5" },
  { name: "Grade 6-8", href: "/science/grade-6-8" },
];

// --------------------
// Desktop Dropdown
// --------------------
interface DropdownProps {
  label: string;
  links: { name: string; href: string }[];
  textColor: string;
  width?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  links,
  textColor,
  width = "min-w-[250px]",
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={`px-3 py-2 text-base font-semibold hover:text-orange-400 ${textColor}`}
      >
        {label}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className={`absolute left-1/2 -translate-x-1/2 mt-1 bg-white shadow-lg rounded-md 
                        ring-1 ring-black/5 z-50 p-4 ${width} max-w-[calc(100vw-1rem)]`}
          >
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="block px-4 py-2 hover:bg-orange-400 hover:text-white text-gray-700 rounded w-full text-center text-sm"
              >
                {l.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --------------------
// Mobile Accordion Section
// --------------------
const MobileSection = ({
  title,
  links,
}: {
  title: string;
  links: { name: string; href: string }[];
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <button
        onClick={() => setOpen((p) => !p)}
        className="flex justify-between items-center px-5 py-3 text-lg w-full rounded-lg font-semibold text-gray-800 hover:bg-slate-100 cursor-pointer transition"
      >
        <span>{title}</span>
        <ChevronDown
          className={`transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
          size={20}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col pl-6 mt-2 gap-2"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition cursor-pointer text-gray-700"
              >
                {l.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --------------------
// Main NavBar
// --------------------
const NavBar: React.FC = () => {
  const [showTopNav, setShowTopNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopNav(window.scrollY > 90);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = showTopNav ? "text-slate-700" : "text-slate-700";

  return (
    <>
      {/* Desktop / Top Nav */}
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
              <img src={logo} alt="logo" className="w-36 sm:w-40 md:w-56" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-4">
              <Dropdown label="Programs" links={programLinks} textColor={textColor} width="w-[300px]" />
              <Dropdown label="Camps" links={campLinks} textColor={textColor} />
              <Dropdown label="Competitions" links={competitionLinks} textColor={textColor} />
              <Dropdown label="School Solutions" links={schoolLinks} textColor={textColor} />
              <Dropdown label="STEAM" links={steamLinks} textColor={textColor} />
              <Dropdown label="Science" links={scienceLinks} textColor={textColor} />
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMenuOpen((p) => !p)}
              className={`lg:hidden hover:text-orange-500 cursor-pointer ${textColor}`}
            >
              <Menu size={28} />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/30 z-40"
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 w-full sm:w-1/2 h-full bg-gray-50 z-50 shadow-xl flex flex-col p-6 overflow-y-auto"
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="self-end text-gray-700 hover:text-orange-500 mb-4 cursor-pointer"
              >
                <X size={28} />
              </button>

              <nav className="flex flex-col gap-4">
                <MobileSection title="Programs" links={programLinks} />
                <MobileSection title="Camps" links={campLinks} />
                <MobileSection title="Competitions" links={competitionLinks} />
                <MobileSection title="School Solutions" links={schoolLinks} />
                <MobileSection title="STEAM" links={steamLinks} />
                <MobileSection title="Science" links={scienceLinks} />
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
