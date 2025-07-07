"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative bg-slate-800 text-white overflow-hidden min-h-screen flex items-center"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/hero-image.png')`,
        }}
      ></div>

      {/* Dark overlay for better text readability */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(17, 24, 39, 0.4)" }}
      ></div>

      {/* Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
        <div
          className={`max-w-4xl transition-all duration-1000 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Transforming Infrastructure
            <br />
            Through Innovation
          </h1>

          <p
            className={`text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed transition-all duration-1000 delay-300 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Delivering advanced engineering solutions that shape the future of
            construction and infrastructure.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              size="lg"
              className="text-white px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
              style={{ backgroundColor: "#1E3D59" }}
              onClick={scrollToServices}
            >
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                Discover Our Solutions
              </span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm"
              onClick={() =>
                document
                  .getElementById("footer-contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <button
          onClick={scrollToServices}
          className="animate-bounce text-white/80 hover:text-white transition-colors duration-200 group"
          aria-label="Scroll to services"
        >
          <ChevronDown className="h-8 w-8 group-hover:scale-110 transition-transform duration-200" />
        </button>
      </div>

      {/* Parallax elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-500"></div>
      </div>
    </section>
  );
}
