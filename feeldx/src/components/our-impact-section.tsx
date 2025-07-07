import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function OurImpactSection() {
  const projects = [
    {
      title: "Urban Transit Hub",
      location: "Downtown Metro",
      description:
        "A state-of-the-art transportation facility enhancing the daily commute for thousands of passengers while reducing environmental impact.",
      image: "/assets/urban-image.png",
      link: "#",
    },
    {
      title: "Renewable Energy Plant",
      location: "Green Valley",
      description:
        "Sustainable solar energy infrastructure project providing clean power for over 50,000 homes and reducing carbon emissions.",
      image: "/assets/energy-plant-image.png",
      link: "#",
    },
    {
      title: "Smart Highway System",
      location: "Tech Corridor",
      description:
        "Intelligent transportation infrastructure with IoT sensors and real-time monitoring for enhanced safety and efficiency.",
      image: "/assets/highway-system-image.png",
      link: "#",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <div className="w-24 h-1 bg-blue-600"></div>
          </div>
          <Button
            variant="ghost"
            className="text-blue-600 hover:text-blue-700 font-medium group hidden md:flex"
          >
            View All Projects
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Project Image */}
              <div className="h-48 relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${project.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-200">{project.location}</p>
                </div>
              </div>

              <CardContent className="p-6">
                <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </CardDescription>
                <Button
                  variant="ghost"
                  className="text-blue-600 hover:text-blue-700 p-0 h-auto font-medium group"
                >
                  View Project
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile View All Projects Button */}
        <div className="text-center mt-8 md:hidden">
          <Button
            variant="ghost"
            className="text-blue-600 hover:text-blue-700 font-medium group"
          >
            View All Projects
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
