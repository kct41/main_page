import './App.css';
import Nav from "./Comp/Nav";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Comp/Home";
import Portfolio from "./Comp/Portfolio";
import About from "./Comp/About";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav/>
                <Routes>
                    <Route path="/main_page" element={<Home/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/portfolio" element={<Portfolio/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
