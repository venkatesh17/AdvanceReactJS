import React from "react";

class Hellomessage extends React.Component{
    render(){
        return(
            <div>Hello {this.props.name}</div>
        )
    }
}
export default Hellomessage;