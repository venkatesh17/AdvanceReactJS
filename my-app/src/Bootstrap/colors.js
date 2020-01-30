import React from "react";

function Color(params) {
    return(
        <div>
            <div className="container">
                <h2>Contextual Colors</h2>
                <p>Use the contextual classes to provide "meaning through colors":</p>
                <p className="text-muted">This text is muted.</p>
                <p className="text-primary">This text is important.</p>
                <p className="text-success">This text indicates success.</p>
                <p className="text-info">This text represents some information.</p>
                <p className="text-warning">This text represents a warning.</p>
                <p className="text-danger">This text represents danger.</p>
                <p className="text-secondary">Secondary text.</p>
                <p className="text-dark">This text is dark grey.</p>
                <p className="text-body">Default body color (often black).</p>
                <p className="text-light">This text is light grey (on white background).</p>
                <p className="text-white">This text is white (on white background).</p>
            </div>
            <hr />
            <div className="container">
                <h2>Contextual Link Colors</h2>
                <p>Hover over the links.</p>
                <a href="#" className="text-muted">Muted link.</a>
                <a href="#" className="text-primary">Primary link.</a>
                <a href="#" className="text-success">Success link.</a>
                <a href="#" className="text-info">Info link.</a>
                <a href="#" className="text-warning">Warning link.</a>
                <a href="#" className="text-danger">Danger link.</a>
                <a href="#" className="text-secondary">Secondary link.</a>
                <a href="#" className="text-dark">Dark grey link.</a>
                <a href="#" className="text-body">Body/black link.</a>
                <a href="#" className="text-light">Light grey link.</a>
            </div>
            <hr/>
            <div class="container">
                <h2>Opacity Text Colors</h2>
                <p>Add 50% opacity for black or white text with the .text-black-50 or .text-white-50 classes:</p>
                <p class="text-black-50">Black text with 50% opacity on white background</p>
                <p class="text-white-50 bg-dark">White text with 50% opacity on black background</p>
            </div>
            <hr/>

            <div className="container">
                <h2>Contextual Backgrounds</h2>
                <p>Use the contextual background classNamees to provide "meaning through colors".</p>
                <p>Note that you can also add a .text-* className if you want a different text color:</p>
                <p className="bg-primary text-white">This text is important.</p>
                <p className="bg-success text-white">This text indicates success.</p>
                <p className="bg-info text-white">This text represents some information.</p>
                <p className="bg-warning text-white">This text represents a warning.</p>
                <p className="bg-danger text-white">This text represents danger.</p>
                <p className="bg-secondary text-white">Secondary background color.</p>
                <p className="bg-dark text-white">Dark grey background color.</p>
                <p className="bg-light text-dark">Light grey background color.</p>
            </div>
        </div>
    )
}

export default Color;