import React from 'react';
import Images from '../assets/imgs/Images'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import { FreeMode, Pagination, EffectCoverflow, Navigation } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../constants";

const Carousel = () => {
    return (
        <div className="flex items-center justify-center flex-col h-screen gap-5    ">
            <div className='flex flex-row justify-center gap-2'>
                <h1 className='text-3xl text-orange-600 font-medium'>MY</h1>
                <h1 className='text-3xl text-orange-600 font-bold'>PROJECTS</h1>
            </div>
            <Swiper
                loop={true}
                slidesPerView={'auto'}
                grabCursor={true}
                effect='coverflow'
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, FreeMode, Pagination, Navigation]}
                breakpoints={{
                    340: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                }}
                freeMode={true}
                className="max-w-[90%] lg:max-w-[80%]"
            >
                {ServiceData.map((item) => (
                    <SwiperSlide key={item.title}>
                        <a href={item.link} target="_blank">
                        <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${item.backgroundImage})` }}
                            />
                            <div className="absolute inset-0 bg-gray-500 opacity-100 group-hover:bg-gray-900 transition duration-200 ease-in" />
                            <div className="relative flex flex-col gap-3">
                                <item.icon className="text-orange-300 group-hover:text-orange-600 w-1/6 h-1/6 duration-200 ease-in" />
                                <h1 className="text-xl lg:text-2xl">{item.title} </h1>
                                <p className="lg:text-[18px]">{item.content} </p>
                            </div>
                            <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-orange-300 group-hover:text-orange-600 group-hover:rotate-45 duration-100" />
                        </div>
                        </a>
                    </SwiperSlide>
                ))}
                <div className="slider-controler md:block hidden">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline" className=''></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    );
};
export default Carousel