import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Chatbot from "@/components/chatbot"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vindhya Banda | Technical Product Manager",
  description:
    "Portfolio of Vindhya Banda, a Technical Product Manager at Microsoft specializing in Digital Twin Builder, Azure IoT, and AI-powered product development.",
}

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Chatbot />
    </div>
  )
}
