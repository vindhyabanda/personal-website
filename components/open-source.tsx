import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, GraduationCap } from "lucide-react"

export default function Volunteering() {
  const volunteerRoles = [
    {
      title: "Co-Lead, Women & Allies of Azure Edge ERG",
      organization: "Microsoft",
      description:
        "Leading employee resource group initiatives to promote diversity and inclusion in Azure Edge teams. Organizing mentorship programs, networking events, and professional development opportunities.",
      tags: ["Leadership", "Diversity & Inclusion", "Mentorship", "Community Building"],
      icon: <Users className="h-8 w-8 text-primary" />,
    },
    {
      title: "Program Director",
      organization: "Seattle High School Incubator Program",
      description:
        "Directing an incubator program for aspiring entrepreneurs in Seattle high schools. Mentoring students in business development, product strategy, and entrepreneurial skills.",
      tags: ["Education", "Entrepreneurship", "Mentorship", "Program Management"],
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
    },
    {
      title: "President, Girls Who Code",
      organization: "Purdue University (2021-2022)",
      description:
        "Led the Girls Who Code chapter at Purdue University, organizing coding workshops, tech talks, and career development events to support women in computer science.",
      tags: ["Leadership", "Education", "Women in Tech", "Community"],
      icon: <Heart className="h-8 w-8 text-primary" />,
    },
  ]

  return (
    <div id="volunteering">
      <div className="space-y-12">
        <div className="space-y-4 text-center">
          <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Volunteering & Leadership</h3>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed">
            Community involvement and leadership roles focused on education, diversity, and empowerment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {volunteerRoles.map((role, index) => (
            <div key={index}>
              <Card className="h-full flex flex-col">
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">{role.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{role.title}</h3>
                  <p className="text-sm font-medium text-primary mb-2">{role.organization}</p>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{role.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {role.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-primary/10 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
