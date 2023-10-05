import React from "react";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom"
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";

export default  function AppRouter(){
    return<>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
}