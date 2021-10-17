import React from 'react'; // ES6 js
import {Link} from 'react-router-dom';
import nav from 'react-bootstrap/Nav';
function Nav() {
    return(
        /*<nav class="navbar navbar-expand-lg navbar-dark bg-dark top">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMainMenu" aria-controls="navMainMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navMainMenu" class="navbar-collapse collapse">
                <div class="navbar-nav ml-auto">
                    <Link to='/' className="nav-item nav-link active">Home</Link>
                    <Link to='/tweets' className="nav-item nav-link">Tweets</Link>
                </div>
            </div>
        </nav>*/

        // href is just to rout
        <ul class="nav">
            <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/tweets">Tweets</a>
            </li>
      </ul> 
    );
}

export default Nav;
