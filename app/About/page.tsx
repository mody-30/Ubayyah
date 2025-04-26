"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <main className="min-h-screen bg-[#E3E0D2] px-8 py-20 text-[#333]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Text Column */}
        <div className="space-y-16">
          {/* Who We Are */}
          <motion.section
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl font-bold text-ksu-blue">Who we are</h1>
            <h2 className="text-xl font-semibold text-[#333]">Chat.KSU</h2>
            <p className="text-lg text-[#555] leading-relaxed">
              is an intelligent platform designed to enhance university life using artificial intelligence.
            </p>
            <p className="text-lg text-[#555] leading-relaxed">
              Our goal is to provide innovative solutions that simplify access to academic and administrative
              information while improving the overall quality of university services.
            </p>
          </motion.section>

          {/* Our Vision */}
          <motion.section
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <h2 className="text-4xl font-bold text-ksu-blue">Our Vision</h2>
            <ul className="list-disc list-inside space-y-4 text-lg text-[#555] leading-relaxed">
              <li>Facilitate access to academic and administrative information.</li>
              <li>Improve campus parking management with smart solutions.</li>
              <li>Promote mental well-being and entertainment through interactive activities.</li>
              <li>Provide organized volunteer opportunities for students.</li>
              <li>Support sustainability by utilizing smart notification systems.</li>
            </ul>
          </motion.section>

          {/* Spacer between Vision and Why Chat.KSU */} 
          <div className="h-8" /> 
          <hr className="my-8 border-t-4 border-ksu-blue/50" />
          
          {/* Why Chat.KSU? */}
          <motion.section
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3 }}
          >
            <h2 className="text-4xl font-bold text-ksu-blue">Why Chat.KSU?</h2>
            <ul className="list-disc list-inside space-y-4 text-lg text-[#555] leading-relaxed">
              <li>
                <span className="font-semibold">Smart Academic Advisor</span> for performance analysis and recommendations.
              </li>
              <li>
                <span className="font-semibold">Interactive Smart Maps</span> to help students navigate the campus easily.
              </li>
              <li>
                <span className="font-semibold">Intelligent Parking Management</span> using smart sensors.
              </li>
              <li>
                <span className="font-semibold">Virtual Psychological Counseling Sessions</span> for student well-being.
              </li>
              <li>
                <span className="font-semibold">Event and Competition Organization</span> to encourage student engagement.
              </li>
              <li>
                <span className="font-semibold">Volunteer Opportunities Platform</span> to connect students with meaningful experiences.
              </li>
            </ul>
          </motion.section>
        </div>

        {/* Right Images */}
        <div className="space-y-8">
          {/* Image 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="w-full"
          >
            <Image
              src="\chatksu_Home.jpg"
              alt="KSU Vision"
              width={800}
              height={1000}
              className="rounded-xl shadow-xl object-cover w-full h-auto"
              priority
            />
          </motion.div>

          {/* Image 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="w-full"
          >
            <Image
              src="\WhatsApp Image 2025-04-22 at 21.15.59_8ef2cbd1.jpg" // replace with your second image path
              alt="Why Chat.KSU?"
              width={800}
              height={1000}
              className="rounded-xl shadow-xl object-cover w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </main>
  )
}
