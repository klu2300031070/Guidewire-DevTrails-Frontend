import { motion } from "framer-motion";

const plans = [
  {
    name: "SAFE START",
    subtitle: "Basic Plan",
    highlight: false,
    points: [
      "Premium: ₹30-₹35/week",
      "Limited triggers (rain + heat only)",
      "Lower payout cap (30-40% of weekly income)",
      "Slower payout priority",
      "Best for low-risk zones",
    ],
  },
  {
    name: "SMART COVER",
    subtitle: "Standard Plan",
    highlight: true,
    points: [
      "Premium: ₹40-₹50/week",
      "Most triggers (rain, heat, flood, curfew)",
      "Moderate payout cap (40-50%)",
      "Balanced pricing vs protection",
      "Best for medium-risk workers",
    ],
  },
  {
    name: "FULL SHIELD",
    subtitle: "Premium Plan",
    highlight: false,
    points: [
      "Premium: ₹50-₹60/week",
      "All triggers enabled",
      "High payout cap (50-60%)",
      "Priority payouts",
      "Advanced fraud protection validation",
      "Best for high-risk zones",
    ],
  },
];

export default function PlansSection() {
  return (
    <section className="relative overflow-hidden bg-[#eef4f7] py-24 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_32%)]" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-600">
            Pricing Plans
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">
            Three Plans for Every Risk Profile
          </h2>
          <p className="mt-5 text-lg text-slate-600 max-w-4xl mx-auto leading-8">
            GigShield offers flexible protection with three distinct plans
            designed for different income risks, coverage needs, and budgets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`rounded-[28px] p-8 md:p-10 border shadow-lg ${
                plan.highlight
                  ? "bg-gradient-to-br from-green-500 to-emerald-600 text-white border-green-400 shadow-[0_25px_70px_rgba(34,197,94,0.28)]"
                  : "bg-white text-slate-900 border-slate-200"
              }`}
            >
              <div className="mb-6">
                <h3
                  className={`text-2xl md:text-3xl font-bold ${
                    plan.highlight ? "text-white" : "text-slate-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-lg mt-2 ${
                    plan.highlight ? "text-green-50" : "text-slate-500"
                  }`}
                >
                  {plan.subtitle}
                </p>
              </div>

              <ul className="space-y-4">
                {plan.points.map((point) => (
                  <li
                    key={point}
                    className={`flex gap-3 leading-7 ${
                      plan.highlight ? "text-white/95" : "text-slate-600"
                    }`}
                  >
                    <span
                      className={`mt-2 h-2.5 w-2.5 rounded-full shrink-0 ${
                        plan.highlight ? "bg-white" : "bg-green-500"
                      }`}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full py-3 rounded-xl font-semibold transition ${
                  plan.highlight
                    ? "bg-white text-green-700 hover:bg-green-50"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
