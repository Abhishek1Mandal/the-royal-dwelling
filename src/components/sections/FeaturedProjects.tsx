import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeaturedProjects = () => {
  const projects = [
    {
      id: "the-pearl",
      name: "The Pearl",
      type: "Residential",
      location: "Downtown District",
      video: "/video2.mp4",
      description:
        "Luxury 4 BHK Sky Mansions with panoramic city views and world-class amenities.",
      features: ["4 BHK Apartments", "Sky Garden", "Infinity Pool", "Smart Home"]
    },
    {
      id: "the-regent",
      name: "The Regent",
      type: "Residential",
      location: "Tech Corridor",
      video: "/video3.mp4",
      description:
        "Premium 3 BHK apartments designed for modern living with sustainable features.",
      features: ["3 BHK Apartments", "Green Building", "Fitness Center", "Children's Play Area"]
    },
    {
      id: "galaxy-tower",
      name: "Galaxy Tower",
      type: "Commercial",
      location: "Business Hub",
      video: "/video4.mp4",
      description:
        "Grade A office spaces with LEED Gold certification and cutting-edge technology.",
      features: ["Grade A Offices", "LEED Gold", "High-Speed Elevators", "24/7 Security"]
    }
  ];

  return (
    <section className="py-20 bg-[#f9f9f9]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0A1D37] font-serif mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover our flagship developments that showcase our commitment to excellence, 
            innovation, and sustainable living.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Video */}
              <div className="relative overflow-hidden rounded-t-xl">
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#D4AF37] text-[#0A1D37] px-3 py-1 rounded-full text-sm font-semibold shadow">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-[#0A1D37]">{project.name}</h3>
                  <p className="text-sm text-gray-600 italic">{project.location}</p>
                </div>

                <p className="text-gray-700 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="bg-[#f4f1e6] text-[#0A1D37] px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button
                  asChild
                  className="w-full bg-[#D4AF37] text-[#0A1D37] hover:bg-[#0A1D37] hover:text-[#D4AF37] rounded-full transition-colors duration-300 font-semibold"
                >
                  <Link to={`/projects/${project.id}`}>View Details</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-[#0A1D37] text-[#0A1D37] hover:bg-[#0A1D37] hover:text-[#D4AF37] font-semibold rounded-full"
            asChild
          >
            <Link to="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
