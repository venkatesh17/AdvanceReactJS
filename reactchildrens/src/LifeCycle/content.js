import React from 'react';

class Content extends React.Component{
	constructor(props){
		super(props);
		this.state = {
				value:100,
				counter2: 10

		}
	}

    componentWillMount() 
	{ 
		console.log("componentWillMount()"); 
	} 

	componentDidMount() 
	{ 
		console.log("componentDidMount()"); 
	} 
    shouldComponentUpdate(nextProps, nextState) 
	{ 
		console.log("shouldComponentUpdate()"); 
		return true; 
	} 

	componentWillUpdate() 
	{ 
		console.log("componentWillUpdate()"); 
	} 

	componentDidUpdate() 
	{ 
		console.log("componentDidUpdate()"); 
    } 

    componentWillUnmount(){
        console.log("componentWillUnmount")
	}
	handleClick = (e)=>{
		this.props.data(this.state.counter2)
	}
    
    render(){
        return(
            <div>
				<p>See the Life cycle Content In Dev console. </p> 
				  <p>{this.props.myResult}</p>
				  <p>{ this.state.value}</p>
				  <button 
				  onClick={(e)=>this.handleClick(e)}>Click mee</button>
			</div>
        )
    }
}

export default Content;