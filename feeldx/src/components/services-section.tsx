"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Settings, Building, Zap } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Engineering",
    description:
      "Comprehensive engineering solutions for complex infrastructure projects with cutting-edge technology and proven methodologies.",
    features: ["Structural Design", "Project Planning", "Quality Assurance"],
  },
  {
    icon: Building,
    title: "Construction Management",
    description:
      "Expert project management ensuring timely delivery, cost efficiency, and exceptional quality standards throughout the construction process.",
    features: ["Timeline Management", "Cost Control", "Safety Protocols"],
  },
  {
    icon: Zap,
    title: "Technology Integration",
    description:
      "Advanced technology solutions that streamline operations, enhance productivity, and drive innovation in modern construction practices.",
    features: ["Digital Solutions", "Automation", "Smart Systems"],
  },
];

export default function ServicesSection() {
  const [inView, setInView] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Delivering innovative solutions across engineering, construction,
            and technology integration
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className={`group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                } ${
                  hoveredCard === index
                    ? "ring-2 ring-blue-500 ring-opacity-50"
                    : ""
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                  background:
                    hoveredCard === index
                      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                      : "white",
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-8 h-full flex flex-col">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300 ${
                      hoveredCard === index
                        ? "bg-white/20 backdrop-blur-sm"
                        : "bg-gradient-to-br from-blue-100 to-indigo-100"
                    }`}
                  >
                    <Icon
                      className={`w-8 h-8 transition-all duration-300 ${
                        hoveredCard === index ? "text-white" : "text-blue-600"
                      }`}
                    />
                  </div>

                  <h3
                    className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                      hoveredCard === index ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-base leading-relaxed mb-6 flex-grow transition-colors duration-300 ${
                      hoveredCard === index ? "text-white/90" : "text-gray-600"
                    }`}
                  >
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className={`flex items-center text-sm transition-all duration-300 ${
                          hoveredCard === index
                            ? "text-white/80"
                            : "text-gray-500"
                        }`}
                      >
                        <div
                          className={`w-2 h-2 rounded-full mr-3 transition-colors duration-300 ${
                            hoveredCard === index
                              ? "bg-white/60"
                              : "bg-blue-500"
                          }`}
                        ></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200/20">
                    <span
                      className={`text-sm font-semibold transition-colors duration-300 group-hover:translate-x-1 inline-block ${
                        hoveredCard === index ? "text-white" : "text-blue-600"
                      }`}
                    >
                      Learn More →
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
