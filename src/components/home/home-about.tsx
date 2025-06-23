import { ArrowRight } from "lucide-react";

const HomeAbout = () => {
  return (
    <div className="bg-[#F5F8F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 relative">
        <img
          src="/img/about.png"
          className="w-full h-[350px] sm:h-full object-cover"
        />
        <div className="absolute top-0 left-0 px-4 sm:px-10 w-full flex flex-col justify-between h-full">
          <div className="flex flex-col sm:flex-row justify-between p-5 sm:p-10 items-start gap-5">
            <h1 className="text-xl md:text-3xl lg:text-5xl font-normal text-[#0B363C] lg:w-[50%]">
              Precision Built. Unbreakable Quality.
            </h1>
            <button className="bg-[#0B363C] text-[#F5F8F9] px-8 py-3 cursor-pointer shrink-0">
              About us
            </button>
          </div>
          <div className="p-5 sm:p-10 pb-28 flex gap-5 items-center">
            <ArrowRight className="bg-white p-2 shrink-0" size={40} />
            <h1 className="text-[#FFFFFF] text-sm md:text-3xl">
              Learn more about our process
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
