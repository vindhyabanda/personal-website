import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Skills from "./skills-content"

export default function Experience() {
  const experiences = [
    {
      title: "Technical Product Manager",
      company: "Microsoft",
      period: "Mar 2023 - Present",
      location: "Redmond, Washington, USA",
      achievements: [
        "Drove product development from inception to launch for Microsoft Fabric - Digital Twin Builder",
        "Shaped and pitched first product vision statement to customers, directly influencing MVP scope and strategy",
        "Architected and delivered Ontology Management and Import Ontology features, enabling customers to bring in ontologies (WoT, OPC UA, and DTDL formats)",
        "Collaborated with UX team to design wireframes and validate usability through targeted studies",
        "Leveraged AI-assisted tools to reduce UX design and dev cycle from 2 weeks to 3 days",
        "Coded and tested an early-access SDK that drove three product pivots and led to AI Agent for Ontology Management being added to roadmap",
        "Developing new OpenUSD 3D data standard for industrial digital twin scenarios with NVIDIA partnership",
        "Built PoCs demonstrating secure 3D asset storage/retrieval on Microsoft Fabric and automated ingestion from NVIDIA Omniverse",
        "Awarded the Azure E&P Impact Award for exemplary performance in driving cross-org innovation",
        "Leading strategy to improve revenue margins for Azure IoT Hub by enriching data egress formats",
        "Contributed to Predictive Analytics demand-forecasting solution leveraging Azure ML and Copilot",
      ],
    },
    {
      title: "Program Manager Intern",
      company: "Microsoft",
      period: "Jun 2022 - Aug 2022",
      location: "Redmond, Washington, USA",
      achievements: [
        "Built PoCs powering real-time Fabric digital twin hydration with IoT data",
        "Developed rapid PoC enabling Azure connectivity with SAME54 development board, unlocking 1300+ use cases",
        "Wrote models for telemetry parsing and published device driver code for secure MCU-Azure communication",
        "Revised customer onboarding guides for NVIDIA Jetson Nano's and Azure Percept's Vision AI",
        "Collaborated with external stakeholders to identify 6 potential international customers for MCU Security",
      ],
    },
    {
      title: "Software Development Intern",
      company: "Amazon",
      period: "Sep 2021 - Dec 2021",
      location: "Seattle, Washington, USA",
      achievements: [
        "Improved the Rules Management System to store DragonGlass rules and associated metadata in serializable format",
        "Developed adapter for serializing/deserializing entries when interacting with the client",
        "Collaborated with AWS CodeGuru Reviewer team to build requirements for designing service front end",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "Cisco",
      period: "Jun 2021 - Aug 2021",
      location: "San Jose, California, USA",
      achievements: [
        "Developed SDK for Nexus Dashboard Orchestrator (NDO) essential for streamlining automation and integration",
        "Drove stakeholder communication to address product gaps and guide service through production readiness",
        "SDK was positioned for use by major clients, including The Bosch Group",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional journey in product management and software development
            </p>
          </div>

          <div className="space-y-8 mt-12">
            {experiences.map((experience, index) => (
              <div key={index} className="timeline-item">
                <Card className="border-l-4 border-l-primary transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{experience.title}</h3>
                        <p className="text-muted-foreground">{experience.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0 flex flex-col md:items-end">
                        <Badge variant="outline" className="mb-1 md:mb-0">
                          {experience.period}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{experience.location}</span>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="mt-20" id="skills">
            <Skills />
          </div>
        </div>
      </div>
    </section>
  )
}
