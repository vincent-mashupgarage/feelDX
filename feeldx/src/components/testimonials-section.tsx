"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    title: "Director of Infrastructure",
    company: "MetroLink Systems",
    avatar: "",
    rating: 5,
    quote:
      "FEELDX transformed our urban transit project with innovative solutions that exceeded all expectations. Their expertise in sustainable infrastructure is unmatched.",
  },
  {
    name: "Michael Rodriguez",
    title: "Chief Engineer",
    company: "GreenTech Solutions",
    avatar: "",
    rating: 5,
    quote:
      "Working with FEELDX on our renewable energy facility was exceptional. They delivered cutting-edge technology integration that set new industry standards.",
  },
  {
    name: "Dr. Amanda Foster",
    title: "Project Manager",
    company: "Smart Cities Initiative",
    avatar: "",
    rating: 5,
    quote:
      "The team's attention to detail and commitment to excellence made our smart highway system a landmark achievement in intelligent transportation.",
  },
  {
    name: "James Wilson",
    title: "Operations Director",
    company: "BuildForward Corp",
    avatar: "",
    rating: 5,
    quote:
      "FEELDX consistently delivers projects on time and within budget. Their construction management expertise is truly world-class.",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [inView, setInView] = useState(false);
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

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-100 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from industry leaders who have partnered with us to achieve
            extraordinary results
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Display */}
          <div
            className={`transition-all duration-1000 delay-300 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col items-center text-center">
                  <Quote className="w-12 h-12 text-blue-500 mb-6 opacity-50" />

                  <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                    &ldquo;{testimonials[currentIndex].quote}&rdquo;
                  </blockquote>

                  <div className="flex items-center mb-6">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonials[currentIndex].rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center space-x-4">
                    <Avatar className="w-16 h-16 ring-4 ring-blue-100">
                      <AvatarImage
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                      />
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-lg font-semibold">
                        {testimonials[currentIndex].name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="text-left">
                      <h4 className="font-bold text-gray-900 text-lg">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {testimonials[currentIndex].title}
                      </p>
                      <p className="text-blue-600 text-sm font-medium">
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? "w-12 h-3 bg-blue-600 scale-110"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                } rounded-full`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white shadow-lg hover:shadow-xl text-gray-600 hover:text-blue-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110 z-10"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white shadow-lg hover:shadow-xl text-gray-600 hover:text-blue-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110 z-10"
            aria-label="Next testimonial"
          >
            <svg
              className="w-6 h-6"
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

        {/* Client Logos Preview */}
        <div
          className={`mt-16 transition-all duration-1000 delay-500 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-center text-gray-500 mb-8 text-sm uppercase tracking-wider font-medium">
            Trusted by Industry Leaders
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? "opacity-100 scale-110"
                    : "opacity-40 hover:opacity-70"
                }`}
              >
                <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                  <span className="text-gray-600 font-medium text-sm">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
