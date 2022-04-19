import React from 'react'
import { Todoitem } from '../MyComponents/Todoitem'

export const Todos  = (props) => {
  let myStyle ={
    minHeight:"10vh"
  }
  return (
    <div className='container my-3' style={myStyle}>
        <h3 className="text-center my-3">Add Your Schedule</h3>
        <h5 className="text-center my-3 bg-dark text-light">Plan Your Day</h5>
        {props.todos.length===0? "There is nothing to do as of now!!":
        props.todos.map((todo)=>{  
           return(
             <>
              <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
             </>
           )
        })
          }
    </div>
  )
}
