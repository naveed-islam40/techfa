const AboutExpolre = () => {
  return (
    <div className="bg-[#F5F8F9]">
      <div className="max-w-8xl mx-auto px-4 sm:px-20">
        <div className="flex justify-center">
          <button className="bg-[#0B363C] text-[#F5F8F9] px-8 py-3 cursor-pointer">
            Explore Now
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 py-10 pt-20">
          {/* left  */}
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
              About us
            </h1>
            <p className="w-full md:w-[80%] text-sm md:text-lg pb-10 text-[#2C2E31]">
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
          </div>
          {/* right  */}
          <div className="relative my-10">
            <div
              className="
                bg-[#0B363C] 
                absolute 
                -top-10 
                right-0 
                z-0 
                w-full 
                max-w-[400px] 
                h-[80%] 
                md:max-w-[500px] 
                lg:max-w-[600px]"
            ></div>

            <img
              src="/img/explore_about.png"
              alt=""
              className="h-full relative z-10 pr-6 md:pr-10 max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutExpolre;
