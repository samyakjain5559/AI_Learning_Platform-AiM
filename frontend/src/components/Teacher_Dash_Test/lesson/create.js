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

function Adder() {
  return (
    <section>
      <Navbar />
      <h1>Create a new lesson!</h1>

      <form method="POST" action="/createLesson1">
        <div class="form-group">
          <label for="lessonNameLabel">Lesson Name</label>
          <input
            type="text"
            class="form-inline"
            name="lessonName"
            placeholder="Enter lesson name"
            required
          />
          <small class="form-text text-muted">
            Make your lesson name short and concise.
          </small>

          <label for="lessonDescriptionLabel"> Lesson description.</label>
          <input
            type="text"
            class="form-inline"
            name="lessonDescription"
            placeholder="Enter lesson description"
            required
          />
          <small class="form-text text-muted">
            Write a description for your lesson that summarizes the lesson
            content.
          </small>

          <label for="lessonCourseIdLabel">Parent Course ID</label>
          <input
            type="text"
            class="form-inline"
            name="lessonCourseId"
            placeholder="Enter the course ID this lesson belongs to."
            required
          />

          <label for="lessonContentLabel">
            Lesson content (Download/access link to PDF, MP4, etc.).
          </label>
          <input
            type="text"
            class="form-inline"
            name="lessonContent"
            placeholder="Enter lesson content link"
            required
          />
          <small class="form-text text-muted">
            Enter the link to download/access the lesson content.
          </small>

          <label for="lessonImageLabel">(Optional) Lesson image link.</label>
          <input
            type="text"
            class="form-inline"
            name="lessonImage"
            placeholder="Enter lesson image link"
          />
          <small class="form-text text-muted">
            Enter the link to the image.
          </small>

          <button type="submit" class="btn btn-primary">
            Create Lesson
          </button>
        </div>
      </form>
    </section>
  );
}
export default Adder;
