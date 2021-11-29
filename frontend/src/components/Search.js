import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

  function Search() {
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

    /*Backend stuff above this line*/

    const [searchTerm, setSearchTerm] = useState('');

    return(
      <div className="search">
        <input type="text" 
        className="searchBar" 
        placeholder="Search lessons..." 
        onChange={event => {setSearchTerm(event.target.value)}}
        />
        {items.filter((val) => {
          if (searchTerm == "") {
            return val;
          } else if (val.LessonName.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
        }).map((item, key) => {
          return (
            <div  className="card searchBoxes">
              <img class="card-img-top" src={item.image} alt="Lesson"></img>
              <div class="card-body">
                <h5 class="card-title">{item.LessonName}</h5>
                <p class="card-text">Description of the lesson (Add to database) {item.tag}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          )
        })}
      </div>
    );
}

// export default SearchBar;
export default Search;
