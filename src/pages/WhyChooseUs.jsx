import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBolt,
  FaBrain,
  FaCalendarAlt,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

const reasons = [
  {
    title: "Instant Payouts",
    icon: <FaBolt size={18} />,
    content:
      "Our parametric insurance model enables faster claim settlement, helping customers receive payouts quickly after verified events without lengthy assessment processes.",
  },
  {
    title: "AI Risk Engine",
    icon: <FaBrain size={18} />,
    content:
      "We use AI-driven risk analysis to improve pricing accuracy, assess exposure in real time, and provide smarter coverage tailored to your business needs.",
  },
  {
    title: "Weekly Pricing",
    icon: <FaCalendarAlt size={18} />,
    content:
      "Our flexible weekly pricing approach makes insurance more affordable and adaptive, so customers can choose protection that matches changing risk conditions.",
  },
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#f7f7f5] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-green-600 font-semibold">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0f172a] mt-3">
            Reasons To Select Our Insurance
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Reliable protection, faster support, and modern risk intelligence
            designed to make insurance simpler and more effective.
          </p>
        </div>

        <div className="bg-white rounded-[28px] shadow-[0_20px_60px_rgba(15,23,42,0.08)] border border-gray-100 overflow-hidden">
          {reasons.map((reason, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="border-b last:border-b-0 border-gray-200"
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full px-6 md:px-8 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                      {reason.icon}
                    </div>
                    <span className="text-lg md:text-xl font-semibold text-[#0f172a]">
                      {reason.title}
                    </span>
                  </div>

                  <div className="text-[#0f172a] text-lg">
                    {isOpen ? <FaMinus /> : <FaPlus />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 pl-[5.5rem] text-gray-600 leading-7 max-w-4xl">
                        {reason.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
