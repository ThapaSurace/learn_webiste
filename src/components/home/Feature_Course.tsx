

import {featuredCourses} from "../../data.ts"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import FeaturedCourseCard from "../FeaturedCourseCard";

interface Course {
  id: number
  title: string;
  age: string;
  description: string;
  img: string;
  color: string;
}

const Feature_Course = () => {
  return (
    <div className="w-full bg-white mb-20">
      <div className="container">
        <div className="flex justify-center">
          <div className="w-full xl:w-5/12 text-center">
            <p className="text-slate-600 font-semibold uppercase mb-2">
              Featured Courses
            </p>
            <h2 className="text-4xl font-extrabold text-header">
              LearnWare Programs
            </h2>
            <div className="w-32 h-[1px] bg-orange-500 mx-auto mt-4 rounded"></div>
          </div>
        </div>
        {/* tabs */}
        <div className="mt-10">
          <Tabs defaultValue="flagship" className="flex justify-between w-full">
            <TabsList className="mb-10">
              <TabsTrigger className="text-primary" value="flagship">Flagship Course</TabsTrigger>
              <TabsTrigger className="text-primary" value="markcamp">MarkCamp Course</TabsTrigger>
            </TabsList>
            <TabsContent value="flagship" className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {featuredCourses?.map((item:Course) => (
                <FeaturedCourseCard key={item.id} item={item} />
              ))}
            </TabsContent>
            <TabsContent value="markcamp" className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {featuredCourses.slice(0,1).map((item:Course) => (
                <FeaturedCourseCard key={item.id} item={item} />
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
export default Feature_Course;
