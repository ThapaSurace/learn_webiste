import { featuredCourses } from "../../data.ts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import FeaturedCourseCard from "../FeaturedCourseCard";

interface Course {
  id: number;
  title: string;
  age: string;
  description: string;
  img: string;
  color?: string;
}

const Feature_Course = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-slate-50 py-12 md:py-16 lg:py-20">
      <div className="container">
        {/* Section Header */}
        <div className="flex justify-center">
          <div className="w-full xl:w-5/12 text-center">
            <p className="text-sm sm:text-base text-primary font-semibold uppercase mb-2 tracking-widest">
              Young Scientist Courses
            </p>
            <h2 className="main_heading">Young Scientist Programs</h2>
            <div className="w-28 h-1 bg-gradient-to-r from-primary to-orange-400 mx-auto mt-4 rounded-full"></div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="flagship" className="w-full">
            <TabsList className="flex justify-center gap-4 mb-10">
              <TabsTrigger
                value="flagship"
                className="rounded-full px-6 py-2 text-sm sm:text-base font-semibold data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow"
              >
                AI Course
              </TabsTrigger>
              <TabsTrigger
                value="markcamp"
                className="rounded-full px-6 py-2 text-sm sm:text-base font-semibold data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow"
              >
                Coding Course
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="flagship"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
            >
              {featuredCourses?.map((item: Course) => (
                <FeaturedCourseCard key={item.id} item={item} />
              ))}
            </TabsContent>

            <TabsContent
              value="markcamp"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
            >
              {featuredCourses.slice(0, 1).map((item: Course) => (
                <FeaturedCourseCard key={item.id} item={item} />
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Feature_Course;
