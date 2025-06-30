import HeroSection from "../components/home/hero-section";
import HomeAbout from "../components/home/home-about";
import HomePartner from "../components/home/home-partner";
// import PressRelease from "../components/home/home-press-release";
import TechfaOffers from "../components/home/techfa-offers";

const Home = () => {
  return (
    <div className="h-full">
      <HeroSection />
      <TechfaOffers />
      <HomeAbout />
      <HomePartner />
      {/* <PressRelease /> */}
    </div>
  );
};

export default Home;
