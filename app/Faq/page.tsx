"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const faqs = [
    {
      question: "What is ChatKSU?",
      answer:
        "ChatKSU is an AI-powered smart assistant designed specifically for King Saud University students and faculty. It provides instant answers to questions about courses, schedules, university policies, campus services, and more.",
    },
    {
      question: "How do I access ChatKSU?",
      answer:
        "ChatKSU is available through the university portal, mobile app, and as a standalone web application. You can log in using your KSU credentials.",
    },
    {
      question: "Is ChatKSU available 24/7?",
      answer:
        "Yes, ChatKSU is available 24 hours a day, 7 days a week to assist you with your questions and needs.",
    },
    {
      question: "What kind of questions can ChatKSU answer?",
      answer:
        "ChatKSU can answer questions about course schedules, registration procedures, campus facilities, academic policies, events, faculty information, and much more. It's designed to handle a wide range of university-related inquiries.",
    },
    {
      question: "Is my conversation with ChatKSU private?",
      answer:
        "Yes, your conversations with ChatKSU are private and secure. We follow strict data protection protocols to ensure your information remains confidential.",
    },
    {
      question: "Can ChatKSU help with my research?",
      answer:
        "ChatKSU can provide general guidance on research resources available at KSU, direct you to relevant databases, and help you find faculty experts in your field of interest.",
    },
    {
      question: "What languages does ChatKSU support?",
      answer:
        "Currently, ChatKSU supports both Arabic and English to serve the diverse KSU community.",
    },
    {
      question: "How accurate is the information provided by ChatKSU?",
      answer:
        "ChatKSU is trained on official KSU documentation and is regularly updated to ensure accuracy. However, for critical matters, we recommend verifying information through official university channels.",
    },
  ]

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="w-full py-8 bg-ksu-beige">
        <div className="container px-4 md:px-6 text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-ksu-blue">
            Frequently Asked Questions
          </h1>
          <p className="max-w-xl mx-auto text-ksu-gray text-base">
            Find answers to common questions about ChatKSU and how it can help you at King Saud University.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-8">
        <div className="container px-4 md:px-6">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-4">
                <Search className="text-gray-500 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1"
                />
              </div>

              <Accordion type="single" collapsible className="space-y-1">
                {filteredFaqs.map((faq, index) => (
                  <AccordionItem value={`${index}`} key={index}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
