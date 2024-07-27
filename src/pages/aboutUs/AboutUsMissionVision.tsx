import { GoGoal } from "react-icons/go";
import { BiWorld } from "react-icons/bi";

const AboutUsMissionVision = () => {
  return (
    <section className="container mx-auto px-4 lg:px-10 xxl:px-0 mb-20">
      <div className="grid md:grid-cols-2 items-center gap-x-10 gap-y-6">
        <div className="text-center bg-gray-900 rounded-md p-5 shadow-lg">
          <span className="bg-red-300 inline-block text-gray-900 p-2 text-5xl rounded-full shadow-lg shadow-gray-900 mb-2 md:mt-[-50px]">
            <GoGoal />
          </span>
          <h2 className="text-2xl font-bold text-white mb-4">Mission</h2>
          <p className="text-gray-300">
            At Thunder Fitness, our mission is to empower individuals to lead
            healthier, more active lives by providing top-quality fitness
            equipment. We are dedicated to innovation, ensuring our products
            meet the highest standards of effectiveness, safety, and durability
            to support your fitness journey.
          </p>
        </div>
        <div className="text-center bg-gray-900 rounded-md p-5 shadow-lg">
          <div className="bg-red-300 inline-block text-gray-900 p-2 text-5xl rounded-full shadow-lg shadow-gray-900 mb-2 md:mt-[-50px]">
            <BiWorld />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Vision</h2>
          <p className="text-gray-300">
            We envision a world where everyone has access to the tools they need
            to achieve their fitness goals. By fostering a supportive community
            and continuously advancing our product offerings, we aim to inspire
            and motivate people everywhere to embrace a healthier, stronger
            lifestyle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsMissionVision;
