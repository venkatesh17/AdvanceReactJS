import React from "react";
import Cards from "./card";

function Nav(params) {
    return(
        <div className="container">
        <ul className="nav">
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
            </li>
        </ul><hr/>
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
            </li>
        </ul>
        <hr/>
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
            </li>
        </ul><hr/>
        <ul className="nav flex-column">
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
            </li>
        </ul><hr/>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
            </li>
        </ul><hr/>
        <ul className="nav nav-pills" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#about">Link</a>
            </li>
            <li className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Dropdown</a>
            <div className="dropdown-menu">
                <a href="#" className="dropdown-item">List 1</a>
                <a href="#" className="dropdown-item">List 2</a>
                <a href="#" className="dropdown-item">List 3</a>
            </div>
                
            </li>
            <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#home">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
            </li>
        </ul>
        <div className="tab-content">
            <div id="home" className="tab-pane">
            React-D3-Library will compile your code into React components,
            and it also comes with ... Abstract: 
            React js is an open source declarative and flexible JavaScript library from ...
            If you have a lot of JavaScript and React experience, move along.
            </div>
            <div id="about" className="tab-pane active">
            React js is an open source declarative and flexible JavaScript library from ...
            If you have a lot of JavaScript and React experience, move along.
            </div>
        </div>
        </div>
    )
}
export default Nav;