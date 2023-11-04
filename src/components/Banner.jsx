// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import pic6 from "../assets/pic6.jpg";
import pic7 from "../assets/pic7.jpg";
import pic8 from "../assets/pic8.jpg";
import pic9 from "../assets/pic9.jpg";

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
      {/* <h1>Banner here</h1> */}
      <div>
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
            <img src={pic7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={pic3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={pic4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={pic5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic8} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic9} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
