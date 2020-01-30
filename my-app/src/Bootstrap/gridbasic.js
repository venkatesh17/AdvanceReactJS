import React from "react";

function Gridbasics() {
    return(
        <div>
            <h1>Three Equal Columns</h1>
            <div className="row" style={{backgroundColor:"blue"}}>
                <div className="col">.col</div>
                <div className="col">.col</div>
                <div className="col">.col</div>
            </div>
            <hr/>
            <h1>Responsive Columns</h1>
            <div className="row">
                <div className="col-sm-3">col-sm-3</div>
                <div className="col-sm-3">col-sm-6</div>
                <div className="col-sm-3">col-sm-9</div>
                <div className="col-sm-3">col-sm-12</div>
            </div>
            <hr/>
            <h1>Two Unequal Responsive Columns</h1>
            <div className="row">
                <div className="col-sm-4">col-sm-4</div>
                <div className="col-sm-8">col-sm-8</div>
            </div>
        </div>
    )
}

export default Gridbasics;