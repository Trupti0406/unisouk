import FeatureSection from "../components/FeatureSection";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import TrustedBy from "../components/TrustedBy";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero/>
        <TrustedBy/>
        <FeatureSection/>
      </main>
    </div>
  );
};

export default HomePage;
