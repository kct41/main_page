import React from "react";
import img from '../img/KakaoTalk_20231010_191219995.jpg';
function About(){
    return(
        <section className="About">
            <div className="container">
                <div className="img_box">
                    <img alt="profile_image" src={img}/>
                </div>
                <div className="info_box">
                    <h2 className="title">PROFILE</h2>
                    <table>
                        <tbody>
                        <tr>
                            <th>이름</th>
                            <td>김소미</td>
                        </tr>
                        <tr>
                            <th>생년월일</th>
                            <td>1996.04.01</td>
                        </tr>
                        <tr>
                            <th>학력</th>
                            <td>서울여자대학교 중어중문학과 졸업&nbsp; | &nbsp;2015.03-2021.08</td>
                        </tr>
                        <tr>
                            <th>기타자격</th>
                            <td>웹디자인 기능사 취득&nbsp; | &nbsp;2021.10</td>
                        </tr>
                        <tr>
                            <th>경력</th>
                            <td>(주)피디정보통신 웹디자이너/퍼블리셔 재직&nbsp; | &nbsp;2021.11-2023.07</td>
                        </tr>
                        </tbody>
                    </table>
                    <h2 className="title">SKILL</h2>
                    <div className="skill_box">
                        <div className="box">
                            <div className="circle html">
                                <h2>90%</h2>
                            </div>
                            <h3>HTML/CSS</h3>
                        </div>
                        <div className="box">
                            <div className="circle js">
                                <h2>70%</h2>
                            </div>
                            <h3>JS</h3>
                        </div>
                        <div className="box">
                            <div className="circle figma">
                                <h2>60%</h2>
                            </div>
                            <h3>Figma</h3>
                        </div>
                        <div className="box">
                            <div className="circle react">
                                <h2>50%</h2>
                            </div>
                            <h3>React</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;