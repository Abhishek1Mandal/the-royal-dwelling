import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, Building2, Briefcase, CalendarDays } from "lucide-react";

const QuickLinks = () => {
  const links = [
    {
      title: "Residential Properties",
      description: "Discover luxury apartments, villas, and gated communities",
      icon: <Home className="w-10 h-10 text-[#D4AF37]" />,
      link: "/projects?type=residential"
    },
    {
      title: "Commercial Spaces",
      description: "Find premium office spaces and retail properties",
      icon: <Building2 className="w-10 h-10 text-[#D4AF37]" />,
      link: "/projects?type=commercial"
    },
    {
      title: "Investment Opportunities",
      description: "Explore high-ROI real estate investment options",
      icon: <Briefcase className="w-10 h-10 text-[#D4AF37]" />,
      link: "/contact"
    },
    {
      title: "Schedule a Visit",
      description: "Book a personalized tour of our properties",
      icon: <CalendarDays className="w-10 h-10 text-[#D4AF37]" />,
      link: "/contact"
    }
  ];

  return (
    <section className="py-20 bg-[#fdfcf9]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-serif text-[#0A1D37] mb-4">How Can We Help You?</h2>
          <p className="text-lg text-[#333]">
            Choose from our range of services to find your perfect property solution.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#f1e9d7] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#0A1D37] mb-2">{item.title}</h3>

              {/* Description */}
              <p className="text-sm text-[#333] mb-4">{item.description}</p>

              {/* Button */}
              <Button
                asChild
                className="w-full bg-[#D4AF37] text-[#0A1D37] font-semibold hover:bg-[#0A1D37] hover:text-[#D4AF37] rounded-full transition-colors duration-300"
              >
                <Link to={item.link}>Learn More</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
