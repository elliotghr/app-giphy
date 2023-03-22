import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = ({ onSubmit }) => {
  let [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${keyword}`);

  };
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search a gif here..."
        onChange={handleChange}
        type="text"
        value={keyword}
      ></input>
    </form>
  );
};

export default memo(SearchForm);
