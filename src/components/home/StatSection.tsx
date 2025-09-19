const StatsSection = () => {
  const stats = [
    { label: "Founded", value: "2014" },
    { label: "Countries", value: "30" },
    { label: "Locations", value: "360+" },
    { label: "Students", value: "320,000+" },
  ];

  return (
    <section className="container mt-10">
      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 py-10he">
        {stats.map((item) => (
          <div key={item.label}>
            <p className="text-primary font-semibold">{item.label}</p>
            <p className="text-4xl md:text-5xl font-extrabold text-sky-800 oldstyle-nums font-stat">
              {item.value}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default StatsSection;
