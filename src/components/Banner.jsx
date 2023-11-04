// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../src/App.css";
import "./Banner.css";

// import required modules
import { Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <h1>Banner here</h1>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.imgur.com/umVUfRm.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.imgur.com/umVUfRm.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="https://i.imgur.com/umVUfRm.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="https://i.imgur.com/umVUfRm.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="https://i.imgur.com/umVUfRm.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.imgur.com/umVUfRm.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.imgur.com/umVUfRm.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.imgur.com/umVUfRm.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.imgur.com/umVUfRm.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
