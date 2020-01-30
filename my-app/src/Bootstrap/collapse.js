import React from 'react';

function Collapse(params) {
    return(
        <div className="container">
            <a href="#demo" data-toggle="collapse">Collapsible</a>

            <div id="demo" class="collapse">
            Lorem ipsum dolor text....
            </div>
            <br/>
            <a href="#demo2" data-toggle="collapse"> Click on</a>
            <div id="demo2" className="collapse">
            CSS. @import "susy" Add. About Susy. Susy is a grid framework.
             @import "breakpoint" Add. About Breakpoint. @import "color-schemer" Add. 
             About Color Schemer. @import "bourbon@5.*" Add. About Bourbon. 
             @import "neat@2.*" Add. About Neat. @import "modularscale@3.*" Add.
              About Modular Scale.
            </div>
        </div>
    )
}

export default Collapse;
