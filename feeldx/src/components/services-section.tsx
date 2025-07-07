import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, BarChart3, Monitor, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Settings className="h-12 w-12 text-blue-600" />,
      title: "Engineering",
      description:
        "Comprehensive engineering services spanning civil, structural, mechanical, and electrical disciplines with a focus on sustainable and innovative solutions.",
      link: "#",
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-blue-600" />,
      title: "Construction Management",
      description:
        "End-to-end project management services ensuring timely delivery, quality control, and cost-effectiveness throughout the construction lifecycle.",
      link: "#",
    },
    {
      icon: <Monitor className="h-12 w-12 text-blue-600" />,
      title: "Technology Integration",
      description:
        "Cutting-edge technology solutions including BIM, IoT implementation, and digital twin creation to optimize infrastructure performance and maintenance.",
      link: "#",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-blue-200"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                <Button
                  variant="ghost"
                  className="text-blue-600 hover:text-blue-700 p-0 h-auto font-medium group"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
