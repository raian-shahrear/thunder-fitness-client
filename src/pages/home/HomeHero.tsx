import heroImg from "@/assets/home/hero.jpg";

const HomeHero = () => {
  return (
    <section className="relative w-full h-screen lg:h-[800px] mb-10">
      <img
        src={heroImg}
        alt="hero"
        className="w-full h-full object-cover object-top"
      />
      <div className="bg-home-hero-overlay w-full h-full absolute top-0 left-0"></div>
      <div className="w-full absolute bottom-20 left-0 text-center">
        <div className="container mx-auto px-4 lg:px-10 xxl:px-0">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">
            Transform Your Fitness Journey
          </h1>
          <p className="mt-6 font-semibold md:text-lg text-gray-300">
            Discover top-quality fitness gear to elevate your workouts and
            achieve your health goals with ease.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
