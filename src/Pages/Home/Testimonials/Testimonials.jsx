import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { reviews } from "../../../fakeData/reviews";
import { Rating } from "@smastrom/react-rating";
import { BsFillAirplaneEnginesFill } from "react-icons/bs";
import "swiper/css";
import "swiper/css/navigation";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const reviewData = reviews;

  return (
    <section className="md:w-4/5 md:p-0 p-2 mx-auto my-10">
      <SectionTitle
        subHeading="What Our Client Say"
        heading="Testimonials"
      ></SectionTitle>

      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {reviewData.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center m-20">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <BsFillAirplaneEnginesFill className="w-20 h-20 mt-8"/>
              <p className="py-8">{review.details}</p>
              <h3 className="text-2xl text-orange-500">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
