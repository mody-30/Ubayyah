"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle,
  MessageSquare,
  Search,
  Lightbulb,
} from "lucide-react";

const features = [
  {
    icon: <MessageSquare className="h-6 w-6 text-[#9c6544]" />, // Brown
    title: "Live Data",
    desc: "Real-time brain & health monitoring",
    text: "Connect via Bluetooth with smartwatches or sensors to track sleep, heartbeat, and activity instantly.",
  },
  {
    icon: <Search className="h-6 w-6 text-[#9c6544]" />, // Brown
    title: "AI Analysis",
    desc: "Smart pattern recognition",
    text: "Analyze your health data using AI to get insights, tips, and track improvement over time.",
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-[#9c6544]" />, // Brown
    title: "Daily Brain Boost",
    desc: "Mental growth & stimulation",
    text: "Get daily brain training puzzles, knowledge tips, and personalized suggestions to enhance cognition.",
  },
];

const benefits = [
  "Track movement, sleep, and heartbeat instantly",
  "Receive smart recommendations based on your stats",
  "Enhance brain performance with daily mental training",
  "Stay connected through a sleek, interactive mobile app",
];

export default function Home() {
  return (
    <main className="flex flex-col min-h-[calc(100vh-4rem)] bg-[#471b0a] text-[#d19e74]">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#7a3c1e]"> {/* Brown */}
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            >
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-[#d19e74]"> {/* Light Brown */}
                Ubayyah: Smart Sport Health Tracker
              </h1>
              <p className="max-w-[600px] text-[#2f0d00] md:text-xl"> {/* Dark Brown */}
                Monitor your brain's performance and body health using smart devices connected via Bluetooth & IoT.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#9c6544] to-[#7a3c1e] hover:from-[#7a3c1e] hover:to-[#9c6544] text-white shadow-lg hover:shadow-xl border-2 border-[#d19e74] hover:border-[#7a3c1e] rounded-lg"
                >
                  <Link href="/About">About Ubayyah</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, delay: 0.5, ease: "easeOut" }}
              className="mx-auto w-full"
            >
              <Image
                src="\WhatsApp Image 2025-05-11 at 02.17.36_1cc82424.jpg"
                width={1024}
                height={1536}
                alt="Ubayyah Smart Assistant"
                className="w-full h-auto rounded-xl object-cover shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <hr className="my-8 border-t-4 border-[#9c6544]" /> {/* Brown */}

      {/* Features Section */}
      <motion.section
        className="w-full py-12 md:py-24 lg:py-32 bg-[#471b0a]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3, ease: "easeOut" }}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#7a3c1e] px-3 py-1 text-sm text-white">
                Features
              </div>
              <h2 className="text-4xl font-extrabold tracking-tight text-[#d19e74]"> {/* Light Brown */}
                Why Ubayyah Stands Out
              </h2>
              <p className="max-w-[900px] text-[#9c6544] md:text-xl"> {/* Brown */}
                Track, analyze, and optimize your mental and physical performance with AI-powered health monitoring.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.2, ease: "easeOut" }}
                className="h-full"
              >
                <Card className="bg-[#7a3c1e] border-[#9c6544] h-full min-h-[125px] flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                  <CardHeader className="pb-2">
                    {item.icon}
                    <CardTitle className="mt-2 text-[#d19e74]">{item.title}</CardTitle> {/* Light Brown */}
                    <CardDescription className="text-[#9c6544]">{item.desc}</CardDescription> {/* Brown */}
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-[#2f0d00]">{item.text}</p> {/* Dark Brown */}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <hr className="my-8 border-t-4 border-[#9c6544]" /> {/* Brown */}

      {/* About Section */}
      <motion.section
        className="w-full py-12 md:py-24 lg:py-32 bg-[#7a3c1e]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3, ease: "easeOut" }}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="inline-block rounded-lg bg-[#9c6544] px-3 py-1 text-sm text-white">
              Project Vision
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-[#d19e74]"> {/* Light Brown */}
              Built for Athletes & Thinkers
            </h2>
            <p className="text-[#2f0d00] md:text-xl max-w-[700px]"> {/* Dark Brown */}
              Ubayyah helps you balance physical activity and mental sharpness with real-time data and intelligent suggestions.
            </p>
            <ul className="grid gap-2 text-[#2f0d00]"> {/* Dark Brown */}
              {benefits.map((txt, idx) => (
                <li key={idx} className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#9c6544]" /> {/* Brown */}
                  <span>{txt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="w-full py-12 md:py-24 lg:py-32 bg-[#471b0a]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-4xl font-extrabold tracking-tight text-[#d19e74]"> {/* Light Brown */}
                Ready to Boost Your Performance?
              </h2>
              <p className="max-w-[600px] text-[#9c6544] md:text-xl"> {/* Brown */}
                Start tracking your mental and physical health with Ubayyah today.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#9c6544] to-[#7a3c1e] hover:from-[#7a3c1e] hover:to-[#9c6544] text-white shadow-lg hover:shadow-xl"
              >
                <Link href="/About">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}