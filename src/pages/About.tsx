import Layout from "@/components/Layout";
import BlurText from "@/components/BlurText";
import { FaAward, FaCertificate, FaMedal, FaTrophy } from "react-icons/fa";

const About = () => {
  const achievements = [
    {
      icon: <FaAward size={36} />,
      title: "LEED Gold Certification",
      description: "Sustainable construction practices",
    },
    {
      icon: <FaCertificate size={36} />,
      title: "Safety Excellence Award",
      description: "Zero accident construction sites",
    },
    {
      icon: <FaMedal size={36} />,
      title: "Architectural Excellence",
      description: "Innovation in design and execution",
    },
    {
      icon: <FaTrophy size={36} />,
      title: "Customer Choice Award",
      description: "Highest customer satisfaction ratings",
    },
  ];

  const team = [
    {
      name: "John Stevens",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      bio: "20+ years in real estate development and urban planning"
    },
    {
  name: "Sarah Martinez",
  role: "Chief Technology Officer",
  image: "https://randomuser.me/api/portraits/women/44.jpg",
  bio: "Expert in sustainable architecture and green building technologies"
},

    {
      name: "David Kim",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      bio: "Specializes in project management and quality assurance"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 text-white bg-black overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          crossOrigin="anonymous"
          src="/luxury.mp4"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <BlurText
              text="About LuxeRealty"
              delay={200}
              animateBy="words"
              direction="top"
              className="text-6xl font-extrabold text-[#ffffff] tracking-wide font-serif mb-6"
            />
            <p className="text-xl">Building Tomorrow's Cities Today</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white text-black">
  <div className="container mx-auto px-4 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Text Content */}
      <div>
        <h2 className="text-4xl font-extrabold text-[#000000] mb-6 tracking-wide font-serif">
          Our Mission
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          To provide innovative, modern, and healthier spaces that enhance the way people live,
          work, and connect with their communities. We are committed to creating sustainable
          developments that contribute to vibrant, modern cities of tomorrow.
        </p>
        <div className="space-y-4">
          {[
            "Trust and transparency in every interaction",
            "Customer-centricity in design and service",
            "Sustainability and environmental responsibility",
          ].map((point, idx) => (
            <div key={idx} className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-[#D4AF37] rounded-full mt-1 flex-shrink-0" />
              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Video Box (Balanced Brightness) */}
      <div className="group relative overflow-hidden rounded-2xl border border-[#D4AF37]/30 h-80 md:h-[380px] lg:h-[420px] shadow-2xl">
        <video
          className="absolute inset-0 w-full h-full object-cover brightness-[0.75] group-hover:brightness-[0.65] transition duration-700"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/luxury2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional subtle overlay to soften even more */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-700" />

        <div className="absolute bottom-4 left-4 bg-[#D4AF37] text-black px-3 py-1 rounded-md text-sm font-semibold shadow-lg">
          Luxe Living
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Achievements Section */}
      <section className="py-20 bg-[#D4AF37] text-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-black">Awards & Certifications</h2>
            <p className="text-lg">
              Recognition for our commitment to excellence and innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white text-black p-6 rounded-lg shadow-lg text-center border border-black/10 transform transition duration-300 hover:scale-105 hover:shadow-md"
              >
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center text-[#D4AF37]">
                  {achievement.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                <p className="text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
     <section className="py-20 bg-white text-black">
  <div className="container mx-auto px-4 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-[#000000] mb-4">Leadership Team</h2>
      <p className="text-lg">Meet the visionaries driving our success</p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
      {team.map((member, index) => (
        <div
          key={index}
          className="bg-white text-center rounded-2xl shadow-2xl hover:shadow-[0_10px_30px_rgba(212,175,55,0.5)] p-6 transition-transform duration-300 transform hover:scale-105 w-full max-w-xs"
        >
          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#D4AF37] shadow-lg">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "https://via.placeholder.com/150?text=No+Image";
              }}
            />
          </div>
          <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
          <p className="text-[#D4AF37] font-medium mb-2">{member.role}</p>
          <p className="text-sm text-gray-600">{member.bio}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Technology Section */}
   <section className="py-20 bg-[#ffffff] text-black">
  <div className="container mx-auto px-4 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* Left Image (Indian residential plot) */}
     <div className="group relative overflow-hidden rounded-lg border-4 border-transparent hover:border-[#D4AF37] transition-all duration-500 hover:scale-105 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.4)]">
  <img
    src="/luxury3.jpg"
    alt="Indian Residential Plot Development"
    className="w-full h-96 object-cover rounded-lg transition-transform duration-500 ease-in-out"
  />
</div>
      {/* Right Side Content */}
      <div>
        <h2 className="text-4xl font-bold mb-6">Innovation & Sustainability</h2>
        <p className="text-lg mb-6">
          We pioneer smart, eco‑conscious residential plot developments tailored for India's vision of sustainable living that connect communities and preserve nature.
        </p>

        <div className="space-y-5">
          {[
            {
              title: "Smart Plot Planning",
              desc: "Orientation‑aware plots with optimal sun exposure and rainwater harvesting layout.",
            },
            {
              title: "Eco‑Green Corridors",
              desc: "Integrated sewage, green buffer zones and native-tree landscaping.",
            },
            {
              title: "Solar‑Ready Infrastructure",
              desc: "Pre‑wired road lights and homes, encouraging solar panel adoption.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-xl border border-black/20 shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#D4AF37] hover:text-black"
            >
              <h4 className="text-xl font-semibold text-[#24272b] mb-2 transition-colors duration-300 group-hover:text-black">
                {item.title}
              </h4>
              <p className="text-sm text-gray-700 transition-colors duration-300 group-hover:text-black">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>

    </Layout>
  );
};

export default About;
