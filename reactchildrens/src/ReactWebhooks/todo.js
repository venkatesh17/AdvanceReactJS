import React from 'react';

function Todo({todo, index, completeTodo, removeTodo, isComleted}){
    return(
        <div className="todolist">
                <p style={{textDecoration: isComleted ? 'line-through':''}}>{todo.text}</p>
                <button onClick={()=>completeTodo(index)}>Complete</button>
                <button onClick={()=>removeTodo(index)}>X</button>
          
        </div>
    )
}
export default Todo;