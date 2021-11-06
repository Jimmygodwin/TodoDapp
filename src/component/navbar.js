import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './nav.css'


function Navbar() {
    
    return(
        <div id="navsweet"> 
            <nav class="navbar navbar-light  justify-content-between">
                <a class="navbar-brand"><h4>ToDo Dapp</h4></a>
                <form class="form-inline">
                      <p>Thumbs up</p>
                 </form>
            </nav>
        </div>
    )
}

export default Navbar;