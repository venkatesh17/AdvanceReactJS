import React from "react";

function Table(params) {
    return (
        <div>
            <div class="container">
                <h2>Basic Table</h2>
                <p>The .table class adds basic styling (light padding and horizontal dividers) to a table:</p>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                        </tr>
                        <tr>
                            <td>Mary</td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                        </tr>
                        <tr>
                            <td>July</td>
                            <td>Dooley</td>
                            <td>july@example.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr />
            <div class="container">
                <h2>Striped Rows</h2>
                <p>The .table-striped class adds zebra-stripes to a table:</p>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                        </tr>
                        <tr>
                            <td>Mary</td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                        </tr>
                        <tr>
                            <td>July</td>
                            <td>Dooley</td>
                            <td>july@example.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr />
            <div class="container">
                <h2>Bordered Table</h2>
                <p>The .table-bordered class adds borders on all sides of the table and the cells:</p>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                        </tr>
                        <tr>
                            <td>Mary</td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                        </tr>
                        <tr>
                            <td>July</td>
                            <td>Dooley</td>
                            <td>july@example.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr />

            <div class="container">
                <h2>Hover Rows</h2>
                <p>The .table-hover class enables a hover state (grey background on mouse over) on table rows:</p>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                        </tr>
                        <tr>
                            <td>Mary</td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                        </tr>
                        <tr>
                            <td>July</td>
                            <td>Dooley</td>
                            <td>july@example.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr />
            <div class="container">
                <h2>Black/Dark Table</h2>
                <p>The .table-dark class adds a black background to the table:</p>
                <table class="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                        </tr>
                        <tr>
                            <td>Mary</td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                        </tr>
                        <tr>
                            <td>July</td>
                            <td>Dooley</td>
                            <td>july@example.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr />

            <div class="container">
                <h2>Dark Striped Table</h2>
                <p>Combine .table-dark and .table-striped to create a dark, striped table:</p>
                <table class="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                        </tr>
                        <tr>
                            <td>Mary</td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                        </tr>
                        <tr>
                            <td>July</td>
                            <td>Dooley</td>
                            <td>july@example.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr />

            <div class="container">
                <h2>Borderless Table</h2>
                <p>The .table-borderless class removes borders from the table:</p>
                <table class="table table-borderless">
                    <thead className="thead-dark">
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                        </tr>
                        <tr>
                            <td>Mary</td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                        </tr>
                        <tr>
                            <td>July</td>
                            <td>Dooley</td>
                            <td>july@example.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr />

            <div class="container">
                <h2>Contextual Classes</h2>
                <p>Contextual classes can be used to color the table, table rows or table cells. The classes that can be used are: .table-primary, .table-success, .table-info, .table-warning, .table-danger, .table-active, .table-secondary, .table-light and .table-dark:</p>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Default</td>
                            <td>Defaultson</td>
                            <td>def@somemail.com</td>
                        </tr>
                        <tr class="table-primary">
                            <td>Primary</td>
                            <td>Joe</td>
                            <td>joe@example.com</td>
                        </tr>
                        <tr class="table-success">
                            <td>Success</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                        </tr>
                        <tr class="table-danger">
                            <td>Danger</td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                        </tr>
                        <tr class="table-info">
                            <td>Info</td>
                            <td>Dooley</td>
                            <td>july@example.com</td>
                        </tr>
                        <tr class="table-warning">
                            <td>Warning</td>
                            <td>Refs</td>
                            <td>bo@example.com</td>
                        </tr>
                        <tr class="table-active">
                            <td>Active</td>
                            <td>Activeson</td>
                            <td>act@example.com</td>
                        </tr>
                        <tr class="table-secondary">
                            <td>Secondary</td>
                            <td>Secondson</td>
                            <td>sec@example.com</td>
                        </tr>
                        <tr class="table-light">
                            <td>Light</td>
                            <td>Angie</td>
                            <td>angie@example.com</td>
                        </tr>
                        <tr class="table-dark text-dark">
                            <td>Dark</td>
                            <td>Bo</td>
                            <td>bo@example.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr />
            <div class="container">
                <h2>Small Table</h2>
                <p>The .table-sm class makes the table smaller by cutting cell padding in half:</p>
                <table class="table table-bordered table-sm">
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                        </tr>
                        <tr>
                            <td>Mary</td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                        </tr>
                        <tr>
                            <td>July</td>
                            <td>Dooley</td>
                            <td>july@example.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr />
            <div class="container">
                <h2>Responsive Table</h2>
                <p>The .table-responsive class creates a responsive table which will scroll horizontally on screens that are less than 992px wide (if needed). When viewing on anything larger than 992px, there is no difference:</p>

                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Age</th>
                                <th>City</th>
                                <th>Country</th>
                                <th>Sex</th>
                                <th>Example</th>
                                <th>Example</th>
                                <th>Example</th>
                                <th>Example</th>
                                <th>Example</th>
                                <th>Example</th>
                                <th>Example</th>
                                <th>Example</th>
                                <th>Example</th>
                                <th>Example</th>
                                <th>Example</th>
                                <th>Example</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Anna</td>
                                <td>Pitt</td>
                                <td>35</td>
                                <td>New York</td>
                                <td>USA</td>
                                <td>Female</td>
                                <td>Yes</td>
                                <td>Yes</td>
                                <td>Yes</td>
                                <td>Yes</td>
                                <td>Yes</td>
                                <td>Yes</td>
                                <td>Yes</td>
                                <td>Yes</td>
                                <td>Yes</td>
                                <td>Yes</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    )
}

export default Table;