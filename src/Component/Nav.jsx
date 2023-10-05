import React from "react";
import "../Component/nav.css"
import { Link } from "react-router-dom";

export default function Home(){
    return<>
        <nav>
            <div className="logo">Logo</div>
            <div className="list-div">
                <ul>
                    <li><Link to="/">Home</Link> </li>
                    <li><Link to="/about">About</Link> </li>
                    <li><Link to="/contact">Contact</Link> </li>
                </ul>
            </div>
        </nav>
    </>
}