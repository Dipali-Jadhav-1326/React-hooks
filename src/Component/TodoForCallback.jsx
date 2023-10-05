import {memo} from "react"


function TodoForCallback({todos , addTodo}){
    console.log("Child Is Render")
     return<>
        <h1>My Todo`s</h1>
        {
            todos.map((d , i)=>{
                return<div key={i}> 
                  <h1>{d + " " + i}</h1>
                </div>
            })
        }
        <button onClick={addTodo}>Add Todo</button>
     </>
}


export default memo(TodoForCallback);