import React from 'react'

class ChatInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            message:''
        }
    }
    onSubmit=(e)=>{
        e.preventDefault()
        this.props.onSubmitMessage(this.state.message)
        this.setState({
            message:''
        })
    }
    handleChange =(e)=>{
        this.setState({
            message: e.target.value
        })
    }

    render(){
        return(
            <div>
                <form 
                    action=''
                    onSubmit={this.onSubmit}
                >
                    <input 
                        type="text"
                        placeholder={'Enter message... '}
                        value={ this.state.message}
                        onChange={this.handleChange}
                    />
                    <input type="submit" value={'send'}/>
                </form>
            </div>
        )
    }
}

export default ChatInput;