import React, {Component} from 'react';
import Content from './content'

class Increment extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            increment: 0,
            counter:1
        }
    }
    IncrementValue = ()=>{
        this.setState({
            increment:(this.state.increment+1)
        })
    }
    onChange = (e)=>{
        this.setState({
            data:e.target.value
        })
    }

    clearInput = ()=>{
        this.setState({
            data:''
        })
        this.refs.myRef.focus()
    }

     update=(data)=>{
       console.log("event.......", data);
       
        // this.setState({
        //     counter: this.state.counter + 1
        // });
      }

    render(){
        return(
            <div>
                <button onClick={this.IncrementValue}>Increment</button>
                <Content myResult = {this.state.increment} data = {this.update}  />
                <br />
                <p>{this.state.counter}</p>
                <button onClick={this.clearInput}>ClearData</button>  <br/>  
                <input type="text" value={this.state.data} 
                        onChange={this.onChange} ref="myRef" />
                <h2>{this.state.data}</h2>
                

            </div>
        )
    }
}

export default Increment;