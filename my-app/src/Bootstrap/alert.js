import React from 'react';

function Alert(params) {
    return (
        <div>
            <div class="container">
                <h2>Alerts</h2>
                <p>Alerts are created with the .alert class, followed by a contextual color classes:</p>
                <div class="alert alert-success">
                    <strong>Success!</strong> This alert box could indicate a successful or positive action.
                </div>
                <div class="alert alert-info">
                    <strong>Info!</strong> This alert box could indicate a neutral informative change or action.
                </div>
                <div class="alert alert-warning">
                    <strong>Warning!</strong> This alert box could indicate a warning that might need attention.
                </div>
                <div class="alert alert-danger">
                    <strong>Danger!</strong> This alert box could indicate a dangerous or potentially negative action.
                </div>
                <div class="alert alert-primary">
                    <strong>Primary!</strong> Indicates an important action.
                </div>
                <div class="alert alert-secondary">
                    <strong>Secondary!</strong> Indicates a slightly less important action.
                </div>
                <div class="alert alert-dark">
                    <strong>Dark!</strong> Dark grey alert.
                </div>
                <div class="alert alert-light">
                    <strong>Light!</strong> Light grey alert.
                </div>
            </div>
            <hr />
            <div class="container">
                <h2>Alert Links</h2>
                <p>Add the alert-link class to any links inside the alert box to create "matching colored links".</p>
                <div class="alert alert-success">
                    <strong>Success!</strong> You should <a href="#" class="alert-link">read this message</a>.
                </div>
                <div class="alert alert-info">
                    <strong>Info!</strong> You should <a href="#" class="alert-link">read this message</a>.
                </div>
                <div class="alert alert-warning">
                    <strong>Warning!</strong> You should <a href="#" class="alert-link">read this message</a>.
                </div>
                <div class="alert alert-danger">
                    <strong>Danger!</strong> You should <a href="#" class="alert-link">read this message</a>.
                </div>
                <div class="alert alert-primary">
                    <strong>Primary!</strong> You should <a href="#" class="alert-link">read this message</a>.
                </div>
                <div class="alert alert-secondary">
                    <strong>Secondary!</strong> You should <a href="#" class="alert-link">read this message</a>.
                </div>
                <div class="alert alert-dark">
                    <strong>Dark!</strong> You should <a href="#" class="alert-link">read this message</a>.
                </div>
                <div class="alert alert-light">
                    <strong>Light!</strong> You should <a href="#" class="alert-link">read this message</a>.
                </div>
            </div><hr />
            <div class="container">
                <h2>Alerts</h2>
                <p>The a element with class="close" and data-dismiss="alert" is used to close the alert box.</p>
                <p>The alert-dismissible class adds some extra padding to the close button.</p>
                <div className="alert alert-success alert-dismissible ">
                    <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>Success!</strong> This alert box could indicate a successful or positive action.
                </div>
                <div className="alert alert-info alert-dismissible">
                    <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>Info!</strong> This alert box could indicate a neutral informative change or action.
                </div>
                <div className="alert alert-warning alert-dismissible .fade .in">
                    <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>Warning!</strong> This alert box could indicate a warning that might need attention.
                </div>
                <div className="alert alert-danger alert-dismissible .fade .in">
                    <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>Danger!</strong> This alert box could indicate a dangerous or potentially negative action.
                </div>
            </div><hr />
            <div class="container">
                <h2>Animated Alerts</h2>
                <p>The .fade and .in classes adds a fading effect when closing the alert message.</p>
                <div class="alert alert-success alert-dismissible .fade .in">
                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>Success!</strong> This alert box could indicate a successful or positive action.
  </div>
                <div class="alert alert-info alert-dismissible .fade .in">
                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>Info!</strong> This alert box could indicate a neutral informative change or action.
  </div>
                <div class="alert alert-warning alert-dismissible .fade .in">
                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>Warning!</strong> This alert box could indicate a warning that might need attention.
  </div>
                <div class="alert alert-danger alert-dismissible .fade .in">
                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>Danger!</strong> This alert box could indicate a dangerous or potentially negative action.
  </div>
            </div>
        </div>
    )
}

export default Alert;