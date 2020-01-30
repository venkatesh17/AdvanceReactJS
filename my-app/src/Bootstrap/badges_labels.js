import React from "react";

function Badges(params) {
    return(
        <div>

            <div className="container">
                <h2>Badges</h2>
                <a href="#">News <span className="badge badge-info">5</span></a><br />
                <a href="#">Comments <span className="badge badge-warning">10</span></a><br />
                <a href="#">Updates <span className="badge badge-light">2</span></a><br/>
                <button type="button" className="btn btn-primary">Primary <span className="badge badge-danger">7</span></button>
                <hr/>
                <h1>Example heading <span className="m-1 badge badge-secondary">New</span></h1>
                <h2>Example heading <span className="m-1 badge badge-secondary">New</span></h2>
                <h3>Example heading <span className="m-1 badge badge-secondary">New</span></h3>
                <h4>Example heading <span className="m-1 badge badge-secondary">New</span></h4>
                <h5>Example heading <span className="m-1 badge badge-secondary">New</span></h5>
                <h6>Example heading <span className="m-1 badge badge-secondary">New</span></h6>
                <span className="m-1 badge badge-primary">Primary</span>
                <span className="m-1 badge badge-secondary">Secondary</span>
                <span className="m-1 badge badge-success">Success</span>
                <span className="m-1 badge badge-danger">Danger</span>
                <span className="m-1 badge badge-warning">Warning</span>
                <span className="m-1 badge badge-info badge-pill">Info</span>
                <span className="m-1 badge badge-light badge-pill">Light</span>
                <span className="m-1 badge badge-dark badge-pill">Dark</span>

            </div>
        </div>
    )
}

export default Badges;