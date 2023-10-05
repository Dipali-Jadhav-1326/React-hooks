import React, { useEffect, useState } from "react";
import "../Component/useEffect.css"

export default function PractUseEffect(){
    const [data , setData ] = useState([])

    useEffect(()=>{
       fetch("https://dummyjson.com/users")
       .then((res)=>res.json())
       .then((data)=>setData(data.users))
       
    } , [])
    return<>
      <h1>Users Details By using UseEffect</h1>
      <div className="card-holder">
        {data.length>0 && data.map((d , i)=>{
            return <div key={i} className="card">
                <div className="img-container">
                    <img src={d.image}></img>
                </div>
                <h4>{d.firstName} {d.lastName}</h4>
                <h5 className="contact">Contact Me</h5>
                <h6 className="contact">Email : {d.email}</h6>
                <h6 className="contact">Phone : {d.phone}</h6>
                
            </div>
        })}
      </div>
    </>
}