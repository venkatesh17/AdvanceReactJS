import React from "react";

function Dropdown(params) {
    return(
        <div className="container">
            <br/>
            <div class="dropdown">
            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                Dropdown button
            </button>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Link 1</a>
                <a class="dropdown-item" href="#">Link 2</a>
                <a class="dropdown-item" href="#">Link 3</a>
            </div>
            </div>
            <hr/>
            <div className="dropdown">  
                <button type="button" data-toggle="dropdown" className="btn btn-success dropdown-toggle">
                    Dropdown button
                </button>
                <div className="dropdown-menu">
                    <h5 className="dropdown-header">Links</h5>
                    <a className="dropdown-item" href="#">item 1</a>
                    <a href="#" className="dropdown-item"> item 2</a>
                    <a href="#" className="dropdown-item">item 3</a>
                    <a href="#" className="dropdown-item active">item 4</a>
                    <div className="dropdown-divider"/>
                    <a href="#" className="dropdown-item">another link</a>
                    <a href="#" className="dropdown-item  disabled"> Disabled</a>
                </div>
            </div>
            <div>
            <h2>Dropdown Split Buttons</h2>
            <div class="btn-group dropdown dropright">
                <button type="button" class="btn btn-primary">Primary</button>
                <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
                </button>
                <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Link 1</a>
                <a class="dropdown-item" href="#">Link 2</a>
                </div>
            </div> &emsp;
            
            <div class="btn-group dropleft">
                <button type="button" class="btn btn-secondary">Secondary</button>
                <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
                </button>
                <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Link 1</a>
                <a class="dropdown-item" href="#">Link 2</a>
                </div>
            </div>
            &emsp;
            <div class="btn-group dropup">
                <button type="button" class="btn btn-success">Success</button>
                <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
                </button>
                <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Link 1</a>
                <a class="dropdown-item" href="#">Link 2</a>
                </div>
            </div>
            &emsp;
            <div class="btn-group">
                <button type="button" class="btn btn-info">Info</button>
                <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
                </button>
                <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Link 1</a>
                <a class="dropdown-item" href="#">Link 2</a>
                </div>
            </div>
            &emsp;
            <div class="btn-group">
                <button type="button" class="btn btn-warning">Warning</button>
                <button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
                </button>
                <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Link 1</a>
                <a class="dropdown-item" href="#">Link 2</a>
                </div>
            </div>
            &emsp;
            <div class="btn-group-vertical">
            <button type="button" class="btn btn-primary">Apple</button>
            <button type="button" class="btn btn-primary">Samsung</button>
                <button type="button" class="btn btn-danger">Danger</button>
                <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
                </button>
                <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Link 1</a>
                <a class="dropdown-item" href="#">Link 2</a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Dropdown;