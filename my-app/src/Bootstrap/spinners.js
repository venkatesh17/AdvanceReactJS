import React from 'react';

function Spinners(params) {
    return  (
        <div className="container">
            <div class="spinner-border">&nbsp;Hi</div>
            <hr/>
            <div class="spinner-border text-muted">Muted</div><br/>
            &emsp;<div class="spinner-border text-primary">Primary</div><br/>
            &emsp;&emsp;<div class="spinner-border text-success">Success</div><br/>
            &emsp;&emsp;&emsp;<div class="spinner-border text-info">info</div><br/>
            &emsp;&emsp;&emsp;&emsp;<div class="spinner-border text-warning">warning</div><br/>
            &emsp;&emsp;&emsp;&emsp;&emsp;<div class="spinner-border text-danger">danger</div><br/>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<div class="spinner-border text-secondary">secondary</div><br/>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<div class="spinner-border text-dark">dark</div><br/>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<div class="spinner-border text-light">light</div><br/>
            <hr/>
            <div class="spinner-grow text-muted">Muted</div><br/>
            &emsp;<div class="spinner-grow text-primary">Primary</div><br/>
            &emsp;&emsp;<div class="spinner-grow text-success">Success</div><br/>
            &emsp;&emsp;&emsp;<div class="spinner-grow text-info">info</div><br/>
            &emsp;&emsp;&emsp;&emsp;<div class="spinner-grow text-warning">warning</div><br/>
            &emsp;&emsp;&emsp;&emsp;&emsp;<div class="spinner-grow text-danger">danger</div><br/>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<div class="spinner-grow text-secondary">secondary</div><br/>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<div class="spinner-grow text-dark">dark</div><br/>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<div class="spinner-grow text-light">light</div><br/>
          <hr/>
            <button class="btn btn-primary">
            <span class="spinner-border spinner-border">1</span>
            </button>
            &emsp;
            <button class="btn btn-primary">
            <span class="spinner-border spinner-border-sm">2</span>&ensp;
            Loading..
            </button>
            &emsp;
            <button class="btn btn-success">
            <span class="spinner-border spinner-border">3</span>&ensp;
            Loading..
            </button>
            &emsp;
            <button class="btn btn-primary" disabled>
            <span class="spinner-grow spinner-grow-sm">4</span>&ensp;
            Loading..
            </button>
        </div>

    )
}
export default Spinners;