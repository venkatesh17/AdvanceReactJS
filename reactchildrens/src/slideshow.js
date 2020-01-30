import React,{ Component, Children } from "react";
class Slideshow extends Component {
    constructor(props){
        super(props);
        this.state = {
            total: 0,
            current: 0
        }
    }
    componentDidMount(){
        const { children } = this.props;
        this.setState({
            total: Children.count(children)
        })
        this.intervel = setInterval(this.showNext, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.intervel)
    }

    showNext=()=>{
        const { total, current } = this.state;
        this.setState({
            current: current+1 === total ? 0 : current +1
        })
    }
    render(){
        const { children } = this.props
        return(
            <div>
                {/* <div>{bullets}</div> */}
                {Children.toArray(children)[this.state.current] }
            </div>
        )
    }
}
export default Slideshow;