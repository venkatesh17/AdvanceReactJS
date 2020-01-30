import React from 'react';
import InCreament from './Increment'

class ButtonClick extends React.Component {
    render(){
        return(
            <div>
                <button onClick={this.props.increment}>Number - {this.props.number}</button><br/>
                {React.Children.count(this.props.children)}
                <h2>abcdef</h2>
            </div>
        )
    }
}
export default InCreament(ButtonClick);

