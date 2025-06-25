import { motion } from "framer-motion";
const HeroSection = () => {
  const images = [
    "/img/hero_1.png",
    "/img/hero_4.png",
    "/img/hero_2.png",
    "/img/hero_3.png",
  ];
  return (
    <div className="min-h-screen bg-[#0B363C] relative overflow-hidden py-10">
      <img
        src="/img/hero.png"
        alt="hero"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-10 md:gap-16 md:pt-10 px-4 sm:px-10">
        {/* card 1  */}

        <motion.h1
          className="text-3xl md:text-5xl lg:text-7xl font-medium text-white w-full sm:w-[70%]"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          Techfa – Supporting Key Industrial Sectors
        </motion.h1>

        {/* card 2  */}
        <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
          <button className="text-[#0B0F13] rounded-2xl p-3 px-8 bg-[#F5F8F9]">
            Explore Now
          </button>
          <h3 className="text-[#C8FE62] text-xl sm:text-2xl md:text-4xl font-bold">
            + 82 successful <br /> industrial projects.
          </h3>
        </div>
        {/* card 3  */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.7, duration: 1.5 }}
              className={`${index % 2 !== 0 ? "pt-14" : ""}`}
            >
              <img
                src={image}
                alt={`Image ${index}`}
                className="w-full h-[400px] object-cover rounded-md"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
