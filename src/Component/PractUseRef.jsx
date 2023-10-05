import React, { useRef } from "react";

export default function PractUseRef(){
    const val = useRef();
  function ClickMe(val){
    val.current.innerHTML = "Welcome in My World !!"
    val.current.style.color = "Green"
  }
    return<>
        <h1 ref={val} id="value-of-h1">hello </h1>
        <button onClick={()=>{ClickMe(val)}}>click me</button>
    </>
}