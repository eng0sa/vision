import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export default function MySwiperSlide() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                className="mySwiperslide"
            >
                <SwiperSlide>
                    <div className="slide-content">
                        <h4>Experience Oracle Guided Learning</h4>
                        <p className='text-Drive'>
                            Drive instant user productivity, reduce costs, and accelerate cloud adoption.
                            Learn through in-application guidance in the flow of work.
                        </p>
                        <p className="explore-this">Explore This</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-content">
                        <h4>Experience Oracle Guided Learning</h4>
                        <p className='text-Drive'>
                            Drive instant user productivity, reduce costs, and accelerate cloud adoption.
                            Learn through in-application guidance in the flow of work.
                        </p>
                        <p className="explore-this">Explore This</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-content">
                        <h4>Experience Oracle Guided Learning</h4>
                        <p className='text-Drive'>
                            Drive instant user productivity, reduce costs, and accelerate cloud adoption.
                            Learn through in-application guidance in the flow of work.
                        </p>
                        <p className="explore-this">Explore This</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-content">
                        <h4>Experience Oracle Guided Learning</h4>
                        <p className='text-Drive'>
                            Drive instant user productivity, reduce costs, and accelerate cloud adoption.
                            Learn through in-application guidance in the flow of work.
                        </p>
                        <p className="explore-this">Explore This</p>
                    </div>
                </SwiperSlide> <SwiperSlide>
                    <div className="slide-content">
                        <h4>Experience Oracle Guided Learning</h4>
                        <p className='text-Drive'>
                            Drive instant user productivity, reduce costs, and accelerate cloud adoption.
                            Learn through in-application guidance in the flow of work.
                        </p>
                        <p className="explore-this">Explore This</p>
                    </div>
                </SwiperSlide> <SwiperSlide>
                    <div className="slide-content">
                        <h4>Experience Oracle Guided Learning</h4>
                        <p className='text-Drive'>
                            Drive instant user productivity, reduce costs, and accelerate cloud adoption.
                            Learn through in-application guidance in the flow of work.
                        </p>
                        <p className="explore-this">Explore This</p>
                    </div>
                </SwiperSlide>
                            </Swiper>
        </>
    );
}
