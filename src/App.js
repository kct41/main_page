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
