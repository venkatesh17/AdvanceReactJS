import React from 'react';
import InCreament from './Increment'

class MouseOver extends React.Component {
    render(){
        return(
            <div>
                <h2 onMouseOver={this.props.increment}>Value - {this.props.number}</h2>
            </div>
        )
    }
}
export default InCreament(MouseOver);

