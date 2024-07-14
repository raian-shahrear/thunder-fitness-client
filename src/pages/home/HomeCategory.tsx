const HomeCategory = () => {
  return (
    <section className="container mx-auto px-4 lg:px-10 xxl:px-0 mb-20">
      <h2 className="text-center text-2xl font-bold text-gray-900 mb-10">
        Categories
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div>
          <img
            src="../../../src/assets/home/categories/Cardio Equipment.jpg"
            alt="category"
            className="w-full object-cover object-center"
          />
          <p className="font-semibold text-lg mt-3 text-center">
            Cardio Equipment
          </p>
        </div>
        <div>
          <img
            src="../../../src/assets/home/categories/Strength Training.jpg"
            alt="category"
            className="w-full object-cover object-center"
          />
          <p className="font-semibold text-lg mt-3 text-center">
            Strength Training
          </p>
        </div>
        <div>
          <img
            src="../../../src/assets/home/categories/Functional Fitness.jpg"
            alt="category"
            className="w-full object-cover object-center"
          />
          <p className="font-semibold text-lg mt-3 text-center">
            Functional Fitness
          </p>
        </div>
        <div>
          <img
            src="../../../src/assets/home/categories/Heavy Machine.jpg"
            alt="category"
            className="w-full object-cover object-center"
          />
          <p className="font-semibold text-lg mt-3 text-center">
            Heavy Machine
          </p>
        </div>
        <div>
          <img
            src="../../../src/assets/home/categories/Storage Solutions.jpg"
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
