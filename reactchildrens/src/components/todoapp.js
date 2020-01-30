import React from "react";

class TodoApp extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <h3>ToDo</h3>
                <form>
                    <label htmlfor="new-todo">
                      What needs to be done?
                    </label>
                    <input 
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                </form>
            </div>
        )
    }
}

export default TodoApp