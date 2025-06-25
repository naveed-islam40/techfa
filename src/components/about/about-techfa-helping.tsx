import { motion } from "framer-motion";

const AboutTechfaHelping = () => {
  return (
    <div className="bg-[#F5F8F9] py-10">
      <div className="max-w-8xl md:mx-auto px-4 md:px-16 md:  py-5 lg:py-8 space-y-5">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#0B0F13] md:text-center"
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Techfa{" "}
          <span className="text-lg lg:text-3xl font-normal">
            Helping create a safer and more sustainable world
          </span>
        </motion.h1>
        <motion.p
          className="text-sm sm:text-lg text-[#2C2E31]"
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Techfa helps organizations of all sizes anticipate, manage and avoid
          risks that endanger their people, their operations and our planet. We
          provide an integrated approach to managing Health, Safety and ESG
          across industries, locations, contractor and supplier networks. Techfa
          helps organizations of all sizes anticipate, manage and avoid risks
          that endanger their people, their operations and our planet. We
          provide an integrated approach to managing Health, Safety and ESG
          across industries, locations, contractor and supplier networks.Techfa
          helps organizations of all sizes anticipate, manage and avoid risks
          that endanger their people, their operations and our planet. We
          provide an integrated approach to managing Health, Safety and ESG
          across industries, locations, contractor and supplier networks.
        </motion.p>
      </div>
    </div>
  );
};

export default AboutTechfaHelping;
