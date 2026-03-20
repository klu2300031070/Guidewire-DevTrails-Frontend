import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPlus,
  FaMinus,
  FaDatabase,
  FaBrain,
  FaLayerGroup,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

const accordionData = [
  {
    title: "Expansive Data Infrastructure",
    desc: "Our data systems enable fast collection, validation, and analysis of climate and operational data so decisions can be made with speed and confidence.",
    icon: <FaDatabase />,
  },
  {
    title: "AI/ML Underwriter",
    desc: "Machine learning supports smarter underwriting by identifying patterns, estimating exposure, and improving pricing accuracy for delivery partner insurance.",
    icon: <FaBrain />,
  },
  {
    title: "Arbol Platform",
    desc: "A unified platform to manage policies, payouts, claims workflows, and climate risk insights with a seamless digital experience.",
    icon: <FaLayerGroup />,
  },
  {
    title: "Flexible Risk Capital",
    desc: "We use adaptive capital structures that help support different levels of coverage, risk categories, and payout conditions.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Customers",
    desc: "We support a broad range of users with tailored protection solutions designed for modern workers facing weather and income uncertainty.",
    icon: <FaUsers />,
  },
];

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f8fafc] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-600">
            Why It Works
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">
            Built for smarter protection
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg leading-8">
            Explore the technology, infrastructure, and customer-first systems
            that make our insurance experience faster, more accurate, and more
            reliable.
          </p>
        </div>

        <div className="space-y-4">
          {accordionData.map((item, idx) => {
            const isOpen = activeIndex === idx;

            return (
              <motion.div
                key={idx}
                layout
                transition={{ duration: 0.3 }}
                className={`rounded-3xl border overflow-hidden shadow-sm ${
                  isOpen
                    ? "bg-white border-green-200 shadow-[0_20px_50px_rgba(34,197,94,0.12)]"
                    : "bg-white/90 border-slate-200"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between gap-4 px-6 md:px-8 py-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center text-lg ${
                        isOpen
                          ? "bg-green-100 text-green-600"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500 mt-1">
                        Click to explore details
                      </p>
                    </div>
                  </div>

                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
                      isOpen
                        ? "bg-green-500 text-white"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {isOpen ? <FaMinus size={14} /> : <FaPlus size={14} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pl-[5.5rem] text-slate-600 leading-8 text-base">
                        {item.desc}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
