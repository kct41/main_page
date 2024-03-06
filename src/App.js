import './App.css';
import Nav from "./Comp/Nav";
import {Routes, Route, HashRouter} from "react-router-dom";
import Home from "./Comp/Home";
import Portfolio from "./Comp/Portfolio";
import About from "./Comp/About";

function App() {
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
