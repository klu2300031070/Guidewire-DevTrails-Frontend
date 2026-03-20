import { useEffect, useState } from "react";

export default function StatsSection() {
  const stats = [
    { label: "Satisfied Customers", value: 1250, type: "number" },
    { label: "Registered Users", value: 3200, type: "number" },
    { label: "Workers Insured", value: 875, type: "number" },
    { label: "Claims Success Rate", value: 92, type: "percent" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [visible, setVisible] = useState(false);

  // Trigger animation when component mounts
  useEffect(() => {
    setVisible(true);
    const intervals = stats.map((stat, idx) => {
      const increment = stat.value / 100; // smooth increment
      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[idx] < stat.value) {
            newCounts[idx] = Math.min(newCounts[idx] + increment, stat.value);
          }
          return newCounts;
        });
      }, 20);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="bg-[#0B1033] text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`bg-gray-800 rounded-lg p-8 shadow-lg transform transition-all duration-700 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${idx * 0.2}s` }}
          >
            <h3 className="text-4xl font-bold mb-2">
              {stat.type === "percent"
                ? `${Math.floor(counts[idx])}%`
                : Math.floor(counts[idx])}
            </h3>
            <p className="text-gray-300 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}