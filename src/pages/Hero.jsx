import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar"; // assuming Navbar is in the same folder
import heroVideo from "./hero.mp4"; // import the video

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 text-gray-900 overflow-hidden relative">

      {/* Navbar */}
      <Navbar />

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center">

        {/* Background Video */}
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-white px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            Protect Your Weekly Income
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
            AI-powered parametric insurance for delivery partners.
            Automatic payouts when disruptions stop your work.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => navigate("/onboarding")}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl shadow-lg"
            >
              Get Started
            </button>

            <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-6">
        {[
          { value: "₹10L+", label: "Income Protected" },
          { value: "500+", label: "Active Workers" },
          { value: "95%", label: "Auto Claims" },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl shadow-md text-center"
          >
            <h2 className="text-3xl font-bold text-blue-600">{item.value}</h2>
            <p className="text-gray-500 mt-2">{item.label}</p>
          </motion.div>
        ))}
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {["Instant Payouts", "AI Risk Engine", "Weekly Pricing"].map(
            (title, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-2xl shadow-md"
              >
                <h3 className="font-semibold mb-2 text-blue-600">{title}</h3>
                <p className="text-gray-600 text-sm">
                  Smart automation ensures seamless protection and payouts.
                </p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-12">What Users Say</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Saved my weekly income during heavy rains.",
              "Best insurance experience ever.",
              "Instant payouts really work.",
            ].map((text, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-md"
              >
                <p className="text-gray-600">"{text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 text-center">
        <h2 className="text-3xl font-bold">Ready to Protect Your Income?</h2>

        <button
          onClick={() => navigate("/onboarding")}
          className="mt-6 bg-white text-black px-8 py-3 rounded-xl shadow-lg"
        >
          Get Started
        </button>
      </section>
    </div>
  );
}