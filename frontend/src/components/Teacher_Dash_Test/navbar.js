import React from "react";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <section>
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
            <Link to="/lesson/list" className="nav-item nav-link">
              Lesson List
            </Link>
            <Link to="/lesson/create" className="nav-item nav-link">
              Lesson Create
            </Link>
            <Link to="/course/create" className="nav-item nav-link">
              Course Create
            </Link>
            <Link to="/course/list" className="nav-item nav-link">
              Course List
            </Link>
            <Link to="/" className="nav-item nav-link">
              Sign_Out
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
}
export default navbar;
