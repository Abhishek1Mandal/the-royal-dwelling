import { Link } from "react-router-dom";
import { Facebook, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0A1D37] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              {/* Golden Crown Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#D4AF37"
                className="w-8 h-8"
              >
                <path d="M2 6l3.5 7L9 6l3 6 3-6 3.5 7L22 6v12H2V6zm0 14h20v2H2v-2z" />
              </svg>
              <span className="text-2xl font-bold font-serif text-[#D4AF37]">
                The Royal Dwelling Co.
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              Redefining Real Estate Excellence with innovative design, sustainability, and prime locations.
            </p>
            <div className="flex space-x-4 mt-4">
              <Facebook className="h-5 w-5 text-[#D4AF37] hover:text-white transition-colors cursor-pointer" />
              <Linkedin className="h-5 w-5 text-[#D4AF37] hover:text-white transition-colors cursor-pointer" />
              <Youtube className="h-5 w-5 text-[#D4AF37] hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white font-serif">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block text-gray-300 hover:text-[#D4AF37] transition-colors">About Us</Link>
              <Link to="/projects" className="block text-gray-300 hover:text-[#D4AF37] transition-colors">Projects</Link>
              {/* <Link to="/blog" className="block text-gray-300 hover:text-[#D4AF37] transition-colors">Blog</Link>
              <Link to="/careers" className="block text-gray-300 hover:text-[#D4AF37] transition-colors">Careers</Link> */}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white font-serif">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Residential Properties</li>
              <li>Commercial Spaces</li>
              <li>Investment Opportunities</li>
              <li>Property Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white font-serif">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>homes@TheRoyalDwellingCo.com</li>
              <li>offices@TheRoyalDwellingCo.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Business District, City Center</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#1e2a3b] mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 The Royal Dwelling Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
