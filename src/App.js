import './App.css';
import Nav from "./Comp/Nav";
import {Routes, Route, HashRouter} from "react-router-dom";
import Home from "./Comp/Home";
import Portfolio from "./Comp/Portfolio";
import About from "./Comp/About";
import AOS from "aos";
import 'aos/dist/aos.css';
import {useEffect} from "react";


function App() {

    //AOS
    useEffect(() => {
        AOS.init();
    }, []);

    let body = document.querySelector('body');
    body.addEventListener('click', function (event) {
        let spark = document.createElement('div');
        spark.classList.add('spark');
        body.appendChild(spark);

        spark.style.top = (event.clientY - body.offsetTop) + 'px';
        spark.style.left = (event.clientX - body.offsetLeft) + 'px';
        spark.style.filter = 'hue-rotate(' + Math.random() * 360 + 'deg)';


        for (let i = 0; i <= 7; i++) {
            let span = document.createElement('span');
            span.style.transform = 'rotate(' + (i * 45) + 'deg)';
            spark.appendChild(span);
        }
        setTimeout(function () {
            spark.remove();
        }, 1000);
    })
    return (
        <div className="App">
            <HashRouter>
                <Nav/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/portfolio" element={<Portfolio/>}></Route>
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
