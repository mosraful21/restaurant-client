import FoodCard from "../Shared/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  return (
    <div className="grid md:grid-cols-3 gap-3">
      {items.map((item, index) => (
        <FoodCard key={index} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTab;






// for Pagination------- using Swiper Pagination custom-----------------
// --------------------------------------------
// import FoodCard from "../Shared/FoodCard/FoodCard";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const OrderTab = ({ items }) => {
//   const pagination = {
//     clickable: true,
//     renderBullet: function (index, className) {
//       return '<span class="' + className + '">' + (index + 1) + "</span>";
//     },
//   };

//   return (
//     <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
//       <SwiperSlide>
//         <div className="grid md:grid-cols-3 gap-3">
//           {items.map((item, index) => (
//             <FoodCard key={index} item={item}></FoodCard>
//           ))}
//         </div>
//       </SwiperSlide>
//     </Swiper>
//   );
// };

// export default OrderTab;