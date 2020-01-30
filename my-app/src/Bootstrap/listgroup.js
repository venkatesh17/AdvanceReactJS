import React from "react"

const style = {
    "backgroundColor":"red"
}

function Listgroup(params) {
    return(
        <div className="container">
        <br/>
            <ul className="list-group">
                <li className="list-group-item active">First item</li>
                <li className="list-group-item">Second item</li>
                <li className="list-group-item">Third item</li>
                <li className="list-group-item disabled">Fourth item</li>
                <li className="list-group-item">Fifth item</li>
            </ul>
            <hr style={style}/>
            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action">First item</a>
                <a href="#" className="list-group-item list-group-item-action disabled">Second item</a>
                <a href="#" className="list-group-item list-group-item-action">Third item</a>
                <a href="#" className="list-group-item list-group-item-action active">Fourth item</a>
                <a href="#" className="list-group-item list-group-item-action">Fifth item</a>
                <a href="#" className="list-group-item">Sixth item</a>
            </div>
            <hr style={style}/>
            <ul className="list-group  list-group-horizontal">
                <li className="list-group-item">First item</li>
                <li className="list-group-item">Second item</li>
                <li className="list-group-item">Third item</li>
                <li className="list-group-item">Fourth item  <span class="badge badge-primary badge-pill">50</span></li>
                <li className="list-group-item-success list-group-item">Fith item</li>
                {/* <a className="list-group-item list-group-item-action">Sixth item</a> */}
            </ul>
        </div>
    )
}
export default Listgroup;