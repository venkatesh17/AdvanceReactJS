import React from 'react';

function Images() {
    return (
        <div>
            <div class="container">
                <h2>Rounded Corners</h2>
                <p>The .rounded class adds rounded corners to an image:</p>            
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMXcnFzoAEA1N0byu3zuWoE-0JXuQXOYuMR_ApWoPFTF091V5d&s" class="rounded img-fluid" alt="Cinque Terre" width="304" height="236" /> 
            </div>
            <hr/>
            <div class="container">
                <h2>Circle</h2>
                <p>The .rounded-circle class shapes the image to a circle:</p>            
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMXcnFzoAEA1N0byu3zuWoE-0JXuQXOYuMR_ApWoPFTF091V5d&s" class="rounded-circle img-fluid" alt="Cinque Terre" width="304" height="236" /> 
             </div>
             <hr/>
             <div class="container">
                <h2>Thumbnail</h2>
                <p>The .img-thumbnail class creates a thumbnail of the image:</p>            
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMXcnFzoAEA1N0byu3zuWoE-0JXuQXOYuMR_ApWoPFTF091V5d&s" class="img-thumbnail" alt="Cinque Terre" width="304" height="236" /> 
              </div>
              <hr/>
              <div class="container">
                    <h2>Aligning images</h2>
                    <p>Use the float classes to float the image to the left or to the right:</p> 
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMXcnFzoAEA1N0byu3zuWoE-0JXuQXOYuMR_ApWoPFTF091V5d&s" class="float-left img-fluid" alt="Paris" width="304" height="236" /> 
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMXcnFzoAEA1N0byu3zuWoE-0JXuQXOYuMR_ApWoPFTF091V5d&s" class="float-right img-fluid" alt="Paris" width="304" height="236" /> 
                </div>
                <hr/>
                <div class="container">
                    <h2>Centered Image</h2>
                    <p>Center an image by adding the utility classes .mx-auto (margin:auto) and .d-block (display:block) to the image:</p> 
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMXcnFzoAEA1N0byu3zuWoE-0JXuQXOYuMR_ApWoPFTF091V5d&s" class="mx-auto d-block" style={{width:"50%"}} /> 
                </div>
        </div>
    )
}

export default Images;