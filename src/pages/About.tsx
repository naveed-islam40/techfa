import AboutCustomerTrust from "../components/about/about-customer";
import AboutExpolre from "../components/about/about-explore";
import AboutHelp from "../components/about/about-help";
import AboutHero from "../components/about/about-hero";
import AboutTechfaHelping from "../components/about/about-techfa-helping";
import AboutVision from "../components/about/about-vision";

const About = () => {
  return (
    <div className="overflow-hidden">
      <AboutHero />
      <AboutTechfaHelping />
      <AboutExpolre />
      <AboutVision />
      <AboutHelp />
      <AboutCustomerTrust />
    </div>
  );
};

export default About;
