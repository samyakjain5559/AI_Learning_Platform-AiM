import styled from "styled-components";
import Badge from "./Badge";
import { cardShadow, hoverEffect } from "./common";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function LessonRecommend() {
  // Used for fetching from backend
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(`/listCourse1`);
    const items = await data.json();
    setItems(items);
  };

  return (
    <RecommendLesson>
      <CardContent>
        <Badge content="Recommended Courses." />
        <div class="panel panel-default scrollable-panel">
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
      </CardContent>
    </RecommendLesson>
  );
}

const RecommendLesson = styled.div`
  border-radius: 1rem;
  height: 100%;
  padding: 1rem;
  background-color: white;
  width: 27.5vw;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 80%;
    margin: 2rem 0;
  }
`;

const CardContent = styled.div`
  margin: 0.8rem;
`;

export default LessonRecommend;
