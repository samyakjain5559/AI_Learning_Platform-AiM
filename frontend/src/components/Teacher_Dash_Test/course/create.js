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
  return (
    <section>
      <h1>Create a new course!</h1>

      <form method="POST" action="/createCourse1">
        <div class="form-group">
          <label for="courseNameLabel">Course name</label>
          <input
            type="text"
            class="form-inline"
            name="courseName"
            placeholder="Enter course name"
            required
          />
          <small id="emailHelp" class="form-text text-muted">
            Make your course name short and concise.
          </small>
          <label for="courseDescriptionLabel">Course description.</label>
          <input
            type="text"
            class="form-inline"
            name="courseDescription"
            placeholder="Enter course description"
            required
          />
          <small id="emailHelp" class="form-text text-muted">
            Write a description for your course that summarizes the course
            content.
          </small>
          <button type="submit" class="btn btn-primary">
            Create Course
          </button>
        </div>
      </form>
    </section>
  );
}
export default Adder;
