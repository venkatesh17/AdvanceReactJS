import React from 'react';

import Parent from "../Parent";
import Slideshows from "../slideshow";
import Reversedname from '../HOC/medium'

function Children({ match}){
    const [count, setCount] = React.useState("abcdef");

  
    return (
        <div className="m-5">
            <Parent>
                <h1>Welcome ...123</h1>
            </Parent> 
            <hr/>
            <Slideshows>
                <img src="https://placekitten.com/200/315"/>
                <img src="https://placekitten.com/200/325"/>
                <img src="https://placekitten.com/200/335"/>
                <img src="https://placekitten.com/200/345"/>
                <img src="https://placekitten.com/200/355"/>
            </Slideshows> 
            <hr/>
            <Reversedname>{count}</Reversedname> 
        </div>
    )
}

export default Children;