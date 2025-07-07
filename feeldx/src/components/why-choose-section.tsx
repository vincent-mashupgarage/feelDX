"use client";

import { useState, useEffect, useRef } from "react";
import { Award, Lightbulb, Target, Users } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Industry Expertise",
    description:
      "Over two decades of proven experience in delivering complex infrastructure projects across diverse sectors worldwide.",
    metric: "20+",
    metricLabel: "Years Experience",
  },
  {
    icon: Lightbulb,
    title: "Innovative Approach",
    description:
      "Cutting-edge methodologies and technologies that revolutionize traditional construction and engineering practices.",
    metric: "150+",
    metricLabel: "Innovations Deployed",
  },
  {
    icon: Target,
    title: "Proven Results",
    description:
      "Consistent delivery of projects on time and within budget, with a track record of exceeding client expectations.",
    metric: "98%",
    metricLabel: "Success Rate",
  },
  {
    icon: Users,
    title: "Client-Centered Focus",
    description:
      "Dedicated partnerships built on trust, transparency, and unwavering commitment to client satisfaction.",
    metric: "500+",
    metricLabel: "Happy Clients",
  },
];

function useCountUp(
  end: number,
  duration: number = 2000,
  start: boolean = false
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, start]);

  return count;
}

export default function WhyChooseSection() {
  const [inView, setInView] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Individual hook calls for each feature
  const feature0Count = useCountUp(20, 2000, inView);
  const feature1Count = useCountUp(150, 2000, inView);
  const feature2Count = useCountUp(98, 2000, inView);
  const feature3Count = useCountUp(500, 2000, inView);

  // Create display values
  const animatedFeatures = [
    { ...features[0], displayMetric: `${feature0Count}+` },
    { ...features[1], displayMetric: `${feature1Count}+` },
    { ...features[2], displayMetric: `${feature2Count}%` },
    { ...features[3], displayMetric: `${feature3Count}+` },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 40% 80%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Why Choose FEELDX
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the difference that expertise, innovation, and dedication
            make in transforming your vision into reality
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {animatedFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-700 ease-out ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`h-full p-8 rounded-2xl transition-all duration-500 transform ${
                    hoveredCard === index
                      ? "bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm scale-105 shadow-2xl border border-blue-400/30"
                      : "bg-white/5 backdrop-blur-sm hover:bg-white/10 border border-white/10"
                  }`}
                >
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
                      hoveredCard === index
                        ? "bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg transform rotate-3"
                        : "bg-gradient-to-br from-gray-700 to-gray-600"
                    }`}
                  >
                    <Icon
                      className={`w-8 h-8 transition-all duration-300 ${
                        hoveredCard === index
                          ? "text-white scale-110"
                          : "text-gray-300"
                      }`}
                    />
                  </div>

                  <div className="mb-4">
                    <div
                      className={`text-3xl font-bold mb-1 transition-colors duration-300 ${
                        hoveredCard === index ? "text-blue-400" : "text-white"
                      }`}
                    >
                      {feature.displayMetric}
                    </div>
                    <div className="text-sm text-gray-400 font-medium">
                      {feature.metricLabel}
                    </div>
                  </div>

                  <h3
                    className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                      hoveredCard === index ? "text-white" : "text-gray-200"
                    }`}
                  >
                    {feature.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed transition-colors duration-300 ${
                      hoveredCard === index ? "text-gray-200" : "text-gray-400"
                    }`}
                  >
                    {feature.description}
                  </p>

                  <div
                    className={`mt-6 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500 ${
                      hoveredCard === index
                        ? "opacity-100 scale-x-100"
                        : "opacity-50 scale-x-75"
                    }`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/2 right-20 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-1000 opacity-60"></div>
        <div className="absolute bottom-20 left-1/3 w-4 h-4 bg-green-400 rounded-full animate-pulse delay-500 opacity-60"></div>
      </div>
    </section>
  );
}
