import React from 'react'
import { ThemeContext, themes } from './theme-context';

class Themedbutton extends React.Component {
    render(){
        let props = this.props;
        let theme = this.context;
        return (
            <div>
                <button 
                    { ...props}
                    style={{backgroundColor: theme.background}}
                />
            </div>
        )
    }
}

Themedbutton.contextType = ThemeContext;

export default Themedbutton;