import React from "react";
import { Input } from "antd";

const { Search } = Input;

const TodoSearch = ({ handleSearch }) => {
  return (
    <Search
      placeholder="Search tasks"
      onSearch={(value) => handleSearch(value)}
      enterButton
    />
  );
};

export default TodoSearch;
