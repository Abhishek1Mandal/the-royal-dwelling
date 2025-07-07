const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content:
        "LuxeRealty delivered beyond our expectations. Our new home in The Pearl is absolutely stunning, and the attention to detail is remarkable.",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=D4AF37&color=fff&size=128",


    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      content:
        "Galaxy Tower has transformed our business operations. The modern infrastructure and strategic location have significantly boosted our productivity.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Emily Rodriguez",
      role: "Real Estate Investor",
      content:
        "The ROI on my investment with LuxeRealty has exceeded projections. Their market knowledge and quality construction make them my preferred partner.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
  ];

  return (
    <section className="py-20 bg-[#fdfcf9]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-[#0A1D37] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-[#333] max-w-xl mx-auto">
            Hear from satisfied customers who have experienced excellence with LuxeRealty.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Header */}
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#D4AF37] mr-4"
                />
                <div>
                  <h4 className="text-[#0A1D37] font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 italic">{testimonial.role}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-[#D4AF37] text-lg">★</span>
                ))}
              </div>

              {/* Content */}
              <p className="text-[#0A1D37] italic leading-relaxed">
                “{testimonial.content}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
