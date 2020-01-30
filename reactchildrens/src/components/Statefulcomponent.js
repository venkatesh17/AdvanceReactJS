import React from 'react';

class Timer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            seconds: 0
        }
    }
    tick(){
        this.setState({
            seconds: this.state.seconds+1
        });
    }
    componentDidMount(){
       setInterval(()=>this.tick(), 1000)
    }
    render(){
        return(
            <div>Second:{this.state.seconds}</div>
        )
    }
}

export default Timer;