import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative bg-slate-800 text-white overflow-hidden min-h-[500px]">
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
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Transforming Infrastructure
            <br />
            Through Innovation
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            Delivering advanced engineering solutions that shape the future of
            construction and infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="text-white px-8 py-3 text-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#1E3D59" }}
            >
              Discover Our Solutions
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white bg-transparent hover:bg-white hover:text-slate-800 px-8 py-3 text-lg"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
