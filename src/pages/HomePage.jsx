import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero/>
      </main>
    </div>
  );
};

export default HomePage;
