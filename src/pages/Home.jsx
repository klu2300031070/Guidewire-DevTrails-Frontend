// Home.jsx
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import heroVideo from "./hero.mp4";
import ParametricSection from "./ParametricSection";
import Accordion from "./Accordion";
import StatsSection from "./StatsSection";
import WhyChooseUs from "./WhyChooseUs";
import WhatUsersSay from "./WhatUsersSay";
import Footer from "./Footer";
import PlansSection from './PlansSection';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 text-gray-900 overflow-hidden relative">

      {/* Navbar */}
      <Navbar />

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

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

      {/* Parametric / Traditional Steps */}
      <Accordion/>
     <StatsSection/>
      {/* FEATURES */}
      <WhyChooseUs/>
      {/* TESTIMONIALS */}
      <ParametricSection />
      <PlansSection/>
      <WhatUsersSay/>
      {/* CTA */}
      <Footer/>
    </div>
  );
}