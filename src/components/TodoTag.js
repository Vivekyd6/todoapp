import React from "react";
import { Form, Input } from "antd";

const { Item } = Form;

const TodoTag = ({ tag, handleTagChange }) => {
  return (
    <Item label="Tag">
      <Input value={tag} onChange={(e) => handleTagChange(e.target.value)} />
    </Item>
  );
};

export default TodoTag;
