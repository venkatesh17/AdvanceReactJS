import React from 'react'

function Cards(params) {
    return(
        <div className="container">
        <br/>
           <div class="card">
                <div class="card-body">Basic card</div>
            </div>
            <hr/>
            <div class="card ">
                <div class="card-header">Header</div>
                <div class="card-body">
                    <h1>Card Body</h1>
                </div> 
                <div class="card-footer">Footer</div>
            </div>
        </div>
    )
}

export default Cards;