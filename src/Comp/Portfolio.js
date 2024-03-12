import mockup_img from "../img/realistic_laptop_with_smartphone.jpg";

function Portfolio(){
    return(
        <section className="Portfolio">
            <div className="container">
                 <div className="mockup">
                    <img alt="mockup_img" src={mockup_img}/>
                 </div>
                <div className="info">
                    <h2>포트폴리오제목</h2>
                    <p>여기는설명자리입니다여기는설명자리입니다여기는설명자리입니다여기는설명자리입니다여기는설명자리입니다여기는설명자리입니다여기는설명자리입니다여기는설명자리입니다여기는설명자리입니다</p>
                    <div className="stack">
                        <span>#Figma</span>
                        <span>#React</span>
                        <span>#JavaScript</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;