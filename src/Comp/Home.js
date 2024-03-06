import React, {useEffect} from "react";
import Typed from 'typed.js';
import img from '../img/KakaoTalk_Photo_2023-10-04-14-29-41.png';
import AOS from "aos";
import 'aos/dist/aos.css';


function Home() {

useEffect(() => {
    AOS.init();
}, []);

    const el = React.useRef(null);
    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['성실 빼면 시체', '책임감 있는', '웹퍼블리셔',],
            typeSpeed: 70,
            backSpeed: 30,
            loop: true,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <section className="Home">
            <div className="container">
                <div data-aos="fade-in" data-aos-duration="2000">
                    <div className="img_circle">
                        <img className="i1" alt="img" src={img}/>
                    </div>
                </div>
                <div>
                    <div className="text_box">반가워요!<br/>
                        저는<br/>
                        <span ref={el}/><br/>
                        김소미입니다.
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;