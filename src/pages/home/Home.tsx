import HomeBenefits from "./HomeBenefits";
import HomeCategory from "./HomeCategory";
import HomeFeaturedProducts from "./HomeFeaturedProducts";
import HomeGallery from "./HomeGallery";
import HomeHero from "./HomeHero";

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeCategory />
      <HomeFeaturedProducts />
      <HomeBenefits />
      <HomeGallery />
    </>
  );
};

export default Home;
