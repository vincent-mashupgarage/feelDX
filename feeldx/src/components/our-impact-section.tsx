"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { MapPin, Calendar, Users } from "lucide-react";

const projects = [
  {
    title: "Urban Redevelopment Initiative",
    description:
      "Comprehensive urban planning and infrastructure development project transforming city landscapes with sustainable solutions.",
    image: "/assets/urban-image.png",
    location: "Downtown Metro",
    year: "2023",
    team: "45 Engineers",
    impact: "50,000 residents benefited",
  },
  {
    title: "Renewable Energy Plant",
    description:
      "State-of-the-art renewable energy facility designed to power thousands of homes with clean, sustainable energy.",
    image: "/assets/energy-plant-image.png",
    location: "Green Valley",
    year: "2022",
    team: "32 Specialists",
    impact: "25MW clean energy",
  },
  {
    title: "Smart Highway System",
    description:
      "Advanced transportation infrastructure featuring intelligent traffic management and sustainable design principles.",
    image: "/assets/highway-system-image.png",
    location: "Metro Corridor",
    year: "2023",
    team: "60 Professionals",
    impact: "200km highway network",
  },
];

export default function OurImpactSection() {
  const [inView, setInView] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState<Record<number, boolean>>({});
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

  const handleImageLoad = (index: number) => {
    setImageLoaded((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 lg:py-32 bg-gradient-to-br from-white via-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Impact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Showcasing transformative projects that demonstrate our commitment
            to excellence and innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-700 ease-out transform hover:-translate-y-2 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${
                hoveredCard === index
                  ? "ring-2 ring-blue-500 ring-opacity-30"
                  : ""
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-64 overflow-hidden">
                {!imageLoaded[index] && (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"></div>
                )}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={`object-cover transition-all duration-700 ease-out ${
                    hoveredCard === index ? "scale-110" : "scale-100"
                  } ${imageLoaded[index] ? "opacity-100" : "opacity-0"}`}
                  onLoad={() => handleImageLoad(index)}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-300 ${
                    hoveredCard === index ? "opacity-100" : "opacity-70"
                  }`}
                ></div>

                {/* Project Stats Overlay */}
                <div
                  className={`absolute top-4 right-4 transition-all duration-300 ${
                    hoveredCard === index
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  }`}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                    <div className="text-xs font-semibold text-gray-800">
                      {project.year}
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3
                  className={`text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 ${
                    hoveredCard === index ? "text-blue-600" : ""
                  }`}
                >
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                    <span>{project.location}</span>
                  </div>

                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2 text-green-500" />
                    <span>{project.team}</span>
                  </div>

                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2 text-purple-500" />
                    <span>{project.impact}</span>
                  </div>
                </div>

                {/* Progress Bar Animation */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out ${
                        inView && hoveredCard === index ? "w-full" : "w-0"
                      }`}
                      style={{ transitionDelay: `${index * 200 + 500}ms` }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-gray-500">
                      Project Completion
                    </span>
                    <span
                      className={`text-xs font-semibold transition-colors duration-300 ${
                        hoveredCard === index
                          ? "text-blue-600"
                          : "text-gray-700"
                      }`}
                    >
                      100%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let&apos;s collaborate to bring your vision to life with our
              proven expertise and innovative solutions.
            </p>
            <button
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={() =>
                document
                  .getElementById("footer-contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get In Touch
              <svg
                className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
