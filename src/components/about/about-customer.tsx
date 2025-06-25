import { motion } from "framer-motion";
const AboutCustomerTrust = () => {
  return (
    <div className="relative">
      <img
        src="/img/customer-ai.png"
        alt=""
        className="md:h-[700px] w-full object-cover object-top"
      />

      <div className="absolute top-[50%] md:top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
        <motion.div
          className="bg-[#D9D9D9] opacity-80 px-5 md:max-w-3xl mx-auto p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileInView={{ opacity: 0.8, y: 0 }}
        >
          <h1 className="text-xl sm:text-3xl font-bold mb-4 text-center    ">
            Customer Trust
          </h1>
          <p className="text-gray-800 leading-relaxed text-xs sm:text-sm">
            Customers trust in Techfa has been formed for several reasons. The
            experienced team of Techfa, with deep technical knowledge and
            knowledge of the latest technologies in the world, has the ability
            to provide optimal solutions in accordance with the needs of
            customers. At Techfa, we not only care about providing quality
            products, but we also help customers make the best choice by
            providing technical and expert advice.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutCustomerTrust;
