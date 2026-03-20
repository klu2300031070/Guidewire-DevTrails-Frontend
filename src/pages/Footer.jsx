// Footer.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendPolicy = async (e) => {
    e.preventDefault();

    if (!email) {
      setStatus("Please enter your email.");
      return;
    }

    try {
      setLoading(true);
      setStatus("");

      const res = await fetch("/api/send-policy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to send policy.");
      }

      setStatus("Policy sent successfully to your email.");
      setEmail("");
    } catch (error) {
      setStatus(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-[#0f1833] text-white pt-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[36px] p-8 md:p-14 mb-20 bg-gradient-to-r from-[#f8f8f2] via-[#dff7da] to-[#aaf0b6]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.28),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_30%)]" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase bg-green-100 text-green-700 px-4 py-2 rounded-full">
                Insurance Policy
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mt-5 leading-tight">
                Get your policy directly in your inbox
              </h2>

              <p className="text-[#334155] text-lg mt-5 max-w-xl leading-8">
                Enter your email and we will send your insurance policy details
                so you can review your coverage anytime.
              </p>
            </div>

            <div>
              <form
                onSubmit={handleSendPolicy}
                className="bg-white/55 backdrop-blur-md rounded-full p-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shadow-[0_20px_60px_rgba(15,23,42,0.15)]"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent px-6 py-4 text-[#0f172a] placeholder:text-slate-500 outline-none rounded-full"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-green-400 hover:bg-green-500 text-[#0f172a] font-semibold px-8 py-4 rounded-full flex items-center justify-center gap-3 transition disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send"}
                  <FaPaperPlane />
                </button>
              </form>

              {status && (
                <p className="mt-4 text-sm text-[#0f172a] font-medium">
                  {status}
                </p>
              )}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14">
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-bold">GigShield</h3>
            <p className="text-slate-300 mt-4 leading-7">
              Protecting ecommerce delivery partners with smart, fast, and
              reliable income insurance.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Solutions</h4>
            <ul className="space-y-3 text-slate-300">
              <li>Income Protection</li>
              <li>Weather Coverage</li>
              <li>Accident Support</li>
              <li>AI Risk Pricing</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-slate-300">
              <li>About Us</li>
              <li>Why Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3 text-slate-300">
              <li>Policy Details</li>
              <li>Claims Help</li>
              <li>FAQs</li>
              <li>Support Center</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-11 h-11 rounded-full border border-green-400 text-green-300 flex items-center justify-center hover:bg-green-400 hover:text-[#0f1833] transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full border border-green-400 text-green-300 flex items-center justify-center hover:bg-green-400 hover:text-[#0f1833] transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full border border-green-400 text-green-300 flex items-center justify-center hover:bg-green-400 hover:text-[#0f1833] transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full border border-green-400 text-green-300 flex items-center justify-center hover:bg-green-400 hover:text-[#0f1833] transition"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-slate-400 text-sm">
          © 2026 GigShield. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
