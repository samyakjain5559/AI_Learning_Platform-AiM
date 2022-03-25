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
import Navbar from "../navbar";

function List() {
  // Used for fetching from backend
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("/listCourse1");
    const items = await data.json();
    setItems(items);
  };

  return (
    <section>
      <Navbar />
      <div class="container-fluid">
        <h1>Course List</h1>
        {items.map((item) => (
          <div class="row padding">
            <div class="alert alert-info" role="alert">
              <i class="fa fa-user mr-2"></i>{" "}
              <i>
                <form method="POST" action="/viewCourse1">
                  <b>Course Name:</b> {item.CourseName} ||{" "}
                  <b>Course Description:</b> {item.CourseDescription} ||{" "}
                  <b>Course ID:</b> {item.CourseId}
                  <br />
                  <button
                    name="CourseId"
                    class="btn btn-primary"
                    value={item.CourseId}
                  >
                    View Course
                  </button>
                </form>
              </i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default List;
