import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Volunteering from "./open-source"

export default function Projects() {
  const projects = [
    {
      title: "Digital Twin Builder SDK",
      description:
        "Developed an early-access SDK for Microsoft's Digital Twin Builder, enabling rapid prototyping and feedback loops that drove three major product pivots.",
      tags: ["TypeScript", "SDK Development", "Digital Twins", "Product Development"],
      codeLink: "https://github.com/microsoft/digital-twin-builder-sdk",
      liveLink: "https://docs.microsoft.com/azure/digital-twins/",
    },
    {
      title: "Azure IoT Hub Connectivity Solutions",
      description:
        "Built PoCs demonstrating secure 3D asset storage/retrieval on Microsoft Fabric and automated ingestion from NVIDIA Omniverse to Digital Twin Builder.",
      tags: ["Azure IoT", "Microsoft Fabric", "NVIDIA Omniverse", "3D Data Integration"],
      codeLink: null,
      liveLink: "https://azure.microsoft.com/services/iot-hub/",
    },
    {
      title: "Predictive Analytics Solution",
      description:
        "Contributed to developing a demand-forecasting solution leveraging Azure ML and Copilot to analyze historical inventory, transaction, and telemetry data.",
      tags: ["Azure ML", "Copilot", "Predictive Analytics", "Data Science"],
      codeLink: null,
      liveLink: "https://azure.microsoft.com/services/machine-learning/",
    },
    {
      title: "SAME54 Azure Connectivity",
      description:
        "Built a rapid PoC enabling Azure connectivity with the SAME54 development board, unlocking over 1300 use cases and serving as a template for MikroE click boards.",
      tags: ["IoT", "Azure", "Embedded Systems", "Hardware Integration"],
      codeLink: "https://github.com/Azure/azure-iot-sdk-c",
      liveLink: "https://docs.microsoft.com/azure/iot-develop/",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Projects</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Highlights from my work in product development, IoT solutions, and AI-powered platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <Card className="overflow-hidden h-full flex flex-col group hover:shadow-lg transition-all duration-300">
                  <CardContent className="project-content flex-1 flex flex-col p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold flex-1">{project.title}</h3>
                      <div className="flex gap-2 ml-2">
                        {project.codeLink && (
                          <a
                            href={project.codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Github className="h-5 w-5" />
                          </a>
                        )}
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 flex-1">{project.description}</p>
                    <div className="project-tags mt-3">
                      {project.tags.slice(0, 4).map((tag, i) => (
                        <span key={i} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <Volunteering />
          </div>
        </div>
      </div>
    </section>
  )
}
