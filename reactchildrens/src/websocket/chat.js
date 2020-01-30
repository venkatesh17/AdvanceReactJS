import React, { Component } from 'react';
import ChatInput from './chatinput';
import ChatMessage from './chatmessage';

const URL = 'ws://localhost:3030'

class Chat extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'venkatesh',
            message: []
        }
    }
    ws = new WebSocket(URL)

    componentDidMount(){
        this.ws.onopen = ()=>{
            // on connecting, do nothing but log it to the console
            console.log('connected');
        }
        this.ws.onmessage = evt =>{
            // on receiving a message, add it to the list of messages
            const message = JSON.parse(evt.data)
            this.addMessage(message)
        }

        this.ws.onclose = ()=>{
            console.log('disconnected');
            this.setState({
                ws: new WebSocket(URL)
            })
        }
    }

    addMessage = message =>{
        this.setState(
            {message:[message, ...this.state.message]})
    }
    submitMessage = messageString =>{
        const message = { name: this.state.name, message: messageString}
        this.ws.send(JSON.stringify(message))
        this.addMessage(message)
    }
    render(){
        return(
            <div>
                <label htmlFor="name">
                    Name : &nbsp;
                    <input 
                        type="text"
                        id={'name'}
                        placeholder="Enter your name..."
                        value = { this.state.name}
                        onChange= {e => this.setState({ name: e.target.value})}
                    />
                </label>
                <ChatInput 
                    ws={this.ws}
                    onSubmitMessage = {messageString=>this.submitMessage(messageString)}
                />
                {
                    this.state.message.map((message, index)=>(
                        <ChatMessage
                            key={index}
                            message={message.message}
                            name={ message.name}
                        />
                    ))
                }
            </div>
        )
    }
}
export default Chat;