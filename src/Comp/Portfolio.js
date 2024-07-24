import mockup_img1 from "../img/nice_mockup1.png";
import mockup_img2 from "../img/minumsa_mockup1.png";
import mockup_img3 from "../img/gwj_mockup1.png";

import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import {Mousewheel, Pagination} from 'swiper/modules';

function Portfolio() {
    return (
        <>
            <Swiper
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={0}
                mousewheel={true}
                draggable={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <section className="Portfolio">
                        <div className="container">
                            <div className="mockup">
                                <img alt="mockup_img" src={mockup_img3}/>
                            </div>
                            <div className="info">
                                {/*<a href="https://kct41.github.io/gwj/"><h2>경원재 홈페이지 리뉴얼</h2></a>*/}
                                <h2>경원재 홈페이지 리뉴얼</h2>
                                <a href="https://kct41.github.io/gwj/">바로가기</a>
                                <p>구성 : 메인페이지 1, 서브페이지 5(객실소개)</p>
                                <p>리액트를 활용하여 호텔 경원재 홈페이지를 리디자인/퍼블리싱 했습니다.</p>
                                <div className="stack">
                                    <span>#반응형</span>
                                    <span>#React</span>
                                    <span>#Swiper.js</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="Portfolio">
                        <div className="container">
                            <div className="mockup">
                                <img alt="mockup_img" src={mockup_img2}/>
                            </div>
                            <div className="info">
                                <h2>민음사 홈페이지 리뉴얼</h2>
                                <a href="https://kct41.github.io/minumsa/">바로가기</a>
                                <p>리액트를 활용하여 민음사 랜딩페이지를 리디자인/퍼블리싱 했습니다.</p>
                                <div className="stack">
                                    <span>#반응형</span>
                                    <span>#React</span>
                                    <span>#Swiper.js</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="Portfolio">
                        <div className="container">
                            <div className="mockup">
                                <img alt="mockup_img" src={mockup_img1}/>
                            </div>
                            <div className="info">
                                <h2>나이스지키미 홈페이지 클론코딩</h2>
                                <a href="https://kct41.github.io/nice-clone/">바로가기</a>
                                <p>리액트를 활용하여 나이스지키미 홈페이지를 클론코딩 했습니다.</p>
                                <div className="stack">
                                    <span>#React</span>
                                    <span>#Swiper.js</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Portfolio;