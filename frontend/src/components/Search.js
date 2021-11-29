import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = () => (
  <form action="/" method="get">
    <label htmlFor="header-search">
      <span className="visually-hidden">Search blog posts</span>
    </label>
    <input
      type="text"
      id="header-search"
      placeholder="Search blog posts"
      name="s"
    />
    <button type="submit">Search</button>
  </form>
);

function List() {
  // Used for fetching from backend
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("/searchLessons"); // fetches '/listLessons' url data from port 4000
    const items = await data.json(); // sets fetches as json items
    setItems(items);
  };

  return (
    <section>
      <form action="/" method="get">
        <label htmlFor="header-search">
          <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
          type="text"
          id="header-search"
          placeholder="Search lessons"
          name="s"
        />
        <button type="submit">Search</button>
      </form>
      <div class="container-fluid">
        {/* <h1 class="mt-5">Search</h1> */}
        {items.map((item) => (
          <div class="row padding">
            <div class="alert alert-info rounded-pill" role="alert">
              <i class="fa fa-user mr-2"></i>{" "}
              <i>
                <b>Lesson Name:</b> {item.LessonName} || <b>Author:</b>{" "}
                {item.Author} || <b>Tags:</b> {item.Tag}
              </i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// export default SearchBar;
export default List;
