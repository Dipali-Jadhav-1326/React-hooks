import react, { useState } from 'react';

export default function Todo() {

  const [text , setText] = useState({
    text:"",
    id:""
  })
   

  const [list , setList]  = useState([]);


  function AddList( text){
     setList([...list , text]);
     setText({text:"", id:""})
  }
 

  function deleteFunc(i){
    console.log(i)
    setList(list.filter((t)=>t.id!==i))
  }
  
  return (
    <>
       <input type="text" placeholder="write a todo here" onChange={(e)=>setText({text:e.target.value , id:Date.now()})}  value={text.text}/>
       <button onClick={()=>AddList(text)}>Add</button>
       <ul>
       {list.length>0 && list.map((d , i)=>{
            return <li key={i}>{d.text} <span onClick={()=>deleteFunc(d.id)}>Delete</span></li> 
       })}

     </ul>

    </>
  );
}
