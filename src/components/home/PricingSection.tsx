import { Check } from "lucide-react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

const pricingPlans = [
  {
    title: "Beginner",
    price: " 299",
    perClass: " 24 / class",
    duration: "3 months - 12 Live Classes",
    age: "6–7 Years Old / Grades 1–2",
    curriculum: [
      "LEVEL 1 Technology Around Us",
      "Identify tech types in daily life",
      "Explain daily tech benefits and uses",
      "Spot computer parts and components",
      "Demonstrate programming skills",
    ],
  },
  {
    title: "Advanced",
    price: " 599",
    perClass: " 24 / class",
    duration: "6 months - 24 Live Classes",
    age: "6–7 Years Old / Grades 1–2",
    curriculum: [
      "Everything in Beginner + LEVEL 2 Creative Computing",
      "Apply new Scratch Jr. blocks",
      "Enhance problem-solving and thinking skills",
      "Utilize Scratch Jr. for problem-solving",
      "Effectively express ideas and programs",
    ],
  },
  {
    title: "Expert",
    price: " 999",
    perClass: " 20 / class",
    duration: "12 months - 48 Live Classes",
    age: "6–7 Years Old / Grades 1–2",
    curriculum: [
      "Everything in Advanced + LEVEL 3, LEVEL 4",
      "Chatbots & Voice Assistants",
      "Show programming and computer understanding basics",
      "Apply coding concepts to solve challenges",
      "Analyze and fix code errors effectively",
      "Demonstrate mastery through practical programming",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-orange-100/80">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="main_heading">
          Pricing Plans
        </h2>
        <div className="w-20 h-1 bg-orange-500 mx-auto mt-2 rounded mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Choose the best plan for your child’s learning journey.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-md bg-white text-gray-800 p-8 flex flex-col border border-orange-100"
            >
              {/* Pricing Header */}
              <h3 className="text-2xl font-bold text-orange-600 mb-2">
                {plan.title}
              </h3>
              <div className="text-4xl font-extrabold text-slate-700 mb-2">
                {plan.price}
              </div>
              <p className="text-sm text-gray-500 mb-4">{plan.perClass}</p>
              <p className="font-medium text-gray-700 mb-2">{plan.duration}</p>
              <p className="text-sm italic text-gray-500 mb-6">{plan.age}</p>

              <Separator className="my-8" />

              {/* Curriculum */}
              <div className="text-left flex-1 mb-6 space-y-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  {plan.curriculum[0]}
                </h4>
                <ul className="space-y-2">
                  {plan.curriculum.slice(1).map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 mt-1 text-orange-500" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button size="lg">
                Enroll Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
