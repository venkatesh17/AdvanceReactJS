import React, {useState} from 'react';

function TodoForm({addTodo}){
    const [value, setValue] = useState('');

    const handleSubmit =e =>{
        e.preventDefault();
        if(!value) return;
        addTodo(value)
        setValue('')
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text"
                   value={value}
                   placeholder="Add todo ..."
                   className="inputhooks"
                   onChange={e=>setValue(e.target.value)}
            />
        </form>
    )
}

export default TodoForm;