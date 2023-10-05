
import react from "react";
import FuctionC from "./FunctionC";

export default function FuctionB( {name , profession}){
    return<>
    <h1>hello I am From Funtion B and my name is {name}</h1>
     <FuctionC profession={profession} />
    </>
} 