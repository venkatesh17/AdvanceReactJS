import React from 'react';

function Containers() {
    return(
        <div>
            <div class="container">
                <h1>Fixed Container</h1>
                <p>My First Bootstrap Page</p>
                <p>This is some text.</p> 
            </div>
            <hr/>
            <div class="container-fluid">
                <h1>Fluid Container</h1>
                <p>My First Bootstrap Page</p>
                <p>This is some text.</p> 
            </div>
            <hr/>
            <div className="container pt-3">
                <h1>Container Padding</h1>
                <p>This is some text.</p>
            </div>
            <div className="container p-3 my-3 border">
                <h1>My First Bootstrap Page</h1>
                <p>This container has a border and some extra padding and margins.</p>
            </div>
            <div class="container p-3 my-3 bg-dark text-white">
                <h1>My First Bootstrap Page</h1>
                <p>This container has a dark background color and a white text, and some extra padding and margins.</p>
            </div>
            <div class="container p-3 my-3 bg-primary text-white">
                <h1>My First Bootstrap Page</h1>
                <p>This container has a blue background color and a white text, and some extra padding and margins.</p>
            </div>

            <div class="container">
                <h1>Responsive Containers</h1>
                <p>Resize the browser window to see the effect.</p>
            </div>

            <div class="container-sm border">.container-sm</div>
            <div class="container-md mt-3 border">.container-md</div>
            <div class="container-lg mt-3 border">.container-lg</div>
            <div class="container-xl mt-3 border">.container-xl</div>

        </div>
    )
}

export default Containers;