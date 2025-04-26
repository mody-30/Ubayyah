import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Hamad Alsorayia",
      role: "Programmer and project leadar",
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
      image: "\IMG_7893[1].png",
      social: {
        linkedin: "http://linkedin.com/in/meshal-alamri-244532322",
        email: "meshal1amri@gmail.com",
      },
    },
    {
      name: "Dr.Boshra Alarfaj",
      role: "Idea developer",
      bio: "The idea developer holds a Bachelor’s degree in Mathematics, as well as a Master’s and Ph.D. in Statistics. She combines deep expertise in statistical analysis with creative vision, enabling her to develop smart solutions that strengthen the project both scientifically and practically.",
      image: "\download.png",
      social: {
        linkedin: "#",
        email: "email here",
      },
    },
    {
      name: "Ibrahim Alarifi",
      role: "Entrepreneur",
      bio: "Ibrahim Alarifi, a statistics student at King Saud University, leads a team as the entrepreneur behind a platform designed to support students and professors. Driven by a passion for practical solutions, he’s turning challenges in academic life into opportunities for innovation. With a clear vision, he’s building tools that make a real difference on campus.",
      image: "\WhatsApp Image 2025-04-26 at 03.39.57_61e43aa6.jpg?height=400&width=400",
      social: {
        linkedin: "https://www.linkedin.com/in/ibrahim-alarifi-814521349/",
        email: "ibrahimalarifi36@gmail.com",
      },
    },
  ]

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Team</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
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
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-all hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex space-x-2">
                    <Link href={member.social.linkedin} className="text-muted-foreground hover:text-foreground">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </div>
                  <Button variant="outline" size="sm" asChild>
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
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Our Values
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Drives Our Team</h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                Our team is united by a shared set of values that guide everything we do.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <div>
                    <strong>Innovation:</strong> We constantly push boundaries and explore new ideas.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <div>
                    <strong>Collaboration:</strong> We believe the best solutions come from diverse perspectives working
                    together.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <div>
                    <strong>Excellence:</strong> We hold ourselves to the highest standards in everything we do.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <div>
                    <strong>User-Centered:</strong> We put users at the heart of our design and development process.
                  </div>
                </li>
              </ul>
            </div>
            <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Team Collaboration"
                className="w-full h-auto aspect-square rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Join Our Team</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                We're always looking for talented individuals to join our team and help us push the boundaries of
                innovation.
              </p>
            </div>
            <Button asChild size="lg">
              <Link href="/contact">View Open Positions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
