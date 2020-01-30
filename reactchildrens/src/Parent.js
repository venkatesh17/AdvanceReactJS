import React,{Children} from 'react'

class Parent extends React.Component {
    render(){
        const buttons = Children.map(this.props.children, child=>(
            <button>
                {child}
            </button>
        ))
        return(
            <div>
                Total Childrens: {Children.count(this.props.children)}<br/>
                <p>Display all childrens:</p> 
                 {this.props.children}                 
                {/* {buttons} */}
            </div>
        )
    }
}
export default Parent;