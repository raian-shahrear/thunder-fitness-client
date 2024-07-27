import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";

const clientReviews = [
  {
    _id: "01",
    img: "../../../src/assets/aboutus/client/Jhon.jpg",
    name: "Jhon Killer",
    review:
      "Thunder Fitness exceeded my expectations! The equipment is top-notch and built to last. Their customer service was incredibly helpful, ensuring I got exactly what I needed for my home gym. Highly recommend!",
  },
  {
    _id: "02",
    img: "../../../src/assets/aboutus/client/Sam.jpg",
    name: "Sam Board",
    review:
      "I've been a loyal Thunder Fitness customer for years. Their products are consistently high-quality, and their team is always responsive and knowledgeable. They make staying fit at home easier than ever!",
  },
  {
    _id: "03",
    img: "../../../src/assets/aboutus/client/Toya.jpg",
    name: "Toya Lopez",
    review:
      "Fantastic experience with Thunder Fitness! The gear is durable and performs perfectly. The support team answered all my questions quickly. I’m thrilled with my purchase and the overall service!",
  },
];

const swiperSlideBreakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
};

const AboutUsClientReview = () => {
  return (
    <section
      className="container mx-auto px-4 lg:px-10 xxl:px-0 mb-8"
      data-aos="fade-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <h2 className="text-center text-2xl font-bold text-gray-900 mb-10">
        What People Say
      </h2>
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={30}
        breakpoints={swiperSlideBreakpoints}
        pagination={{ clickable: true }}
      >
        {clientReviews?.map((review) => (
          <SwiperSlide key={review?._id}>
            <div className="p-3 shadow-lg rounded-md mt-1 mb-12">
              <div className="flex gap-5">
                <div className="w-[80px]">
                  <img
                    src={review?.img}
                    alt="client"
                    className="w-[80px] h-[80px] rounded-full object-cover object-center border-2 border-gray-900"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-bold mb-2">{review?.name}</p>
                  <p className="text-sm">{review?.review}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default AboutUsClientReview;
