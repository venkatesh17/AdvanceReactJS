import React, { useState, useEffect } from 'react';
import Todo from "./todo";
import './index.css'
import TodoForm from './todoForm'
function Webhooksexample() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([
        {
            text: 'Learn React WebHooks',
            isComleted: false
        },
        {
            text: 'Learn NodeJs',
            isComleted: false
        },
        {
            text: 'Learn MongoDB',
            isComleted: false
        }

    ]);

    const addTodo123 = text =>{
        const newTodos = [...todos, {text}]
        setTodos(newTodos)
    }

    const completeTodo = index =>{
        const newTodos = [...todos];
        newTodos[index].isComleted = !newTodos[index].isComleted;
        setTodos(newTodos)
    }

    const removeTodo =index =>{
        const newTodos = [...todos];
        newTodos.splice(index,1);
        setTodos(newTodos)
    }

    return (
        
        <div className="todoWebhooks">
            <p>You clicked {count} times.....</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
              </button>
              {
                  todos.map((todo, index)=>(
                     <Todo 
                        key={index} 
                        index={index} 
                        todo={todo}
                        isComleted={todos[index].isComleted}
                        completeTodo={completeTodo}
                        removeTodo = {removeTodo}
                        />
                    ))
                }
                <TodoForm addTodo={addTodo123}/>
        </div>
    );
}

export default Webhooksexample;
