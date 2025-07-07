"use client";

import { useState, useEffect, useRef } from "react";
import {
  Building,
  Globe,
  Clock,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const stats = [
  {
    icon: <Building className="h-10 w-10 text-blue-600" />,
    value: "150+",
    label: "Global Partners",
  },
  {
    icon: <Globe className="h-10 w-10 text-blue-600" />,
    value: "35+",
    label: "Countries Served",
  },
  {
    icon: <Clock className="h-10 w-10 text-blue-600" />,
    value: "20+",
    label: "Years of Collaboration",
  },
  {
    icon: <Award className="h-10 w-10 text-blue-600" />,
    value: "45+",
    label: "Industry Awards",
  },
];

const sectors = [
  "All Sectors",
  "Construction",
  "Energy",
  "Transportation",
  "Government",
  "Real Estate",
];

const partners = [
  {
    name: "ConstructCorp",
    sector: "Construction",
    initials: "CC",
  },
  {
    name: "EnergyTech Solutions",
    sector: "Energy",
    initials: "ETS",
  },
  {
    name: "InfraBuild",
    sector: "Transportation",
    initials: "IB",
  },
  {
    name: "GovWorks",
    sector: "Government",
    initials: "GW",
  },
  {
    name: "Realty Group",
    sector: "Real Estate",
    initials: "RG",
  },
  {
    name: "BuildFast",
    sector: "Construction",
    initials: "BF",
  },
  {
    name: "PowerGrid Inc.",
    sector: "Energy",
    initials: "PGI",
  },
  {
    name: "State Projects",
    sector: "Government",
    initials: "SP",
  },
  {
    name: "Metro Transit",
    sector: "Transportation",
    initials: "MT",
  },
  {
    name: "Urban Development",
    sector: "Real Estate",
    initials: "UD",
  },
  {
    name: "Smart Energy",
    sector: "Energy",
    initials: "SE",
  },
  {
    name: "City Infrastructure",
    sector: "Government",
    initials: "CI",
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

export default function IndustryLeadersSection() {
  const [selectedSector, setSelectedSector] = useState("All Sectors");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const filteredPartners =
    selectedSector === "All Sectors"
      ? partners
      : partners.filter((partner) => partner.sector === selectedSector);

  const partnersPerView = 4;
  const maxIndex = Math.max(0, filteredPartners.length - partnersPerView);

  // Individual hook calls for each stat
  const stat0Count = useCountUp(150, 2500, inView);
  const stat1Count = useCountUp(35, 2500, inView);
  const stat2Count = useCountUp(20, 2500, inView);
  const stat3Count = useCountUp(45, 2500, inView);

  // Create display values
  const animatedStats = [
    { ...stats[0], displayValue: `${stat0Count}+` },
    { ...stats[1], displayValue: `${stat1Count}+` },
    { ...stats[2], displayValue: `${stat2Count}+` },
    { ...stats[3], displayValue: `${stat3Count}+` },
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

  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedSector]);

  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [maxIndex, isAutoScrolling]);

  const handlePrevious = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const handleNext = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const getSectorColor = (sector: string) => {
    const colors = {
      Construction: "from-orange-500 to-red-500",
      Energy: "from-green-500 to-emerald-500",
      Transportation: "from-blue-500 to-indigo-500",
      Government: "from-purple-500 to-violet-500",
      "Real Estate": "from-pink-500 to-rose-500",
    };
    return (
      colors[sector as keyof typeof colors] || "from-gray-500 to-slate-500"
    );
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 70% 30%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Industry Leaders
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Trusted by global leaders and organizations across multiple
            industries
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {animatedStats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-blue-400 mb-2">
                {stat.displayValue}
              </div>
              <div className="text-gray-400 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Partners Section */}
        <div
          className={`transition-all duration-1000 delay-500 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Our Trusted Partners
          </h3>

          {/* Sector Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {sectors.map((sector) => (
              <button
                key={sector}
                onClick={() => setSelectedSector(sector)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedSector === sector
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105"
                    : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                }`}
              >
                {sector}
              </button>
            ))}
          </div>

          {/* Partners Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div
                ref={carouselRef}
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / partnersPerView)
                  }%)`,
                  width: `${
                    (filteredPartners.length / partnersPerView) * 100
                  }%`,
                }}
                onMouseEnter={() => setIsAutoScrolling(false)}
                onMouseLeave={() => setIsAutoScrolling(true)}
              >
                {filteredPartners.map((partner, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 px-4"
                    style={{ width: `${100 / filteredPartners.length}%` }}
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-32 flex flex-col items-center justify-center group hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-white/20">
                      {/* Logo/Initials Display */}
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${getSectorColor(
                          partner.sector
                        )} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <span className="text-white font-bold text-lg">
                          {partner.initials}
                        </span>
                      </div>

                      {/* Company Name */}
                      <span className="text-gray-300 group-hover:text-white text-sm font-medium text-center transition-colors duration-300">
                        {partner.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            {filteredPartners.length > partnersPerView && (
              <>
                <button
                  onClick={handlePrevious}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                  aria-label="Previous partners"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                  aria-label="Next partners"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Progress Indicators */}
            {maxIndex > 0 && (
              <div className="flex justify-center mt-6 space-x-2">
                {Array.from({ length: maxIndex + 1 }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setCurrentIndex(i);
                      setIsAutoScrolling(false);
                      setTimeout(() => setIsAutoScrolling(true), 5000);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i === currentIndex
                        ? "bg-blue-400 scale-125"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
