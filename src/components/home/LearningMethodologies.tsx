export default function LearningMethodologies() {
  const rows = [
    { label: "No. of Students in a Class", group: "Up to 6", personal: "1 to 1" },
    { label: "Class Schedules", group: "4 Classes/Month", personal: "Flexible" },
    { label: "Class Duration", group: "1.5 Hours", personal: "1 Hour" },
    { label: "Rescheduling Classes", group: "Peer Dependent", personal: "Flexible" },
    { label: "Pace of Learning", group: "As per schedule", personal: "Personalized" },
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="main_heading">Learning Methodologies</h2>
          <div className="w-20 h-[3px] bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Modern Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-0 rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-gradient-to-r from-orange-50 to-orange-100">
                <th className="py-4 px-6 text-gray-900 font-bold text-sm sm:text-base text-left rounded-tl-xl">
                  Feature
                </th>
                <th className="py-4 px-6 text-primary font-bold text-sm sm:text-base text-center">
                  Group Learning
                </th>
                <th className="py-4 px-6 text-sky-700 font-bold text-sm sm:text-base text-center rounded-tr-xl">
                  Personal Learning
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr
                  key={idx}
                  className="even:bg-gray-50 hover:bg-orange-50 transition-colors"
                >
                  <td className="py-4 px-6 font-medium text-gray-800 text-sm sm:text-base border-b border-gray-100">
                    {row.label}
                  </td>
                  <td className="py-4 px-6 text-gray-700 text-sm sm:text-base text-center border-b border-gray-100">
                    {row.group}
                  </td>
                  <td className="py-4 px-6 text-gray-700 text-sm sm:text-base text-center border-b border-gray-100">
                    {row.personal}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
