const AboutHero = () => {
  return (
    <div className=" bg-[#0B363C] relative overflow-hidden py-10">
      <img
        src="/img/hero.png"
        alt="hero"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="max-w-8xl mx-auto px-4 md:px-16">
        <img src="/img/about_hero.png" />
      </div>
    </div>
  );
};

export default AboutHero;
