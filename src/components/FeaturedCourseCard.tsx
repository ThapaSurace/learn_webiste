export interface Course {
  id: number;
  title: string;
  age: string;
  description: string;
  img: string;
  color: string;
}

// Props interface
interface CourseCardProps {
  item: Course;
}
export default function FeaturedCourseCard({ item }: CourseCardProps) {
   const { title, age, description, img, color } = item;
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img src={img} alt={title} className="w-full h-auto object-cover" />
      <div className="p-6 text-center">
        <h3 className={`text-xl font-bold text-${color} mb-2`}>{title}</h3>
        <p className={`text-${color} font-semibold mb-2`}>{age}</p>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <a
          href="#"
          className={`inline-block px-6 py-2 border border-${color} text-${color} rounded-full hover:bg-${color} hover:text-white transition`}
        >
          Read Inside
        </a>
      </div>
    </div>
  );
}
