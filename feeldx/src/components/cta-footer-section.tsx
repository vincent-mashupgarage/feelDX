"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Send,
  CheckCircle,
} from "lucide-react";

export default function CtaFooterSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", company: "", message: "" });

    // Reset success state after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="footer-contact"
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.4) 0%, transparent 50%),
                           radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.4) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Ready to Transform Your Vision?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Partner with FEELDX to bring your infrastructure projects to life
              with innovative solutions, expert engineering, and unmatched
              dedication to excellence.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div
              className={`transition-all duration-1000 delay-300 ease-out ${
                inView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Send className="w-6 h-6 mr-3 text-blue-400" />
                  Start Your Project
                </h3>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-gray-300">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
                          required
                        />
                      </div>
                      <div>
                        <Input
                          name="email"
                          type="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
                          required
                        />
                      </div>
                    </div>

                    <Input
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
                    />

                    <Textarea
                      name="message"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20 resize-none"
                      required
                    />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          Send Message
                          <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                        </div>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div
              className={`transition-all duration-1000 delay-500 ease-out ${
                inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Get In Touch
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    Ready to discuss your next infrastructure project? Our team
                    of experts is here to help you turn your vision into reality
                    with innovative solutions and proven expertise.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="bg-blue-500/20 p-3 rounded-lg group-hover:bg-blue-500/30 transition-colors duration-300">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        Email Us
                      </h4>
                      <p className="text-gray-300">contact@feeldx.com</p>
                      <p className="text-gray-400 text-sm">
                        We&apos;ll respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="bg-green-500/20 p-3 rounded-lg group-hover:bg-green-500/30 transition-colors duration-300">
                      <Phone className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Call Us</h4>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                      <p className="text-gray-400 text-sm">
                        Mon-Fri, 9AM-6PM EST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="bg-purple-500/20 p-3 rounded-lg group-hover:bg-purple-500/30 transition-colors duration-300">
                      <MapPin className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        Visit Us
                      </h4>
                      <p className="text-gray-300">
                        123 Innovation Drive
                        <br />
                        Tech City, TC 12345
                      </p>
                      <p className="text-gray-400 text-sm">
                        By appointment only
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h4 className="font-semibold text-white mb-3">
                    Why Choose FEELDX?
                  </h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      20+ years of industry expertise
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      98% project success rate
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      Award-winning innovation
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      Global reach, local expertise
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">FEELDX</h3>
              <p className="text-gray-400 text-sm">
                Transforming Infrastructure Through Innovation
              </p>
            </div>

            <div className="flex items-center space-x-8">
              <button
                onClick={scrollToTop}
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Back to Top ↑
              </button>
              <p className="text-gray-400 text-sm">
                © 2024 FEELDX. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
