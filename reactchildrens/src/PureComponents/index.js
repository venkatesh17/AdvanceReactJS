import React , {Fragment}from 'react'
import Temp from './Temp'

class Purecomponents extends  React.Component {

    constructor(){
        super();
        this.state = {
            val:2
        }
    }   
    
    componentDidMount(){
        setInterval(()=>{
            this.setState({ val :Math.random()})
        }, 2000)
    }

    shouldComponentUpdate(nextProp, nextState){
        console.log("nextProp", nextProp);
        console.log("nextState", nextState.val );
        
        return (
            this.state.val === nextState.val ? false: true
        )
    }
    render(){
       
        return(
            <div>
                <Temp val = {this.state.val}/>
            </div>
        )
    }
}  

export default Purecomponents;