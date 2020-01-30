import React from 'react';

const Increament = (Countincrement)=>class extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            number:0
        }
    }
    Increment=()=>{
        this.setState({
            number: this.state.number+1
        })
    }
    render(){
        return(
            <Countincrement
                {...this.state}
                increment={this.Increment}
            >
            <p>Welcome To</p>
            <h5>Hyderabad</h5>
            <p>Welcome To</p>
            <h5>Hyderabad</h5>
            <p>Welcome To</p>
            <h5>Hyderabad</h5>
            </Countincrement>              
            
        )
    }
}
export default Increament;