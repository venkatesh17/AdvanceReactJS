import React from "react"
import './index.css'

class Responsivedesign extends React.Component {
    render(){
        return(
            <div>
                 <div className="container">
                    <h1>Responsive Containers</h1>
                    <p>Resize the browser window to see the effect.</p>
                </div> 
                <div class="container border">.container-sm</div>
                <div class="container-md mt-3 border">.container-md</div>
                <div class="container-lg mt-3 border">.container-lg</div>
                <div class="container-xl mt-3 border">.container-xl</div>
                <hr/>
                <div className="container-fluid">
                    <h2>--- Grid Basic ---</h2>
                </div>
                
            </div>
        )
    }
}

export default Responsivedesign;