import BlogSection from "../components/BlogSection";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import OurMvp from "../components/OurMvp";
import OurTeam from "../components/OurTeam";
import TrustedBy from "../components/TrustedBy";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <OurMvp />
        <Features />
        <OurTeam />
        <BlogSection />
        <Footer/>
      </main>
    </div>
  );
};

export default HomePage;
