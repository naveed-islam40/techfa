import CircleCard from "./circle-card-mobile";
// import { motion } from "framer-motion";

const HomePartner = () => {
  const circles = [
    {
      label: "18+",
      title: "Sugar Industries",
      position: "top-center",
      size: "2xl",
      bgColor: "bg-[#0B363C]",
      textColor: "text-white",
      px: "px-10",
      headerSize: "text-4xl",
      desc: "Lorem ipsum dolor sit amet, consdter adipis elit,",
    },
    {
      label: "10+",
      title: "Packagings",
      position: "top-right",
      size: "xl",
      bgColor: "bg-[#A1B5C5]",
      textColor: "text-black",
      textSize: "text-lg",
      headerSize: "text-4xl",
      px: "px-5",
      desc: "Lorem ipsum dolor sit amet, consdter adipis elit,",
    },
    {
      label: "12+",
      title: "Petrochemical",
      position: "right-center",
      size: "xl",
      bgColor: "bg-white",
      textColor: "text-black",
      textSize: "text-lg",
      headerSize: "text-4xl",
      px: "px-5",
      desc: "Lorem ipsum dolor sit amet, consdter adipis elit,",
    },
    {
      label: "14+",
      title: "Cement Projects",
      position: "middle-left",
      size: "xl",
      bgColor: "bg-[#C8FE62]",
      textColor: "text-black",
      textSize: "text-lg",
      headerSize: "text-4xl",
      px: "px-5",
      desc: "Lorem ipsum dolor sit amet, consdter adipis elit,",
    },
    {
      label: "26+",
      title: "Industrial Consulting",
      position: "bottom-right",
      size: "xl",
      bgColor: "bg-[#124058]",
      textColor: "text-white",
      textSize: "text-lg",
      headerSize: "text-4xl",
      px: "px-5",
      desc: "Lorem ipsum dolor sit amet, consdter adipis elit,",
    },
  ];

  const positionClasses: Record<string, string> = {
    "top-right": "-right-0 -top-10",
    "middle-right": "right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
    "right-center": "right-10 top-[30%]",
    "middle-left": "left-[20%] bottom-10",
    "bottom-right": " bottom-0 right-0",
  };

  const sizeClasses: Record<string, string> = {
    xl: "w-48 h-48 md:w-60 md:h-60",
    "2xl": "w-60 h-60 md:w-80 md:h-80",
  };

  return (
    <div className="bg-[#F5F8F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 py-10 flex flex-col pt-5 md:pt-10">
        {/* top  */}
        <div className="flex justify-center items-center flex-col ">
          <h1
            className="text-2xl md:text-5xl font-medium lg:w-[70%] text-center"
            // initial={{ opacity: 0, y: 100 }}
            // transition={{ duration: 1, delay: 0.5 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true, amount: 0.2 }}
          >
            Techfa is Your Trusted Partner in Industrial Growth.
          </h1>
          <p
            className="text-[#0B0F13] font-normal text-base md:text-xl lg:w-[60%] text-center mt-3 md:mt-5"
            // initial={{ opacity: 0, y: 100 }}
            // transition={{ duration: 1, delay: 0.5 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true, amount: 0.2 }}
          >
            +20 Years of experience in providing raw materials, industrial
            machinery and increasing productivity in manufacturing industries
          </p>
        </div>
        {/* circles  */}
        <div className="pt-10 md:pt-20">
          <div className="relative w-full max-w-[700px] aspect-square mx-auto hidden sm:block">
            <img
              src="/svg/dashed.svg"
              className="w-full absolute  to-0 left-0 animate-spin-slow "
            />

            {circles.map((circle, i) => (
              <div
                key={i}
                className={`absolute ${
                  positionClasses[circle.position]
                } transform`}
              >
                <div
                  className={`${sizeClasses[circle.size]} rounded-full ${
                    circle.bgColor
                  } ${
                    circle.textColor
                  } flex flex-col items-center justify-center text-center p-4 shadow-lg space-y-3`}
                >
                  <div className={`text-lg sm:text-3xl font-bold`}>
                    {circle.label}
                  </div>
                  <div className={`text-sm md:text-2xl font-medium`}>
                    {circle.title}
                  </div>
                  {/* <div className={`text-xs sm:text-sm ${circle.px}`}>
                    {circle.desc}
                  </div> */}
                </div>
              </div>
            ))}
          </div>
          <div className="block sm:hidden md:mt-10 space-y-6">
            {circles.map((circle, i) => (
              <CircleCard
                key={i}
                label={circle.label}
                title={circle.title}
                desc={circle.desc}
                bgColor={circle.bgColor}
                textColor={circle.textColor}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePartner;
