"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Hamad Alsorayia",
      role: "Programmer and Project Leader",
      bio: "Developer and programmer of the “Chat.KSU” platform, specializing in Statistics. I combine statistical analysis and programming to build smart solutions enhancing the student experience at King Saud University, integrating AI and data to create innovative tools and improve university services.",
      image: "\IMG_7883[1].jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/hamad-alsorayia-%D8%AD%D9%85%D8%AF-%D8%A7%D9%84%D8%B3%D8%B1%D9%8A%D9%91%D8%B9-19304b221/",
        email: "Hamad.alsorayi@gmail.com",
      },
    },
    {
      name: "Meshal Alamri",
      role: "UX/UI Designer",
      bio: "Meshal is a Statistics student at KSU. He is the web designer of our team, responsible for creating a clean and user-friendly interface. With a background in Statistics and computer skills, he blends design with functionality to enhance the user experience.",
      image: "\IMG_7893[1].jpg",
      social: {
        linkedin: "http://linkedin.com/in/meshal-alamri-244532322",
        email: "meshal1amri@gmail.com",
      },
    },
    {
      name: "Aaid Alqahtani",
      role: "EntrepreneurInvestment analyst and Consulting Advisor",
      bio: "Dr. Aaid Algahtani is a statistician, data analyst, and academic with expertise in statistical analysis, predictive modeling, multivariate data analysis, and data visualization. His work focuses on addressing complex challenges—including data angst—through applications in image analysis and medical imaging. He currently serves as an Assistant Professor of Statistics at King Saud University in Riyadh, Saudi Arabia.",
      image: "\WhatsApp Image 2025-05-07 at 15.27.42_d6b82bbf.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/dr-aaid-algahtani-670190210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ",
        email: "email here",
      },
    },
  ];

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] bg-[#471b0a] text-[#d19e74]">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#7a3c1e]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-[#d19e74]">
                Meet Our Team
              </h1>
              <p className="max-w-[700px] text-[#2f0d00]">
                The talented individuals behind our innovative project, bringing diverse skills and expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-[#7a3c1e] text-[#d19e74] border border-[#9c6544] transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="aspect-square relative">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105 rounded-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-[#9c6544]">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[#2f0d00]">{member.bio}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex space-x-2">
                    <Link href={member.social.linkedin} className="text-[#9c6544] hover:text-[#d19e74]">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </div>
                  <Button
                    className="bg-[#9c6544] hover:bg-[#7a3c1e] text-white transition-all duration-300 shadow-md hover:shadow-lg"
                    size="sm"
                    asChild
                  >
                    <Link href={`mailto:${member.social.email}`}>
                      <Mail className="mr-2 h-4 w-4" />
                      Contact
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#7a3c1e]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-[#9c6544] px-3 py-1 text-sm text-white">
                Our Values
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#d19e74]">
                What Drives Our Team
              </h2>
              <p className="text-[#2f0d00]">
                Our team is united by a shared set of values that guide everything we do.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[#9c6544]" />
                  <div>
                    <strong>Innovation:</strong> We constantly push boundaries and explore new ideas.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[#9c6544]" />
                  <div>
                    <strong>Collaboration:</strong> We believe the best solutions come from diverse perspectives working
                    together.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[#9c6544]" />
                  <div>
                    <strong>Excellence:</strong> We hold ourselves to the highest standards in everything we do.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[#9c6544]" />
                  <div>
                    <strong>User-Centered:</strong> We put users at the heart of our design and development process.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}