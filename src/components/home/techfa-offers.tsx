import { motion } from "framer-motion";

const offers = [
  {
    icon: "/svg/offer_1.svg",
    icon2: "/svg/arrow_outward.svg",
    title: "Used Machines",
    description:
      "Provides an extensive inventory of second-hand industrial machines for buyers and sellers.",
  },
  {
    icon: "/svg/offer_2.svg",
    icon2: "/svg/arrow_outward.svg",
    title: "Sugar Industries",
    description:
      " Produced all kinds of machines for the sugar and beet sugar industries.",
  },
  {
    icon: "/svg/offer_3.svg",
    icon2: "/svg/arrow_outward.svg",
    title: "Petrochemical",
    description:
      "Petrochemical and chemical sector for technical knowledge and industrial machinery",
  },
  {
    icon: "/svg/offer_4.svg",
    icon2: "/svg/arrow_outward.svg",
    title: "Packing",
    description:
      "Lorem ipsum dolor sit amet, consdter adipis elit, sed do eiusmod tempor incididu",
  },
  {
    icon: "/svg/offer_5.svg",
    icon2: "/svg/arrow_outward.svg",
    title: "Photovoltaic Projects",
    description:
      "Lorem ipsum dolor sit amet, consdter adipis elit, sed do eiusmod tempor incididu",
  },
  {
    icon: "/svg/offer_6.svg",
    icon2: "/svg/arrow_outward.svg",
    title: "Industrial Services",
    description:
      "Lorem ipsum dolor sit amet, consdter adipis elit, sed do eiusmod tempor incididu",
  },
];

const TechfaOffers = () => {
  return (
    <div className="bg-[#f5f8f9]">
      <div className="flex justify-center flex-col items-center py-10  lg:pt-20 max-w-7xl mx-auto px-4 sm:px-10">
        {/* top  */}
        <motion.h1
          className="text-2xl md:text-5xl font-medium lg:w-[80%] text-center"
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Techfa Offering Tailored Manufacturing Solutions for Every Industry.
        </motion.h1>
        <motion.p
          className="text-[#0B0F13] font-normal text-base md:text-xl md:w-[80%] lg:w-[40%] text-center mt-3 md:mt-5"
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          We are an international company implementing numerous projects
          worldwide
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-8 mt-10">
          {offers.map((card, index) => Card(card, index))}
        </div>
      </div>
    </div>
  );
};

export default TechfaOffers;

const Card = (card: any, index: number) => {
  return (
    <motion.div
      className="bg-[#FFFFFF] rounded-[15px] hover:shadow-x-27-22 p-6 gap-4 w-full space-y-10"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="flex justify-between items-start">
        <img src={card?.icon} alt="" className="w-[50px]" />
        <img src={card?.icon2} alt="" className="w-[25px] mt-3" />
      </div>
      <div className="space-y-2">
        <h1 className="text-xl sm:text-2xl font-medium">{card.title}</h1>
        <p className="text-[#0B0F13] text-base">{card.description}</p>
      </div>
    </motion.div>
  );
};
