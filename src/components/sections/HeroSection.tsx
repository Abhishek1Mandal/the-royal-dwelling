import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden font-serif">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/video1.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0A1D37]/70 z-0" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center text-white max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up transition-all duration-1000">
            Luxury Living Redefined
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in-up delay-300 transition-all duration-1000">
            Experience premium residential spaces with world-class amenities
          </p>
          <div className="space-x-4 animate-fade-in-up delay-500 transition-all duration-1000">
            <Button
              size="lg"
              className="bg-[#D4AF37] text-[#0A1D37] hover:bg-white hover:text-[#0A1D37] font-semibold rounded-full px-6 py-3 transition-colors duration-300"
              asChild
            >
              <Link to="/projects">Explore Properties</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A1D37] font-semibold rounded-full px-6 py-3 transition-colors duration-300"
              asChild
            >
              <Link to="/contact">Schedule Visit</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
