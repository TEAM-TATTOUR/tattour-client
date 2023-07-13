import "swiper/css";
import "swiper/css/pagination";
import styled from "styled-components"

import { useEffect, useState } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


const DetailCarousel = () => {
    return (
        <div className="swiper_container">
            <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 2000,
            }}
            speed={1000}
            slidesPerView={1}
            loop={true}
            >
                <SwiperSlide><div className="one_card">Slide 1</div></SwiperSlide>
                <SwiperSlide><div className="one_card">Slide 2</div></SwiperSlide>
                <SwiperSlide><div className="one_card">Slide 3</div></SwiperSlide>
                <SwiperSlide><div className="one_card">Slide 4</div></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default DetailCarousel

