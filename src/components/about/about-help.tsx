import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const servicesData = [
  {
    id: 1,
    title: "Engineering consulting",
    icon: "/svg/help_1.svg",
    description:
      "connect clients, contractors and suppliers to improve safety, sustainability and governance across multiple trades and industries.",
  },
  {
    id: 2,
    title: "Installation of production lines",
    icon: "/svg/help_2.svg",
    description:
      "connect clients, contractors and suppliers to improve safety, sustainability and governance across multiple trades and industries.",
  },
  {
    id: 3,
    title: "Inspection and logistics",
    icon: "/svg/help_3.svg",
    description:
      "connect clients, contractors and suppliers to improve safety, sustainability and governance across multiple trades and industries.",
  },
];

export default function AboutHelp() {
  return (
    <section className="bg-[#F5F8F9]">
      <div className="max-w-8xl mx-auto px-4 md:px-16 lg:py-20 py-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 lg:mb-6"
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            How we help our customers
          </motion.h2>
          <motion.p
            className="text-gray-600 text-sm sm:text-lg max-w-4xl mx-auto "
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            We operate in the UK through two divisions managing solutions that
            best meet the needs of small and medium size businesses and
            Enterprise clients. In North America, our team's goal is to help
            create safer workplaces and protect five million workers from
            workplace incidents by 2025.
          </motion.p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
          {servicesData.map((service, index) => {
            return <ServiceCard service={service} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
}

const ServiceCard = ({ service }: any) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="bg-[#0B363C] text-white p-8 transition-colors duration-300 flex justify-center flex-col items-center"
    >
      <div className="flex justify-center">
        <img
          src={service.icon}
          className="w-20 sm:w-40 h-20 sm:h-40 text-white"
          alt={service.title}
        />
      </div>

      <h3 className="text-lg sm:text-xl font-semibold mb-4">{service.title}</h3>

      <p className="text-gray-300 text-center text-xs sm:text-sm">
        {service.description}
      </p>
    </motion.div>
  );
};
