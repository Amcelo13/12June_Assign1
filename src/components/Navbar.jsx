import React from "react";
import "./Navbar.scss";
import { useState } from "react";
function Navbar({ setSearchValue, setIsSearchEnabled }) {
  const [value, setValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchValue(value);

    setIsSearchEnabled(true);
  };
  const handleChange = (e) => {
    setValue(e.target.value);

    if (e.target.value === "") {
      setIsSearchEnabled(false);
    }
  };
  return (
    <>
      <div className="top">
        <div className="navbar">
          <h1>Products</h1>
        </div>

        <div className="products">
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              value={value}
              placeholder="Search for products"
              id="inp"
              onChange={handleChange}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Navbar;
