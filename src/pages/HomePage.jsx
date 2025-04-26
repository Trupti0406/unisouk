import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import OurMvp from "../components/OurMvp";
import TrustedBy from "../components/TrustedBy";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero/>
        <TrustedBy/>
        <OurMvp/>
      </main>
    </div>
  );
};

export default HomePage;
