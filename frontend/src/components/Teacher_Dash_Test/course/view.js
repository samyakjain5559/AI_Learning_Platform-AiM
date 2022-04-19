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
import ReactPlayer from "react-player";

function List() {
  // Used for fetching from backend
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(`/listCourseLesson1`);
    const items = await data.json();
    setItems(items);
  };

  return (
    <section>
      <Navbar />
      <div class="container-fluid">
        <h1>Lessons</h1>
        {items.map((item) => (
          <div class="row padding">
            <div class="alert alert-info rounded-pill" role="alert">
              <i class="fa fa-user mr-2"></i>{" "}
              <i>
                <b>Lesson Name:</b> {item.LessonName} ||{" "}
                <b>Lesson Description:</b>
                <ReactPlayer url={item.description} />
                || <b>Lesson ID:</b> {item.LessonId} ||{" "}
                <b>Belongs in Course ID:</b> {item.CourseId}
              </i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default List;
