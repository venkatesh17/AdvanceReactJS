import React, { Component } from 'react';
import './App.css'
import Chat from './chat'

class App extends Component {
    render(){
        return(
            <div className="wsApp">
                <Chat />
            </div>
        )
    }
}

export default App;
