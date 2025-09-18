import { Users, Star, Smile, Calendar } from "lucide-react";

const stats = [
  { id: 1, label: "Years of operation", value: "14+", icon: Calendar, color: "bg-sky-500" },
  { id: 2, label: "Skilled professionals", value: "450+", icon: Users, color: "bg-lime-500" },
  { id: 3, label: "Net promoter score", value: "72", icon: Star, color: "bg-yellow-500" },
  { id: 4, label: "Happy Students", value: "200+", icon: Smile, color: "bg-pink-500" },
];

export default function StatSection() {
  return (
    <section className="bg-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="flex flex-col items-center"
              >
                <div
                  className={`flex items-center justify-center w-16 h-16  text-slate-800 text-2xl mb-4 `}
                >
                  <Icon size={35} />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-slate-500 text-center">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
