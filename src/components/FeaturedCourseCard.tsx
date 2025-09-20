// import { Button } from "./ui/button";

// export interface Course {
//   id: number;
//   title: string;
//   age: string;
//   description: string;
//   img: string;
// }

// // Props interface
// interface CourseCardProps {
//   item: Course;
// }

// export default function FeaturedCourseCard({ item }: CourseCardProps) {
//   const { title, age, description, img } = item;

//   return (
//     <div className="group relative bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
//       {/* Image */}
//       <div className="relative h-auto overflow-hidden">
//         <img
//           src={img}
//           alt={title}
//           className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//       </div>

//       {/* Content */}
//       <div className="p-6 text-center">
//         <h3 className="text-xl font-bold text-slate-800 group-hover:text-primary transition-colors mb-2">
//           {title}
//         </h3>
//         <p className="text-sm font-semibold text-slate-600 mb-2">{age}</p>
//         <p className="text-slate-500 text-sm mb-4 line-clamp-2">{description}</p>

//         <Button
//           className="rounded-full px-6 py-3 text-primary border-primary 
//           transition-all duration-300 ease-in-out 
//           hover:bg-primary hover:text-white hover:shadow-md hover:scale-105"
//           variant="outline"
//         >
//           Read More
//         </Button>
//       </div>
//     </div>
//   );
// }







export interface Course {
  id: number;
  title: string;
  age: string;
  description?: string;
  img: string;
}

interface CourseCardProps {
  item: Course;
}

export default function FeaturedCourseCard({ item }: CourseCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 relative">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-slate-800 mb-4">
          {item.title}
        </h3>

        {/* Age pill at bottom center */}
        <div className="flex justify-center">
          <span className="inline-block bg-slate-900 text-white text-sm font-medium px-4 py-1.5 rounded-full">
            {item.age}
          </span>
        </div>
      </div>
    </div>
  );
}
