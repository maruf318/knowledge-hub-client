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
            <img src={pic7} alt="book-Picture-Library1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic2} alt="book-Picture-Library2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic3} alt="book-Picture-Library3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic4} alt="book-Picture-Library4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic5} alt="book-Picture-Library5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic6} alt="book-Picture-Library6" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic1} alt="book-Picture-Library7" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic8} alt="book-Picture-Library8" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic9} alt="book-Picture-Library9" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
