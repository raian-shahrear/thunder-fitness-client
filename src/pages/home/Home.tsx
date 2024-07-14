import HomeCategory from "./HomeCategory";
import HomeFeaturedProducts from "./HomeFeaturedProducts";
import HomeHero from "./HomeHero";

const Home = () => {
  return (
    <div >
      <HomeHero />
      <HomeCategory />
      <HomeFeaturedProducts />
    </div>
  );
};

export default Home;
