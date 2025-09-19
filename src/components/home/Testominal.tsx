import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="container py-10 md:py-12 lg:py-16">
      <div className="flex justify-center mb-10">
        <div className="w-full xl:w-5/12 text-center">
          <p className="text-slate-600 font-semibold uppercase mb-2">
            Testimonials
          </p>
          <h2 className="main_heading">
            What The Parents Say?
          </h2>
          <div className="w-32 h-[1px] bg-orange-500 mx-auto mt-4 rounded"></div>
        </div>
      </div>
      <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "My son has become far more confident and curious after joining the AI and robotics classes. His problem-solving skills have improved dramatically.",
    name: "Sunita Shrestha",
    title: "Mother of a 6th Grade Student",
  },
  {
    quote:
      "The sessions are fun and hands-on, giving my daughter the inspiration to pursue a future in technology.",
    name: "Binod Adhikari",
    title: "Father of a Future Programmer",
  },
  {
    quote:
      "Working on real projects has helped my children grow in both creativity and leadership.",
    name: "Maya Gurung",
    title: "Mother of Two Young Innovators",
  },
  {
    quote:
      "Early education in AI and robotics is the best investment we’ve made for our son’s future.",
    name: "Krishna Thapa",
    title: "IT Professional & Proud Parent",
  },
  {
    quote:
      "The curriculum is world-class and the instructors are incredibly supportive, keeping my daughter excited to learn every week.",
    name: "Laxmi K.C.",
    title: "Mother of an 8-Year-Old Student",
  },
];
