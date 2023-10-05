import React, { useCallback, useState } from "react";
import TodoForCallback from "./TodoForCallback";


 export default function Callback(){
    const [ count , setCount] = useState(0);
    const [todo , setTodo] = useState([]);
       function increamentFunc(){
          setCount(count+1)
       }
    const addTodo =    useCallback(()=>{
        setTodo((prev)=>[...prev , 'New Entry'])
       } , [todo])
    return<>
    <TodoForCallback todos={todo} addTodo={addTodo}/>
    <hr />
    <div>
        Count : {count}
        <button onClick={()=> increamentFunc()}>Increment</button>
    </div>
    </>
}