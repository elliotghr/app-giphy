import React, { memo, useState } from "react";

const SearchForm = ({ onSubmit }) => {
  let [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ keyword });
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
