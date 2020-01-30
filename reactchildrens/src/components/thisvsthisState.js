import React from 'react'


class Thisvsthisstate extends React.Component {

    constructor(){
        super()
        this.state ={
            count:0
        }
        this.count1 = 100 
    }

    onClick = ()=>{
        this.setState({
            count: this.state.count +1
        })
    }

    render(){
        return(
            <div>
                <p>Count1: {this.count1}</p>
                <p>Count : {this.state.count} </p>
                <button onClick={this.onClick}>Submit</button>
            </div>
        )
    }
}

export default Thisvsthisstate;