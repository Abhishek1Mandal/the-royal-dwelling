import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CountUp from "./CountUp";

const AboutTeaser = () => {
  const [key50, setKey50] = useState(0);
  const [key25, setKey25] = useState(0);

  return (
    <section className="py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-[#0A1D37] font-serif">
              Building Tomorrow's Cities Today
            </h2>
            <p className="text-lg text-[#333]">
              With over two decades of excellence in real estate development, we're committed to creating 
              innovative, modern, and healthier spaces that enhance the way people live and work.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div
                className="text-center"
                onMouseEnter={() => setKey50((prev) => prev + 1)}
              >
                <div className="text-3xl font-serif font-bold text-[#D4AF37]">
                  <CountUp key={key50} from={0} to={50} duration={1.5} />+
                </div>
                <div className="text-[#0A1D37] font-medium">Projects Delivered</div>
              </div>

              <div
                className="text-center lg:text-left lg:ml-6"
                onMouseEnter={() => setKey25((prev) => prev + 1)}
              >
                <div className="text-3xl font-serif font-bold text-[#D4AF37]">
                  <CountUp key={key25} from={0} to={25} duration={1.5} />+
                </div>
                <div className="text-[#0A1D37] font-medium">Awards Won</div>
              </div>
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-4">
              {["LEED Certified", "ISO 9001:2015", "Safety Excellence"].map((item, index) => (
                <div key={index} className="bg-white px-4 py-2 rounded-lg border border-[#D4AF37] shadow-sm">
                  <span className="text-sm font-medium text-[#0A1D37]">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              asChild
              className="bg-[#D4AF37] text-[#0A1D37] hover:bg-[#0A1D37] hover:text-[#D4AF37] rounded-full px-6 py-3 text-sm font-semibold transition"
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=5657&q=80"
              alt="Modern Architecture"
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#0A1D37] text-[#D4AF37] p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-serif font-bold">20+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;
