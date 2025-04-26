"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ArrowRight,
  CheckCircle,
  MessageSquare,
  Search,
  Lightbulb,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-ksu-beige">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            >
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-ksu-blue">
                ChatKSU Your Smart Assistant for King Saud University
              </h1>
              <p className="max-w-[600px] text-ksu-gray md:text-xl">
                ChatKSU combines AI technology with university knowledge to provide instant answers and assistance to students and faculty.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-ksu-blue hover:bg-ksu-blue/90 transform hover:scale-105 transition-all duration-300">
                  <Link href="/About">About ChatKSU</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-ksu-blue text-ksu-blue hover:bg-ksu-blue/10 transform hover:scale-105 transition-all duration-300"
                >
                  <Link href="/ChatKSU">Try ChatKSU</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, delay: 0.5, ease: "easeOut" }}
              className="mx-auto w-full max-w-[500px] lg:max-w-none"
            >
              <Image
                src="/4c4ca3721857ffc8f92164e250a9016d-Picsart-AiImageEnhancer.jpg"
                width={550}
                height={550}
                alt="ChatKSU Assistant"
                className="w-full h-auto aspect-square rounded-xl object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <hr className="my-8 border-t-4 border-ksu-blue/50" />

      {/* Key Features */}
      <motion.section
        className="w-full py-12 md:py-24 lg:py-32"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3, ease: "easeOut" }}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-ksu-blue px-3 py-1 text-sm text-white">Key Features</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-ksu-black">
                What Makes ChatKSU Special
              </h2>
              <p className="max-w-[900px] text-ksu-gray md:text-xl/relaxed">
                ChatKSU combines several innovative technologies to create a seamless and powerful assistant for the university community.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-stretch gap-6 py-12 lg:grid-cols-3">
  {[{
    icon: <MessageSquare className="h-6 w-6 text-ksu-blue" />,
    title: "Instant Answers",
    desc: "Get immediate responses to your university questions",
    text: "ChatKSU provides instant answers about courses, schedules, policies, and campus services, saving you time and frustration."
  }, {
    icon: <Search className="h-6 w-6 text-ksu-blue" />,
    title: "Smart Search",
    desc: "Find university resources with natural language",
    text: "Ask questions in your own words and get directed to the exact resources, documents, and information you need."
  }, {
    icon: <Lightbulb className="h-6 w-6 text-ksu-blue" />,
    title: "Smart Assistant",
    desc: "AI-powered support for students and educators",
    text: "Get personalized academic help, productivity tools, and expert answers tailored for college students and university doctors. From organizing tasks to clarifying complex topics, your AI assistant is here to help."
  }].map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: i * 0.2, ease: "easeOut" }}
      className="h-full"
    >
      <Card className="bg-white border-ksu-gray/20 h-full min-h-[125px] flex flex-col justify-between transition duration-300">
        <CardHeader className="pb-2">
          {item.icon}
          <CardTitle className="mt-2">{item.title}</CardTitle>
          <CardDescription>{item.desc}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-ksu-gray">{item.text}</p>
        </CardContent>
      </Card>
    </motion.div>
  ))}
</div>

        </div>
      </motion.section>

      <hr className="my-8 border-t-4 border-ksu-blue/50" />

      {/* Project Overview */}
<motion.section
  className="w-full py-12 md:py-24 lg:py-32 bg-ksu-gray/10"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.3, ease: "easeOut" }}
>
  <div className="container px-4 md:px-6">
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
      <div className="space-y-4">
        <div className="inline-block rounded-lg bg-ksu-blue px-3 py-1 text-sm text-white">About ChatKSU</div>
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-ksu-black">
          Enhancing the University Experience
        </h2>
        <p className="text-ksu-gray md:text-xl/relaxed">
          ChatKSU addresses critical challenges faced by students and faculty by providing instant access to
          accurate university information.
        </p>
        <ul className="grid gap-2">
          {[
            "Reduces time spent searching for information by 80%",
            "Available 24/7 for assistance anytime, anywhere",
            "Improves student satisfaction with university services",
            "Provides AI-powered support for students and educators"
          ].map((txt, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-ksu-blue" />
              <span>{txt}</span>
            </li>
          ))}
        </ul>
        <div className="flex">
          <Button
            asChild
            variant="outline"
            className="gap-1 border-ksu-blue text-ksu-blue hover:bg-ksu-blue/10 transform hover:scale-105 transition-all duration-300"
          >
            <Link href="/About">
              Learn more about ChatKSU
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src="/1689065559350.jpg"
          width={550}
          height={550}
          alt="ChatKSU Overview"
          className="w-full h-auto aspect-square rounded-xl object-cover"
        />
      </motion.div>
    </div>
  </div>
</motion.section>

{/* CTA Section */}
<motion.section
  className="w-full py-12 md:py-24 lg:py-32"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1.4, ease: "easeOut" }}
>
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-ksu-black">
          Ready to Try ChatKSU?
        </h2>
        <p className="max-w-[600px] text-ksu-gray md:text-xl/relaxed">
          Discover how ChatKSU can enhance your university experience and help you succeed at King Saud University.
        </p>
      </div>
      <div className="flex flex-col gap-2 min-[400px]:flex-row">
        <Button
          asChild
          size="lg"
          className="bg-ksu-blue hover:bg-ksu-blue/90 transform hover:scale-105 transition-all duration-300"
        >
          <Link href="/ChatKSU">Try ChatKSU</Link>
        </Button>
        <Button
          variant="outline"
          size="lg"
          asChild
          className="border-ksu-blue text-ksu-blue hover:bg-ksu-blue/10 transform hover:scale-105 transition-all duration-300"
        >
          <Link href="/About">About ChatKSU</Link>
        </Button>
      </div>
    </div>
  </div>
</motion.section>
</div>
)
}


