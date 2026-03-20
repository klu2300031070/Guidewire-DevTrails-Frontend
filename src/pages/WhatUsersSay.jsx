import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft, FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Verma",
    role: "Ecommerce Delivery Partner",
    feedback:
      "Heavy rain stopped my deliveries for two days, but GigShield helped me manage my lost income without stress. The support felt reliable when I needed it most.",
  },
  {
    name: "Sandeep Kumar",
    role: "Ecommerce Delivery Partner",
    feedback:
      "What I liked most was how simple the process was. I did not have to deal with complicated claim steps, and the payout support was very quick.",
  },
  {
    name: "Imran Shaik",
    role: "Ecommerce Delivery Partner",
    feedback:
      "For delivery partners like me, missing work means losing weekly earnings. This insurance gave me confidence that weather disruptions would not leave me helpless.",
  },
];

export default function WhatUsersSay() {
  return (
    <section className="bg-[#f8fafc] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-600">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">
            What Users Say
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg">
            Real feedback from ecommerce delivery partners who rely on our
            insurance to protect their income during unexpected disruptions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((user, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-[28px] p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)] border border-slate-100"
            >
              <div className="absolute top-6 right-6 text-green-100 text-3xl">
                <FaQuoteLeft />
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-3xl border-2 border-green-200">
                  <FaUserCircle />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {user.name}
                  </h3>
                  <p className="text-sm text-slate-500">{user.role}</p>
                </div>
              </div>

              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="text-slate-600 leading-7 text-base">
                "{user.feedback}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
