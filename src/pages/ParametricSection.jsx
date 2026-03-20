import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaSun,
  FaCloudRain,
  FaWind,
  FaSnowflake,
  FaArrowDown,
} from "react-icons/fa";

export default function ParametricSection() {
  const [mode, setMode] = useState("AUTOMATIC");

  const events = [
    { icon: <FaSun />, label: "Drought" },
    { icon: <FaCloudRain />, label: "Heavy Rain" },
    { icon: <FaWind />, label: "Windstorm" },
    { icon: <FaSnowflake />, label: "Snowstorm" },
  ];

  const automaticSteps = [
    {
      title: "STEP 1",
      desc: "Verify against objective, third-party data after a qualifying event",
    },
    {
      title: "STEP 2",
      desc: "Payment issued in as little as 2 weeks after data verification",
    },
  ];

  const traditionalSteps = [
    { title: "STEP 1", desc: "Insured assesses damage after a qualifying event" },
    { title: "STEP 2", desc: "Insured submits claim" },
    { title: "STEP 3", desc: "Insurer reviews claim" },
    { title: "STEP 4", desc: "Adjuster assesses and validates claim" },
    { title: "STEP 5", desc: "Claim is paid based on completion of assessment" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMode((prev) => (prev === "AUTOMATIC" ? "TRADITIONAL" : "AUTOMATIC"));
    }, 500000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#0B1033] text-white py-24 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start gap-12">
        {/* Left: Circle with Icons */}
        <div className="relative w-80 h-80 flex-shrink-0 flex items-center justify-center mx-auto">
          <div className="absolute w-full h-full rounded-full border border-green-500/50 animate-pulse"></div>

          <div className="absolute w-24 h-24 rounded-full bg-green-500 flex items-center justify-center text-center text-black font-semibold p-2 z-10">
            Qualifying <br /> Event <br /> Occurs
          </div>

          {events.map((e, idx) => (
            <motion.div
              key={idx}
              className="absolute text-green-400 text-2xl flex flex-col items-center gap-2"
              style={{
                top: idx === 0 ? 0 : idx === 2 ? "auto" : "50%",
                bottom: idx === 2 ? 0 : "auto",
                left: idx === 3 ? 0 : idx === 0 || idx === 2 ? "50%" : "auto",
                right: idx === 1 ? 0 : "auto",
                transform:
                  idx === 0 || idx === 2
                    ? "translateX(-50%)"
                    : idx === 1 || idx === 3
                    ? "translateY(-50%)"
                    : "none",
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 + idx * 0.1 }}
            >
              {e.icon}
              <span className="text-xs text-white">{e.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Right: Steps */}
        <div className="flex-1 flex flex-col gap-8 min-h-[450px] w-full">
          {/* Toggle Buttons */}
          <div className="flex items-center gap-4 mb-2 flex-wrap">
            <button
              className={`px-4 py-2 rounded-full font-medium transition ${
                mode === "AUTOMATIC"
                  ? "bg-green-500 text-black"
                  : "bg-gray-600 text-white"
              }`}
              onClick={() => setMode("AUTOMATIC")}
            >
              AUTOMATIC
            </button>

            <button
              className={`px-4 py-2 rounded-full font-medium transition ${
                mode === "TRADITIONAL"
                  ? "bg-green-500 text-black"
                  : "bg-gray-600 text-white"
              }`}
              onClick={() => setMode("TRADITIONAL")}
            >
              TRADITIONAL
            </button>
          </div>

          {/* Automatic Layout */}
          {mode === "AUTOMATIC" ? (
            <div className="flex flex-col gap-6 justify-center flex-1">
              {automaticSteps.map((step, i) => (
                <div key={i} className="flex flex-col items-center">
                  <motion.div
                    className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-md text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.desc}</p>
                  </motion.div>

                  {i < automaticSteps.length - 1 && (
                    <motion.div
                      className="text-green-500 text-2xl mt-2"
                      animate={{ y: [0, 10, 0] }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                    >
                      <FaArrowDown />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            /* Traditional Layout - no scroll, compact grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 content-start">
              {traditionalSteps.map((step, i) => (
                <motion.div
                  key={i}
                  className="p-5 bg-gray-800 rounded-lg shadow-md"
                  whileHover={{ scale: 1.03 }}
                >
                  <h3 className="text-base font-bold text-green-400 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
