const AboutVision = () => {
  return (
    <div className="bg-[#F5F8F9]">
      <div className="max-w-8xl mx-auto px-4 sm:px-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 py-10 pt-20">
          {/* left  */}
          <div className="relative my-10">
            <div
              className="
                bg-[#0B363C] 
                absolute 
                -bottom-10 
                -left-10 
                z-0 
                w-full 
                max-w-[400px] 
                h-[80%] 
                md:max-w-[500px] 
                lg:max-w-[600px] 
                   "
            ></div>

            <img
              src="/img/explore_about.png"
              alt=""
              className="h-full relative z-10 pr-6 md:pr-10 max-w-full object-contain"
            />
          </div>
          {/* right  */}
          <div className="space-y-4 pt-10">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
              Our Vision and Mission
            </h1>
            <p className="text-sm  sm:text-lg text-[#2C2E31]">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutVision;
