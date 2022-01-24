import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
function Navbar() {
  // Used for fetching from backend
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("/userinfo"); // fetches '/listLessons' url data from port 4000
    const items = await data.json(); // sets fetches as json items
    setItems(items);
  };

  function handleSearch(e) {
    var search = e.target.value;

    //rn typing into searchbar only saves the search into this variable
    //need to invoke the "searchCourse" query in handler.js with the 'search' as its input
    //then display the courses returned in drop down
  }

  return (
    <NavbarContainer>
      <Text>
        Hello,
        {items.map((item) => (
          <span> {item.fullname.split(" ")[0]}</span>
        ))}
      </Text>
      <InputContainer>
        <Icon>
          <FiSearch />
        </Icon>
        <SearchBar
          type="text"
          onKeyUp={handleSearch}
          placeholder="Search for lessons"
        />
      </InputContainer>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

const Text = styled.h1`
  span {
    font-weight: 500;
    color: #ffffff;
  }
  color: #000712;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-top: 1rem;
  }
`;
const InputContainer = styled.div`
  display: flex;
`;

const Icon = styled.div`
  height: 3rem;
  width: 3rem;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  svg {
    color: #555555;
  }
`;
const SearchBar = styled.input`
  border: none;
  background-color: #ffffff;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  color: #464646;

  &:focus {
    border: none;
    outline: none;
  }
`;

export default Navbar;
