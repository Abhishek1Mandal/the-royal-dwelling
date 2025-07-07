
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const ProjectDetail = () => {
  const { id } = useParams();

  // This would typically come from an API or database
  const projectData: Record<string, any> = {
    "the-pearl": {
      name: "The Pearl",
      type: "Residential",
      status: "Completed",
      location: "Downtown District",
      price: "Starting from $850,000",
      images: [
        "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      description: "The Pearl represents the pinnacle of luxury living with its 4 BHK Sky Mansions offering breathtaking panoramic city views. Each residence is meticulously designed with premium finishes and world-class amenities.",
      features: ["4 BHK Apartments", "Sky Garden", "Infinity Pool", "Smart Home Technology", "Concierge Service", "Valet Parking"],
      amenities: [
        "Infinity Pool & Deck",
        "State-of-the-art Fitness Center",
        "Sky Garden & Meditation Zone",
        "Children's Play Area",
        "Multi-purpose Community Hall",
        "24/7 Security & CCTV",
        "Power Backup",
        "High-speed Elevators"
      ],
      specifications: {
        "Total Units": "120 Apartments",
        "Building Height": "45 Floors",
        "Apartment Sizes": "2,500 - 4,000 sq ft",
        "Possession": "Ready to Move",
        "Parking": "2-3 Cars per unit"
      },
      highlights: [
        "LEED Gold Certified Green Building",
        "Prime location with easy access to business districts",
        "Proximity to top schools and hospitals",
        "Connected to major highways and metro stations",
        "360-degree city views from upper floors"
      ]
    },
    "galaxy-tower": {
      name: "Galaxy Tower",
      type: "Commercial",
      status: "Completed",
      location: "Business Hub",
      price: "From $45/sq ft",
      images: [
        "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      description: "Galaxy Tower is a Grade A commercial development featuring state-of-the-art office spaces designed for modern businesses. With LEED Gold certification and cutting-edge technology integration.",
      features: ["Grade A Office Spaces", "LEED Gold Certified", "High-Speed Elevators", "24/7 Security", "Smart Building Technology", "Flexible Floor Plans"],
      amenities: [
        "Business Center & Conference Rooms",
        "Food Court & Cafeteria",
        "Fitness Center",
        "Multi-level Parking",
        "Backup Power Systems",
        "High-speed Internet Infrastructure",
        "Reception & Concierge",
        "Security & Access Control"
      ],
      specifications: {
        "Total Floors": "35 Floors",
        "Office Spaces": "500+ Units",
        "Floor Plate": "15,000 - 25,000 sq ft",
        "Ceiling Height": "12 feet",
        "Parking": "1:250 sq ft ratio"
      },
      highlights: [
        "Strategic location in the business district",
        "LEED Gold certification for sustainability",
        "Suitable for startups to large corporations",
        "Advanced fire safety and security systems",
        "Easy connectivity to airports and metro"
      ]
    }
  };

  const project = projectData[id as string];

  if (!project) {
    return (
      <Layout>
        <div className="container mx-auto px-4 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/projects">Back to Projects</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96">
        <img
          src={project.images[0]}
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">{project.name}</h1>
            <p className="text-xl">{project.location}</p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className={`px-4 py-2 rounded-full text-sm font-medium text-white ${
                    project.type === "Residential" ? "bg-green-600" : "bg-blue-600"
                  }`}>
                    {project.type}
                  </span>
                  <span className="px-4 py-2 rounded-full text-sm font-medium bg-gray-600 text-white">
                    {project.status}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Overview</h2>
                <p className="text-lg text-gray-700">{project.description}</p>
              </div>

              {/* Image Gallery */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.images.slice(1).map((image: string, index: number) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${project.name} ${index + 2}`}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.features.map((feature: string) => (
                    <div key={feature} className="bg-gray-100 p-3 rounded-lg text-center">
                      <span className="text-sm font-medium text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Amenities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.amenities.map((amenity: string) => (
                    <div key={amenity} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Highlights</h3>
                <div className="space-y-3">
                  {project.highlights.map((highlight: string) => (
                    <div key={highlight} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Project Information</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-2xl font-bold text-blue-600">{project.price}</span>
                  </div>
                  
                  {Object.entries(project.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-600">{key}:</span>
                      <span className="font-medium text-gray-900">{value as string}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <Button className="w-full" asChild>
                    <Link to="/contact">Schedule a Visit</Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact">Request Information</Link>
                  </Button>
                  <Button variant="outline" className="w-full">
                    Download Brochure
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Contact Information</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>Sales: +1 (555) 123-4567</p>
                    <p>Email: sales@luxerealty.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
