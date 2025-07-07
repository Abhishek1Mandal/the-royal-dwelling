
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "The Future of Sustainable Real Estate Development",
      excerpt: "Exploring how green building technologies are shaping the future of real estate and creating healthier living environments.",
      image: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "March 15, 2024",
      category: "Sustainability",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Smart Home Technology: Enhancing Modern Living",
      excerpt: "How IoT and smart home integration is revolutionizing the way we interact with our living spaces.",
      image: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "March 10, 2024",
      category: "Technology",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Investment Opportunities in Commercial Real Estate",
      excerpt: "Understanding the current market trends and identifying lucrative investment opportunities in commercial properties.",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "March 5, 2024",
      category: "Investment",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Urban Planning and Community Development",
      excerpt: "How thoughtful urban planning creates vibrant communities that enhance quality of life for residents.",
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "February 28, 2024",
      category: "Urban Planning",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Luxury Living: Defining Modern Elegance",
      excerpt: "What defines luxury in today's real estate market and how it's evolving with changing lifestyle preferences.",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "February 20, 2024",
      category: "Luxury",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "The Impact of Location on Property Value",
      excerpt: "Analyzing how proximity to business hubs, transport, and amenities affects real estate investment returns.",
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "February 15, 2024",
      category: "Market Analysis",
      readTime: "4 min read"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Real Estate Insights</h1>
            <p className="text-lg opacity-90">Stay updated with industry trends and expert analysis</p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {articles[0].category}
                  </span>
                  <span className="text-gray-500 text-sm">{articles[0].date}</span>
                  <span className="text-gray-500 text-sm">{articles[0].readTime}</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{articles[0].title}</h3>
                <p className="text-lg text-gray-700 mb-6">{articles[0].excerpt}</p>
                <Button size="lg">Read Full Article</Button>
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.slice(1).map((article) => (
                <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        {article.category}
                      </span>
                      <span className="text-gray-500 text-sm">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">{article.date}</span>
                      <Button variant="outline" size="sm">Read More</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for the latest real estate insights and market trends
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button className="whitespace-nowrap">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
