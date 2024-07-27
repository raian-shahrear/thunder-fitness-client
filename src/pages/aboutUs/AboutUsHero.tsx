import Lottie from "lottie-react";
import gymActivity from "../../../src/assets/aboutus/lottie_animation/gym.json";

const AboutUsHero = () => {
  return (
    <section className="container mx-auto px-4 lg:px-10 xxl:px-0 pt-10 lg:pt-32 mb-20 md:mb-28">
      <div className="grid md:grid-cols-2 items-center gap-x-10 gap-y-6">
        <div className="h-full bg-gray-100 rounded-md md:rounded-none md:rounded-tl-[100px] md:rounded-br-[100px] p-3">
          <Lottie animationData={gymActivity} loop={true} className="h-full" />
        </div>
        <div className="text-center md:text-start">
          <h1 className="text-gray-900 text-2xl lg:text-3xl font-bold">
            About Us
          </h1>
          <p className="mt-4 text-gray-600">
            Welcome to Thunder Fitness, your premier destination for
            high-quality fitness equipment. Our journey began in 2010, when our
            founder, a passionate fitness enthusiast and personal trainer,
            recognized the need for reliable, durable, and effective fitness
            gear. Dissatisfied with the limited options available in the market,
            he set out on a mission to create a brand that would not only meet
            the highest standards of quality but also inspire people to lead
            healthier, more active lives.
          </p>
          <p className="mt-3 text-gray-600">
            As we continue to grow and evolve, our focus remains on delivering
            the best fitness equipment and exceptional service to our customers.
            We are excited about the future and the new innovations we will
            bring to the market. Thank you for choosing Thunder Fitness as your
            partner in health and wellness. Together, we can achieve greatness
            and live healthier, stronger lives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;
