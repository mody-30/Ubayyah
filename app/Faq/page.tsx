"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      question: "What is Ubayyah?",
      answer:
        "Ubayyah is a smart wristband and data-powered platform that monitors your brain's performance and body health using AI, statistics, and intelligent assistant features.",
    },
    {
      question: "Who can use Ubayyah?",
      answer:
        "Ubayyah is designed for everyone—students, professionals, health-conscious individuals, and anyone who wants to better understand and improve their mental and physical well-being.",
    },
    {
      question: "What does Ubayyah monitor?",
      answer:
        "Ubayyah tracks metrics related to brain activity, stress levels, focus, physical health, and more through integrated smart sensors and analytics.",
    },
    {
      question: "Is Ubayyah easy to use?",
      answer:
        "Yes, Ubayyah is built to be user-friendly. Just wear the wristband, and the platform will automatically collect and visualize your health and performance data.",
    },
    {
      question: "Is my health data safe with Ubayyah?",
      answer:
        "Absolutely. We use strong encryption and privacy protocols to ensure your personal and health data stays secure and confidential.",
    },
    {
      question: "Does Ubayyah support both English and Arabic?",
      answer:
        "Yes, Ubayyah supports both English and Arabic for accessibility across diverse users.",
    },
    {
      question: "Can I share my data with doctors or coaches?",
      answer:
        "Yes, Ubayyah allows you to export or securely share your data insights with healthcare professionals or coaches to support your goals.",
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] bg-[#471b0a] text-[#d19e74]">
      {/* Hero Section */}
      <section className="w-full py-12 bg-[#7a3c1e]">
        <div className="container px-4 md:px-6 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#d19e74]">
            Frequently Asked Questions
          </h1>
          <p className="max-w-xl mx-auto text-[#2f0d00] text-lg">
            Learn more about how Ubayyah empowers you to monitor your brain and body health.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <Card className="max-w-3xl mx-auto bg-[#7a3c1e] border-[#9c6544]">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Search className="text-[#9c6544] w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-[#471b0a] text-[#d19e74] placeholder-[#9c6544] border border-[#9c6544] focus:ring-2 focus:ring-[#d19e74] focus:outline-none"
                />
              </div>

              <Accordion type="single" collapsible className="space-y-2">
                {filteredFaqs.map((faq, index) => (
                  <AccordionItem
                    value={`${index}`}
                    key={index}
                    className="bg-[#471b0a] border border-[#9c6544] rounded-lg"
                  >
                    <AccordionTrigger className="text-left text-[#d19e74] font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-[#9c6544]">
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
  );
}