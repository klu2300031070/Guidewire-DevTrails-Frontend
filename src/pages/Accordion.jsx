import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const accordionData = [
  { title: "Expansive Data Infrastructure", desc: "Our data systems allow fast collection and analysis of climate-related information." },
  { title: "AI/ML Underwriter", desc: "Automated underwriting powered by machine learning for accurate risk assessment." },
  { title: "Arbol Platform", desc: "A platform to manage policies, claims, and climate risk insights efficiently." },
  { title: "Flexible Risk Capital", desc: "Dynamic capital allocation to meet diverse risk scenarios." },
  { title: "Customers", desc: "We serve a diverse clientele, providing tailored solutions for climate-related challenges." },
];

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {accordionData.map((item, idx) => (
        <div key={idx} className="border-b">
          <button
            onClick={() => toggle(idx)}
            className="w-full flex justify-between items-center py-4 font-medium text-left text-gray-900 focus:outline-none"
          >
            {item.title}
            {activeIndex === idx ? <FaMinus /> : <FaPlus />}
          </button>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={activeIndex === idx ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden text-gray-700"
          >
            <div className="py-2">{item.desc}</div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}