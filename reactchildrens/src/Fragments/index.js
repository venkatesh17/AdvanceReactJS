import React , {Fragment}from 'react'

const Temp1 = () => {
    return(
        [
            <div key="1">Array</div>,
            <div key="2">Hellow</div>
        ]
    )
}
const Temp = () => {
    return(
        <div>
            <div>Hi</div>
            <div>Hellow</div>
        </div>
    )
}

const Temp2 = (props) => {
    return(
        <Fragment>
           {
               props.greetings == "Welcome" ? "Correct" : "Wrong"
           }
        </Fragment>
    )
}

class Reactfreagments extends  React.Component {
    render(){
        return(
            <div>
                <Temp /> <br/> <Temp1 />
                <Temp2 greetings="Welcome" />
            </div>
        )
    }
}  

export default Reactfreagments;