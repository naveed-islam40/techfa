import CircleCard from "./circle-card-mobile";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-10 py-10 flex flex-col pt-20">
        {/* top  */}
        <div className="flex justify-center items-center space-y-6 flex-col ">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-medium sm:w-[70%] text-center">
            Techfa is Your Trusted Partner in Industrial Growth.
          </h1>
          <p className="text-[#0B0F13] font-normal text-lg sm:w-[60%] text-center">
            +20 Years of experience in providing raw materials, industrial
            machinery and increasing productivity in manufacturing industries
          </p>
        </div>
        {/* circles  */}
        <div className="pt-20">
          <div className="relative w-full max-w-[700px] aspect-square mx-auto hidden sm:block">
            <img
              src="public/svg/dashed.svg"
              className="w-full absolute  to-0 left-0"
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
                  <div className={`text-lg sm:text-2xl font-bold`}>
                    {circle.label}
                  </div>
                  <div className={`text-sm sm:text-lg font-medium`}>
                    {circle.title}
                  </div>
                  <div className={`text-xs sm:text-sm ${circle.px}`}>
                    {circle.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="block sm:hidden mt-10 space-y-6">
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
