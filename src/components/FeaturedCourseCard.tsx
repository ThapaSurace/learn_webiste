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
    <div className="max-w-sm bg-white rounded-xl shadow hover:shadow-lg overflow-hidden cursor-pointer transition-shadow duration-300">
      <img src={img} alt={title} className="w-full h-auto object-cover" />
      <div className="p-6 text-center">
        <h3 className={`text-xl font-bold  mb-2 text-primary`}>{title}</h3>
        <p className={` font-semibold mb-2`}>{age}</p>
        <p className="text-gray-500 text-sm mb-4">{description}</p>
        <Button
          variant="outline"
          size="lg"
          
        >
          Read Inside
        </Button>
      </div>
    </div>
  );
}
