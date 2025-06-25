import { motion } from "framer-motion";

const AboutVision = () => {
  return (
    <div className="bg-[#F5F8F9] pt-10">
      <div className="max-w-8xl mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:py-10 mx-auto gap-5 lg:gap-14 xl:gap-20">
          {/* left  */}
          <motion.div
            className="col-span-7 relative hidden lg:block"
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <img
              src="/img/explore_about2.png"
              alt=""
              className=" relative z-10  object-contain"
            />
          </motion.div>
          {/* right  */}
          <motion.div
            className="col-span-5 space-y-4 md:pt-10"
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-[44px] font-bold">
              Our Vision and Mission
            </h1>
            <p className="w-full text-sm md:text-base xl:text-lg pb-10 text-[#2C2E31]">
              We help create better workplaces. Keeping people safe, reducing
              risks and simplifying processes through our expert teams and our
              technology. Create great relationships with our customers to
              understand their needs and support them to build strong, resilient
              businesses. We deliver the service and technology which helps them
              create safe and effective workplaces. What we believe… By building
              great relationships with our customers, we understand their needs
              and provide a range of technology solutions, advice and support
              that helps them identify and minimize risks, navigate compliance
              and create better workplaces to keep people safe.
            </p>
          </motion.div>

          <div className="relative block lg:hidden">
            <img
              src="/img/explore_about2.png"
              alt=""
              className=" relative z-10  object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutVision;
