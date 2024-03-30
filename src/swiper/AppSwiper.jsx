import { Swiper, SwiperSlide, Pagination } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import swiperPhoto from '../imges/swiper-photo.jpeg';

export default function AppSwiper() {
    return (
        <>
        <Swiper
            spaceBetween={1}
            pagination={{
                clickable: true,
            }}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className="slide-content" style={{ backgroundImage: `url(${swiperPhoto})` }}>
                    <div className="text-container">
                        <h3>Vision Training Programming</h3>
                        <hr  />
                        <h6>Develop skills in Java programming language syntax and semantics</h6>
                        <p>
                            This program is designed to teach you the fundamentals of Java programming language
                            syntax and semantics. You will learn about the basic building blocks of Java
                            programs such as variables, data types, operators, and expressions. You will also
                            learn about the different control flow statements that can be used to control the
                            execution of a Java program.
                        </p>
                        <button> Learn More</button>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="slide-content" style={{ backgroundImage: `url(${swiperPhoto})` }}>
                    <div className="text-container">
                        <h3>Vision Training Programming</h3>
                        <hr />
                        <h6>Develop skills in Java programming language syntax and semantics</h6>
                        <p>
                            This program is designed to teach you the fundamentals of Java programming language
                            syntax and semantics. You will learn about the basic building blocks of Java
                            programs such as variables, data types, operators, and expressions. You will also
                            learn about the different control flow statements that can be used to control the
                            execution of a Java program.
                        </p>
                        <button> Learn More</button>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="slide-content" style={{ backgroundImage: `url(${swiperPhoto})` }}>
                    <div className="text-container">
                        <h3>Vision Training Programming</h3>
                        <hr />
                        <h6>Develop skills in Java programming language syntax and semantics</h6>
                        <p>
                            This program is designed to teach you the fundamentals of Java programming language
                            syntax and semantics. You will learn about the basic building blocks of Java
                            programs such as variables, data types, operators, and expressions. You will also
                            learn about the different control flow statements that can be used to control the
                            execution of a Java program.
                        </p>
                        <button> Learn More </button>
                    </div>
                </div>
            </SwiperSlide><SwiperSlide>
                <div className="slide-content" style={{ backgroundImage: `url(${swiperPhoto})` }}>
                    <div className="text-container">
                        <h3>Vision Training Programming</h3>
                        <hr />
                        <h6>Develop skills in Java programming language syntax and semantics</h6>
                        <p>
                            This program is designed to teach you the fundamentals of Java programming language
                            syntax and semantics. You will learn about the basic building blocks of Java
                            programs such as variables, data types, operators, and expressions. You will also
                            learn about the different control flow statements that can be used to control the
                            execution of a Java program.
                        </p>
                        <button> Learn More</button>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
        <div className='text-j'></div>
        </>
    );
}
