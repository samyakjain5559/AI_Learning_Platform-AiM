import React from "react"; // ES6 js
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark top">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navMainMenu"
        aria-controls="navMainMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navMainMenu" class="navbar-collapse collapse">
        <div class="navbar-nav ml-auto">
          <Link to="/listLessons" className="nav-item nav-link">
            Lesson List
          </Link>
          <Link to="/addLessons" className="nav-item nav-link">
            Lesson Adder
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
