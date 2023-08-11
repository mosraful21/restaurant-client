import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../../../assets/banner/01.jpg";
import img2 from "../../../assets/banner/02.jpg";
import img3 from "../../../assets/banner/03.jpg";
import img4 from "../../../assets/banner/04.jpg";
import img5 from "../../../assets/banner/05.jpg";
import img6 from "../../../assets/banner/06.jpg";

const bannerSlider = [
  { img: img1 },
  { img: img2 },
  { img: img3 },
  { img: img4 },
  { img: img5 },
  { img: img6 },
];

const Banner = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {bannerSlider.map((banner, index) => (
        <SwiperSlide key={index}>
          <img src={banner.img} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
