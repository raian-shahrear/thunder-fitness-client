const AboutUsTeam = () => {
  return (
    <section
      className="container mx-auto px-4 lg:px-10 xxl:px-0 mb-20"
      data-aos="fade-right"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <h2 className="text-center text-2xl font-bold text-gray-900 mb-10">
        Met Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="shadow-lg rounded-md">
          <div>
            <img
              src="../../../src/assets/aboutus/team/CEO.jpg"
              alt="team"
              className="w-full object-cover object-center rounded-tl-md rounded-tr-md"
            />
          </div>
          <div className="p-3">
            <p className="font-bold text-gray-900">Adam Gilchrist</p>
            <p className="font-semibold text-sm text-gray-500 mb-2">CEO</p>
            <p className="text-sm text-gray-900">
              Adam Gilchrist, our CEO, brings over 20 years of leadership
              experience to Thunder Fitness. A visionary in the fitness
              industry, he drives the company’s strategic growth and innovation,
              ensuring we remain a top choice for quality fitness equipment.
            </p>
          </div>
        </div>
        <div className="shadow-lg rounded-md">
          <div>
            <img
              src="../../../src/assets/aboutus/team/Procurement Officer.jpg"
              alt="team"
              className="w-full object-cover object-center rounded-tl-md rounded-tr-md"
            />
          </div>
          <div className="p-3">
            <p className="font-bold text-gray-900">Snowden Hold</p>
            <p className="font-semibold text-sm text-gray-500 mb-2">
              Procurement Officer
            </p>
            <p className="text-sm text-gray-900">
              Snowden Hold, our Procurement Officer, excels in sourcing the best
              materials and products. With a keen eye for detail and a
              commitment to quality, Snowden ensures that our inventory meets
              the highest standards and customer expectations.
            </p>
          </div>
        </div>
        <div className="shadow-lg rounded-md">
          <div>
            <img
              src="../../../src/assets/aboutus/team/Sales Executive.jpg"
              alt="team"
              className="w-full object-cover object-center rounded-tl-md rounded-tr-md"
            />
          </div>
          <div className="p-3">
            <p className="font-bold text-gray-900">Ana Millar</p>
            <p className="font-semibold text-sm text-gray-500 mb-2">
              Sales Executive
            </p>
            <p className="text-sm text-gray-900">
              Ana Millar, our Sales Executive, has a passion for connecting
              customers with the perfect fitness solutions. Her extensive
              knowledge of our products and dedication to customer satisfaction
              make her an invaluable part of our team.
            </p>
          </div>
        </div>
        <div className="shadow-lg rounded-md">
          <div>
            <img
              src="../../../src/assets/aboutus/team/Customer Care Officer.jpg"
              alt="team"
              className="w-full object-cover object-center rounded-tl-md rounded-tr-md"
            />
          </div>
          <div className="p-3">
            <p className="font-bold text-gray-900">Henry Ford</p>
            <p className="font-semibold text-sm text-gray-500 mb-2">
              Customer Care Officer
            </p>
            <p className="text-sm text-gray-900">
              Henry Ford, our Customer Care Officer, is committed to providing
              exceptional support. With a friendly approach and problem-solving
              skills, Henry ensures that every customer has a positive
              experience with Thunder Fitness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsTeam;
