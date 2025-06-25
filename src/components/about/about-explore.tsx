import { motion } from "framer-motion";

const AboutExpolre = () => {
  return (
    <div className="bg-[#F5F8F9]">
      <div className="max-w-8xl mx-auto px-4 md:px-16">
        <div className="flex justify-center xl:mb-20">
          <button className="bg-[#0B363C] text-[#F5F8F9] px-10 py-3 cursor-pointer">
            Explore Now
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-14 xl:gap-20 xl:py-10 pt-10 lg:pt-20">
          {/* left  */}
          <motion.div
            className="space-y-4 col-span-5"
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
              About us
            </h1>
            <p className="w-fulltext-sm md:text-base xl:text-lg md:pb-10 text-[#2C2E31]">
              Techfa helps organizations of all sizes anticipate, manage and
              avoid risks that endanger their people, their operations and our
              planet. We provide an integrated approach to managing Health,
              Safety and ESG across industries, locations, contractor and
              supplier networks. Techfa helps organizations of all sizes
              anticipate, manage and avoid risks that endanger their people,
              their operations and our planet. We provide an integrated approach
              to managing Health, Safety and ESG across industries, locations,
              contractor and supplier networks.Techfa helps organizations of all
              sizes anticipate, manage and avoid risks that endanger their
              people
            </p>
          </motion.div>
          {/* right  */}
          <motion.div
            className="relative col-span-7"
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <img
              src="/img/explore_about.png"
              alt=""
              className="h-full relative z-10  object-contain"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutExpolre;
