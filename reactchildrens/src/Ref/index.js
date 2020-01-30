import React from 'react';

const Myinput = (props)=>{
    return(
    <input 
        type="text"
        ref = {props.inputRef}
    />
    )
}
const Funccomponent = ()=>{
    let inputRef = null
    const onClick=()=>{
        inputRef.focus()
    }
    return (
        <div>
            <span>My Input:</span>
            <Myinput 
                inputRef = {(input)=>{inputRef = input}}
            />
            <input 
                type="submit"
                value = "submit"
                onClick = {onClick}
            />
        </div>
        
    )
}


class Refexample extends React.Component {

    componentDidMount(){
        this.firstname.focus(); 
     }
    
    onClick=()=>{
        alert(`Hi ${this.firstname.value} welcome..!`)
    }

    onKeyUp =(target, e)=>{
        if(e.keyCode === 13){
            switch(target){
                case 'firstname':
                    this.lastname.focus()
                    return;
                case 'lastname':
                    this.age.focus()
                    return;
                case 'age': 
                    this.submit.focus()
                    return;
                default:
                    this.firstname.focus()
                    return;
            }
        }
    }
    render(){
        return(
            <div>
                <div>
                    <Funccomponent />
                    <span>First Name:</span>
                    <input 
                        type="text" 
                        ref={(input)=>this.firstname = input} 
                        onKeyUp = {this.onKeyUp}
                        onKeyUp = {this.onKeyUp.bind(this,'firstname')}/>
                </div>
                <div>
                    <span>Last Name:</span>
                    <input 
                        type="text"
                        ref={(input)=>this.lastname = input} 
                        onKeyUp = {this.onKeyUp.bind(this, 'lastname')}/>
                </div>
                <div>
                    <span>Age:</span>
                    <input 
                        type="text"
                        ref={(input)=>this.age = input} 
                        onKeyUp = {this.onKeyUp.bind(this,'age')} />
                </div>
                <div>
                    <input 
                        type="submit" 
                        value="submit" 
                        ref={(input)=>this.submit=input}
                        onKeyUp = {this.onKeyUp.bind(this,'submit')}
                        onClick={this.onClick} />
                </div>
            </div>
        )
    }
}

export default Refexample;