import React from "react"

function Buttons(params) {
    return(
        <div>
            <div className="container">
                <h2>Button Styles</h2>
                <button type="button" className="btn border m-1">Basic</button>
                <button type="button" className="btn btn-default border m-1">Default</button>
                <button type="button" className="btn btn-primary border m-1">Primary</button>
                <button type="button" className="btn btn-success border m-1">Success</button>
                <button type="button" className="btn btn-info border m-1">Info</button>
                <button type="button" className="btn btn-warning border m-1">Warning</button>
                <button type="button" className="btn btn-danger border m-1">Danger</button>
                <button type="button" className="btn btn-link border m-1">Link</button>      
            </div><hr/>
            <div className="container">
                <h2>Button Tags</h2>
                <a href="#" className="btn btn-info" role="button">Link Button</a>
                <button type="button" className="btn btn-info m-1">Button</button>
                <input type="button" className="btn btn-info m-1" value="Input Button" />
                <input type="submit" className="btn btn-info m-1" value="Submit Button" />
            </div><hr/>
            <div className="container">
                <h2>Button Sizes</h2>
                <button type="button" className="btn btn-primary btn-lg m-1">Large</button>
                <button type="button" className="btn btn-primary m-1" >Normal</button>    
                <button type="button" className="btn btn-primary btn-sm m-1">Small</button>
                <button type="button" className="btn btn-primary btn-xs m-1">XSmall</button>
            </div><hr/>
            <div className="container">
                <h2>Block Level Buttons</h2>
                <button type="button" className="btn btn-primary btn-block">Button 1</button>
                <button type="button" className="btn btn-default btn-block border">Button 2</button>

                <h2>Large Block Level Buttons</h2>
                <button type="button" className="btn btn-primary btn-lg btn-block">Button 1</button>
                <button type="button" className="btn btn-default btn-lg btn-block border">Button 2</button>

                <h2>Small Block Level Buttons</h2>
                <button type="button" className="btn btn-primary btn-sm btn-block">Button 1</button>
                <button type="button" className="btn btn-default btn-sm btn-block border">Button 2</button>
            </div><hr/>
            <div className="container">
                <h2>Button States</h2>
                <button type="button" className="btn btn-primary m-1">Primary Button</button>
                <button type="button" className="btn btn-primary active m-1">Active Primary</button>
                <button type="button" className="btn btn-primary disabled m-1">Disabled Primary</button>
                <button type="button" className="btn btn-success m-1">Success Button</button>
                <button type="button" className="btn btn-success active m-1">Active Success</button>
                <button type="button" className="btn btn-success disabled m-1">DisabledSuccess</button>
            </div><hr/>
            <div className="container">
                <h2>Button Group</h2>
                <p>The .btn-group className creates a button group:</p>
                <div className="btn-group">
                    <button type="button" className="btn btn-primary">Apple</button>
                    <button type="button" className="btn btn-success">Samsung</button>
                    <button type="button" className="btn btn-warning">Sony</button>
                </div>
            </div><hr/>
            <div className="container">
                <h2>Button Group</h2>
                <p>The .btn-group-vertical className creates a button group:</p>
                <div className="btn-group-vertical">
                    <button type="button" className="btn btn-primary">Apple</button>
                    <button type="button" className="btn btn-success">Samsung</button>
                    <button type="button" className="btn btn-warning">Sony</button>
                </div>
            </div><hr/>
            <div class="container">
                <h2>Justified Button Groups</h2>
                <p>To span the entire width of the screen, use the .btn-group-justified class:</p>
                <div class="btn-group btn-group-justified" style={{display: "flex"}}>
                    <a href="#" class="btn btn-primary">Apple</a>
                    <a href="#" class="btn btn-primary">Samsung</a>
                    <a href="#" class="btn btn-primary">Sony</a>
                </div>
            </div><hr/>
                <div class="container">
                <h2>Justified Button Groups</h2>
                <p>To span the entire width of the screen, use the .btn-group-justified class:</p>
                <div class="btn-group .btn-group-justified" style={{display: "flex"}}>
                    <a href="#" class="btn btn-primary">Apple</a>
                    <a href="#" class="btn btn-primary">Samsung</a>
                </div>
            </div><hr/>
            <div class="container">
                <h2>Nesting Button Groups</h2>
                <p>Nest button groups to create drop down menus:</p>
                <div class="btn-group">
                    <button type="button" class="btn btn-primary">Apple</button>
                    <button type="button" class="btn btn-primary">Samsung</button>
                    <div class="btn-group">
                    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                    Sony <span class="caret"></span></button>
                    <ul class="dropdown-menu" role="menu">
                        <li><a href="#">Tablet</a></li>
                        <li><a href="#">Smartphone</a></li>
                    </ul>
                    </div>
                </div>
            </div><hr/>
            <div className="container">
                <div className="btn-group">
                    <button className="btn btn-primary">One</button>
                    <button className="btn btn-primary">Two</button>
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                            Three <span className="caret"></span>
                            <ul className="dropdown-menu">
                                <li><a href="#">Four</a></li>
                                <li><a href="#">Five</a></li>
                            </ul>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Buttons;
