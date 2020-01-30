import React from 'react';

function Navbar(params) {
    return (
        <div className="container">
            <nav class="navbar navbar-expand-sm bg-light">
                <a class="navbar-brand" href="#">Logo</a>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link 1</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link 2</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link 3</a>
                    </li>
                </ul>
            </nav>
            <br />
            <nav class="navbar  bg-primary navbar-dark ">
                {/* <!-- Brand/logo --> */}

                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link 1</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link 2</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link 3</a>
                    </li>
                </ul>
                <a class="navbar-brand" href="#">Logo</a>
            </nav>
            <br />
            <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <br></br>

            <div class="container-fluid">
                <h3>Basic Navbar Example</h3>
                <p>A navigation bar is a navigation header that is placed at the top of the page.</p>
                <p>The navbar-expand-xl|lg|md|sm
                    class determines when the navbar should stack vertically
            (on extra large, large, medium or small screens).</p>
            </div>
        </div>
    )
}

export default Navbar;