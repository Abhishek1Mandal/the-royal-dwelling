
import Layout from "@/components/Layout";
import HeroSection from "@/components/sections/HeroSection";
import AboutTeaser from "@/components/sections/AboutTeaser";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Testimonials from "@/components/sections/Testimonials";
import QuickLinks from "@/components/sections/QuickLinks";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutTeaser />
      <FeaturedProjects />
      <Testimonials />
      <QuickLinks />
    </Layout>
  );
};

export default Index;
