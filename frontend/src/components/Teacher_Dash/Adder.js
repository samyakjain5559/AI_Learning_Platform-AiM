/*The MIT License (MIT)
Copyright (c) 2011-2018 Twitter, Inc.
Copyright (c) 2011-2018 The Bootstrap Authors
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.*/
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Adder() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("/getlessons"); // /gettweets and /adtweet is running on port of backend
    const items = await data.json();
    setItems(items);
  };

  return (
    // first display this send post request, ie value with name "tweetinput" is published at "/addTweet" URL
    // Then later in backend in handler class we use post methord to get the "req" and value using "tweetInput"

    // Need to implement this search from DB and display matched lessons
    <section>
      <div>
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
              <Link to="/" className="nav-item nav-link">
                Sign_Out
              </Link>
            </div>
          </div>
        </nav>
        <h1 class="mt-5">Enter Course information</h1>
        <form method="POST" action="/addCourse">
          <div class="form-row">
            <div class="col">
              Course Name
              <input
                name="lessonName"
                type="text"
                class="form-control"
                placeholder="i.e. ENG4000, Introduction to Calculus"
              />
            </div>
            <div class="col">
              Course Tags
              <input
                name="lessonTag"
                type="text"
                class="form-control"
                placeholder="i.e. Physics, Math, Engineering"
              />
            </div>
            <div class="col">
              Course Media
              <input
                name="lessonMedia"
                type="text"
                class="form-control"
                placeholder="i.e. PDF, MP4, etc."
              />
            </div>
            <div class="col">
              Course Image
              <input
                name="courseimage"
                type="text"
                class="form-control"
                placeholder="i.e. google image link"
              />
            </div>
            <div class="col">
              Course Description
              <input
                name="coursedescription"
                type="text"
                class="form-control"
                placeholder="i.e. Summary of the course"
              />
            </div>
          </div>
          <input type="submit" value="Send" class="btn btn-primary mb-2" />
        </form>
        {items.map((item) => (
          <div class="container-fluid p-3 w-50">
            <div class="card-deck">
              <div class="card">
                <div class="card-body p-1">
                  <p class="card-text">
                    <i>lesson added -- {item.lessons}</i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Adder;