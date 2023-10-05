
import react from "react";
import FuctionB from "./FunctionB";

export default function FuctionA(){
    let name  = "Dipali"
    let profession = "Engineer"
    return<>
    <h1>hello I am From FuntionA</h1>
    <FuctionB name={name} profession={profession}/>
    
    </>
} 