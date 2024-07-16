const HomeCategory = () => {
  return (
    <section className="container mx-auto px-4 lg:px-10 xxl:px-0 mb-20">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div>
          <img
            src="../../../src/assets/home/categories/Cardio Equipment/Ellipticals.jpg"
            alt="category"
            className="w-full object-cover object-center"
          />
          <p className="font-semibold text-lg mt-3 text-center">
            Cardio Equipment
          </p>
        </div>
        <div>
          <img
            src="../../../src/assets/home/categories/Functional Fitness/Battle Ropes.jpg"
            alt="category"
            className="w-full object-cover object-center"
          />
          <p className="font-semibold text-lg mt-3 text-center">
            Strength Training
          </p>
        </div>
        <div>
          <img
            src="../../../src/assets/home/categories/Heavy Machine/Leg Press Machines.jpg"
            alt="category"
            className="w-full object-cover object-center"
          />
          <p className="font-semibold text-lg mt-3 text-center">
            Functional Fitness
          </p>
        </div>
        <div>
          <img
            src="../../../src/assets/home/categories/Storage Solutions/Weight Racks.jpg"
            alt="category"
            className="w-full object-cover object-center"
          />
          <p className="font-semibold text-lg mt-3 text-center">
            Heavy Machine
          </p>
        </div>
        <div>
          <img
            src="../../../src/assets/home/categories/Strength Training/Barbells and Plates.jpg"
            alt="category"
            className="w-full object-cover object-center"
          />
          <p className="font-semibold text-lg mt-3 text-center">
            Storage Solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeCategory;
