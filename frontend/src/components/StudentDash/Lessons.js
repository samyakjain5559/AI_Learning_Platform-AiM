import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { cardShadow, hoverEffect } from "./common";

function Projects() {
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
    </RecommendLesson>
  );
}

const RecommendLesson = styled.div`
  border-radius: 1rem;
  height: 100%;
  padding: 1rem;
  background-color: white;
  width: 40vw;
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

const LessonsCard = styled.div`
  height: 100%;
  background-color: white;
  margin: 0;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 75%;
    margin-top: 1rem;
  }
`;

const Lesson = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
`;

const Detail = styled.div`
  margin-left: 1rem;
`;

const Title = styled.h3`
  font-weight: 500;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
  }
`;

const SubTitle = styled.h5`
  font-weight: 300;
`;

const AllLessons = styled.h5`
  text-align: end;
  color: #7eb10a;
  cursor: pointer;
`;

export default Projects;
