const HomeGallery = () => {
  return (
    <section
      className="container mx-auto px-4 lg:px-10 xxl:px-0 mb-20"
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <h2 className="text-center text-2xl font-bold text-gray-900 mb-10">
        Inspiring Moments
      </h2>
      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="flex w-1/2 flex-wrap">
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="../../../src/assets/home/gallery/gallery_img1.jpg"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="../../../src/assets/home/gallery/gallery_img2.jpg"
            />
          </div>
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="../../../src/assets/home/gallery/gallery_img3.jpg"
            />
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="../../../src/assets/home/gallery/gallery_img4.jpg"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="../../../src/assets/home/gallery/gallery_img5.jpg"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="../../../src/assets/home/gallery/gallery_img6.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;
