import React from 'react';
import { ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';

function Toolbar(props){
    return(
        <ThemedButton onClick={props.changeTheme}>
            Change Theme
        </ThemedButton>
    )
}

class Contextexamle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            theme: themes.light
        }
    }

    render(){
        return(
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme} />
                </ThemeContext.Provider>
                    <ThemedButton />
            </div>
        )
    }
}
export default Contextexamle;