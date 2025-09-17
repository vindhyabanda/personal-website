import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Zap, Cloud, Users } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Product Innovation",
      description:
        "Driving product development from inception to launch with AI-powered solutions and digital twin technologies",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "AI & ML Enablement",
      description:
        "Leveraging AI-assisted tools, Copilot, and machine learning for product optimization and automation",
    },
    {
      icon: <Cloud className="h-10 w-10 text-primary" />,
      title: "Azure & IoT Expertise",
      description: "Deep experience with Azure IoT Hub, Digital Twin Builder, and Microsoft Fabric integration",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Cross-functional Leadership",
      description:
        "Leading multi-team initiatives and collaborating with global industrial clients and engineering teams",
    },
  ]

  return (
    <div className="w-full bg-muted/30">
      <section id="about" className="py-20 w-full">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Technical Product Manager at Microsoft with expertise in Digital Twin Builder, Azure IoT, and AI-powered
                product development. Computer Science graduate from Purdue University with a passion for innovation and
                technology.
              </p>
            </div>

            <div className="mx-auto max-w-3xl text-center">
              <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                I specialize in driving product innovation from conception to market launch, with deep expertise in AI,
                IoT, and digital twin technologies. At Microsoft, I've led the development of cutting-edge features for
                Digital Twin Builder, collaborated on NVIDIA OpenUSD partnerships, and architected solutions that bridge
                the gap between industrial IoT and advanced analytics. My experience spans across product strategy,
                customer engagement, and technical implementation, with a proven track record of delivering impactful
                solutions for enterprise clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="animate-in">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-2 rounded-full bg-primary/10">{feature.icon}</div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
