import { Button } from "./ui/button";

export interface Course {
  id: number;
  title: string;
  age: string;
  description: string;
  img: string;
}

// Props interface
interface CourseCardProps {
  item: Course;
}
export default function FeaturedCourseCard({ item }: CourseCardProps) {
  const { title, age, description, img } = item;
  return (
    <div className="max-w-sm bg-white rounded-xl shadow overflow-hidden cursor-pointer transition-shadow duration-300">
      <img src={img} alt={title} className="w-full h-auto object-cover" />
      <div className="p-6 text-center">
        <h3 className={`text-xl font-bold  mb-2 text-primary`}>{title}</h3>
        <p className={` font-semibold mb-2 text-slate-800`}>{age}</p>
        <p className="text-slate-500 text-sm mb-4 line-clamp-2">{description}</p>
        <Button
          className="
    text-primary border-primary px-6 py-3 
    rounded-full
    transition-all duration-300 ease-in-out
    hover:bg-primary hover:text-white 
   hover:scale-105
  "
          variant="outline"
        >
          Read More
        </Button>
      </div>
    </div>
  );
}
