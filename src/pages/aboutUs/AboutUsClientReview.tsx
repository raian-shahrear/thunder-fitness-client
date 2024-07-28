import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import { clientReviews } from "./aboutUs.const";

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
      className="container mx-auto px-4 lg:px-10 xxl:px-0 pt-10 mb-4"
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
