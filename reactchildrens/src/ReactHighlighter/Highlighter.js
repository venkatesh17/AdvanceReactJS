import React from 'react';
import Highlighter from 'react-highlight-words';

class Hightlightwords extends React.Component {
    render(){
        return(
            <div>
                <Highlighter 
                    highlightClassName="YourHighlightClass"
                    searchWords={["and", "or", "the"]}
                    activeIndex={"hi"}
                    highlightStyle={{ color: 'red', backgroundColor:"yellow" }}
                    caseSensitive={false}
                    autoEscape={true}
                    textToHighlight="The dog is chasing the cat. Or perhaps they're just playing?"
                />
            </div>
        )
    }
}

export default Hightlightwords;

