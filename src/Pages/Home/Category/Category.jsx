import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../../assets/category/slide1.jpg";
import slide2 from "../../../assets/category/slide2.jpg";
import slide3 from "../../../assets/category/slide3.jpg";
import slide4 from "../../../assets/category/slide4.jpg";
import slide5 from "../../../assets/category/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const slideShow = [
  { img: slide1 },
  { img: slide2 },
  { img: slide3 },
  { img: slide4 },
  { img: slide5 },
  { img: slide3 },
  { img: slide1 },
  { img: slide4 },
  { img: slide2 },
];

const Category = () => {
  return (
    <section className="md:w-4/5 md:p-0 p-2 mx-auto ">
      <SectionTitle
        subHeading="From 11.00AM to 10.00PM"
        heading="order online"
      ></SectionTitle>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper my-5"
      >
        {slideShow.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Category;
