export default function LearningMethodologies() {
  return (
    <section className="py-8 md:py-12 lg:py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-header">Learning Methodologies</h2>
          <div className="w-20 h-[1.5px] bg-orange-500 mx-auto mt-4 rounded"></div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-left">
            <thead>
              <tr className="">
                <th className="py-3 px-6 text-gray-800 font-bold text-lg"> </th>
                <th className="py-3 px-6 text-gray-800 font-bold text-lg">Group Learning</th>
                <th className="py-3 px-6 text-gray-800 font-bold text-lg">Personal Learning</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "No. of Students in a Class", group: "Up to 6", personal: "1 to 1" },
                { label: "Class Schedules", group: "4 Classes/Month", personal: "Flexible" },
                { label: "Class Duration", group: "1.5 Hours", personal: "1 Hour" },
                { label: "Rescheduling Classes", group: "Peer Dependent", personal: "Flexible" },
                { label: "Pace of Learning", group: "As per schedule", personal: "Personalized" },
              ].map((row, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="py-4 px-6 font-bold text-gray-800 text-lg">{row.label}</td>
                  <td className="py-4 px-6 text-gray-700">{row.group}</td>
                  <td className="py-4 px-6 text-gray-700">{row.personal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
