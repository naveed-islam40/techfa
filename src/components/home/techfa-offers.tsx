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
      <div className="flex justify-center flex-col items-center py-10 space-y-10 pt-16 max-w-7xl mx-auto px-4 sm:px-10">
        {/* top  */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-medium sm:w-[70%] text-center">
          Techfa Offering Tailored Manufacturing Solutions for Every Industry.
        </h1>
        <p className="text-[#0B0F13] font-normal text-lg sm:w-[40%] text-center">
          We are an international company implementing numerous projects
          worldwide
        </p>
        <div className="flex justify-center flex-wrap gap-10">
          {offers.map((card) => Card(card))}
        </div>
      </div>
    </div>
  );
};

export default TechfaOffers;

const Card = (card: any) => {
  return (
    <div className="bg-[#FFFFFF] rounded-[15px] hover:shadow-x-27-22 p-4 gap-4 w-full sm:w-[370px] space-y-10">
      <div className="flex justify-between items-start">
        <img src={card?.icon} alt="" className="w-[30px] sm:w-[50px]" />
        <img src={card?.icon2} alt="" className="w-[30px] sm:w-[50px]" />
      </div>
      <div className="space-y-2">
        <h1 className="text-xl sm:text-2xl font-medium">{card.title}</h1>
        <p className="text-[#0B0F13] text-base">{card.description}</p>
      </div>
    </div>
  );
};
