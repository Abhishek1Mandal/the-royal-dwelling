
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const Careers = () => {
  const openPositions = [
    {
      id: 1,
      title: "Senior Architect",
      department: "Design",
      location: "Head Office",
      type: "Full-time",
      description: "Lead architectural design projects for residential and commercial developments. Must have 5+ years experience in sustainable design.",
      requirements: [
        "Bachelor's degree in Architecture",
        "5+ years of professional experience",
        "Proficiency in AutoCAD, Revit, and 3D modeling software",
        "LEED certification preferred",
        "Strong project management skills"
      ]
    },
    {
      id: 2,
      title: "Project Manager",
      department: "Operations",
      location: "Multiple Sites",
      type: "Full-time",
      description: "Oversee construction projects from planning to completion. Ensure quality, timeline, and budget adherence.",
      requirements: [
        "Bachelor's degree in Civil Engineering or Construction Management",
        "3+ years in project management",
        "PMP certification preferred",
        "Knowledge of construction processes and safety regulations",
        "Excellent communication and leadership skills"
      ]
    },
    {
      id: 3,
      title: "Sales Executive",
      department: "Sales",
      location: "Sales Office",
      type: "Full-time",
      description: "Drive sales for residential and commercial properties. Build relationships with clients and close deals.",
      requirements: [
        "Bachelor's degree in Business or Real Estate",
        "2+ years in real estate sales",
        "Excellent communication and negotiation skills",
        "Real estate license required",
        "Customer-focused approach"
      ]
    },
    {
      id: 4,
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Head Office",
      type: "Full-time",
      description: "Develop and execute marketing campaigns for property launches and brand awareness.",
      requirements: [
        "Bachelor's degree in Marketing or Communications",
        "2+ years in digital marketing",
        "Experience with social media and content marketing",
        "Knowledge of real estate market trends",
        "Creative thinking and analytical skills"
      ]
    },
    {
      id: 5,
      title: "Civil Engineer",
      department: "Engineering",
      location: "Project Sites",
      type: "Full-time",
      description: "Provide technical expertise for construction projects. Ensure structural integrity and compliance with regulations.",
      requirements: [
        "Bachelor's degree in Civil Engineering",
        "2+ years of construction experience",
        "Knowledge of building codes and regulations",
        "AutoCAD and structural analysis software proficiency",
        "Attention to detail and problem-solving skills"
      ]
    },
    {
      id: 6,
      title: "Finance Analyst",
      department: "Finance",
      location: "Head Office",
      type: "Full-time",
      description: "Analyze financial data, prepare reports, and support investment decisions for real estate projects.",
      requirements: [
        "Bachelor's degree in Finance or Accounting",
        "2+ years in financial analysis",
        "Proficiency in Excel and financial modeling",
        "Knowledge of real estate financial metrics",
        "CFA or similar certification preferred"
      ]
    }
  ];

  const benefits = [
    "Competitive salary and performance bonuses",
    "Comprehensive health insurance",
    "Professional development opportunities",
    "Flexible working hours",
    "Employee stock options",
    "Annual company retreats",
    "Modern office facilities",
    "Career advancement programs"
  ];

  const values = [
    {
      title: "Innovation",
      description: "We embrace new technologies and creative solutions to build better communities."
    },
    {
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, from design to delivery."
    },
    {
      title: "Sustainability",
      description: "We're committed to environmentally responsible development practices."
    },
    {
      title: "Integrity",
      description: "We build trust through transparency, honesty, and ethical business practices."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
            <p className="text-lg opacity-90">Build your career with LuxeRealty</p>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At LuxeRealty, we believe our people are our greatest asset. We foster a culture of 
              innovation, collaboration, and continuous learning where every team member can grow 
              and make a meaningful impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-yellow-500 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Employee Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-lg text-gray-600">
              Explore exciting career opportunities and find your perfect role
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position) => (
              <div key={position.id} className="bg-white rounded-lg shadow-lg p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{position.title}</h3>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {position.department}
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {position.type}
                      </span>
                      <span className="text-gray-600 text-sm">📍 {position.location}</span>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{position.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {position.requirements.slice(0, 3).map((req, index) => (
                          <li key={index} className="text-gray-600 text-sm flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                      {position.requirements.length > 3 && (
                        <span className="text-gray-500 text-sm">
                          +{position.requirements.length - 3} more requirements
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-center space-y-3">
                    <Button className="w-full">Apply Now</Button>
                    <Button variant="outline" className="w-full">View Details</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Don't see a position that fits? We're always looking for talented individuals.
            </p>
            <Button variant="outline" size="lg">
              Send Us Your Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-lg text-gray-600">
              Here's what you can expect when you apply to LuxeRealty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Apply Online", description: "Submit your application and resume through our portal" },
              { step: "2", title: "Initial Review", description: "Our HR team reviews your application within 48 hours" },
              { step: "3", title: "Interview Process", description: "Phone/video screening followed by in-person interviews" },
              { step: "4", title: "Welcome Aboard", description: "Receive offer and join our dynamic team" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
