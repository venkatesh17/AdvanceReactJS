import React from 'react';

function Progressbar(params) {
    return(
        <div>
            <div className="container">
                <h2>Basic Progress Bar</h2>
                <p>To create a default progress bar, add a .progress className to a container element and add the progress-bar className to its child element. Use the CSS width property to set the width of the progress bar:</p>
                <div className="progress">
                    <div className="progress-bar" style={{width:"70%"}}></div>
                </div><br/>
                <div className="progress">
                    <div className="progress-bar" style={{width:"50%"}}>50%</div>
                </div><br/>
                <div className="progress"  style={{height:"50px"}}>
                    <div className="progress-bar" style={{width:"30%"}}></div>
                </div><br/>
                <div className="progress">
                    <div className="progress-bar bg-success" style={{width:"70%"}}></div>
                </div><br/>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped" style={{width:"40%"}}></div>
                </div><br/>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-info" style={{width:"70%"}}>70%</div>
                </div><br/>
                <div className=" progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width:"60%"}}></div>
                </div><br/>
                <div className="progress">
                    <div className="progress-bar bg-success " style={{width:"40%"}}>
                        Free Space
                    </div>
                    <div className="progress-bar bg-warning " style={{width:"10%"}}>
                        Warning
                    </div>
                    <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated" style={{width:"20%"}}>
                        Danger
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Progressbar;