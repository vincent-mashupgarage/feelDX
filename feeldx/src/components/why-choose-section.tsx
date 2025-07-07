import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Award, Lightbulb, CheckCircle, Users } from "lucide-react";

export default function WhyChooseSection() {
  const features = [
    {
      icon: <Award className="h-12 w-12 text-blue-600" />,
      title: "Industry Expertise",
      description:
        "With over 20 years of experience, our team brings unparalleled knowledge across diverse infrastructure projects.",
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-blue-600" />,
      title: "Innovative Approach",
      description:
        "We leverage cutting-edge technology and methodologies to deliver forward-thinking solutions.",
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-blue-600" />,
      title: "Proven Results",
      description:
        "Our track record demonstrates consistent delivery of high-quality projects on time and within budget.",
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Client-Centered Focus",
      description:
        "We prioritize understanding your unique needs to create tailored solutions that exceed expectations.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose FEELDX
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
