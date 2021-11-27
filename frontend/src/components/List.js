import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function List() {
    // Used for fetching from backend
    useEffect(() => {
      fetchItems();
    }, []);
  
    const [items, setItems] = useState([]);
  
    const fetchItems = async () => {
      const data = await fetch("/listLessons"); // fetches '/listLessons' url data from port 4000
      const items = await data.json(); // sets fetches as json items
      setItems(items);
    };
  
    return (
      <section>
        <div class="container-fluid">
          <h1 class="mt-5">Lesson List</h1>
          {items.map((item) => (
            <div class="row padding">
              <div class="alert alert-info rounded-pill" role="alert">
                <i class="fa fa-user mr-2"></i>{" "}
                <i>
                  <b>Lesson Name:</b> {item.LessonName} || <b>Author:</b> {item.Author} || <b>Tags:</b> {item.Tag}
                </i>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default List;
  
