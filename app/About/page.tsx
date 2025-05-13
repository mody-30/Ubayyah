"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="min-h-screen bg-[#7a3c1e] px-8 py-20 text-[#d19e74]"> {/* Background and text colors updated */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-16 items-center text-center">
        {/* Who We Are */}
        <div className="space-y-16">
          <motion.section
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl font-extrabold text-[#9c6544]">Who We Are</h1> {/* Accent color */}
            <h2 className="text-xl font-semibold text-[#7a3c1e]">Ubayyah</h2> {/* Secondary accent */}
            <p className="text-lg text-[#d19e74] leading-relaxed">
              Ubayyah is a smart wristband and data-powered platform that monitors your brain's performance and body health using AI, intelligent assistants, and statistical insights.
            </p>
            <p className="text-lg text-[#d19e74] leading-relaxed">
              We are dedicated to helping people better understand themselves through technology—empowering individuals to make informed, health-conscious, and productive choices.
            </p>
          </motion.section>

          {/* Our Vision */}
          <motion.section
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <h2 className="text-4xl font-extrabold text-[#9c6544]">Our Vision</h2> {/* Accent color */}
            <ul className="list-disc list-inside space-y-4 text-lg text-[#d19e74] leading-relaxed">
              <li>Transform how people track and interpret their mental and physical health.</li>
              <li>Bridge human intuition with smart data insights for everyday well-being.</li>
              <li>Empower users with AI-driven recommendations and health analytics.</li>
              <li>Support emotional balance, focus, and mental performance through innovation.</li>
              <li>Promote inclusive, localized technology with cultural awareness.</li>
            </ul>
          </motion.section>

          {/* Spacer and Divider */}
          <div className="h-8" />
          <hr className="my-8 border-t-4 border-[#7a3c1e]" /> {/* Divider color updated */}

          {/* Why Ubayyah? */}
          <motion.section
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3 }}
          >
            <h2 className="text-4xl font-extrabold text-[#9c6544]">Why Ubayyah?</h2> {/* Accent color */}
            <ul className="list-disc list-inside space-y-4 text-lg text-[#d19e74] leading-relaxed">
              <li>
                <span className="font-semibold text-[#9c6544]">Brain & Body Insights</span> through advanced biometric and cognitive tracking.
              </li>
              <li>
                <span className="font-semibold text-[#9c6544]">AI-Powered Feedback</span> to help you adapt, grow, and thrive.
              </li>
              <li>
                <span className="font-semibold text-[#9c6544]">Personalized Dashboards</span> to visualize stress, focus, and energy patterns.
              </li>
              <li>
                <span className="font-semibold text-[#9c6544]">Well-being Assistant</span> to support your mental health and lifestyle goals.
              </li>
              <li>
                <span className="font-semibold text-[#9c6544]">Built for All</span> with bilingual (Arabic-English) support and intuitive design.
              </li>
            </ul>
          </motion.section>
        </div>
      </div>
    </main>
  );
}