import React from "react";
import { Form, Select } from "antd";

const { Option } = Select;
const { Item } = Form;

const TodoStatus = ({ status, handleStatusChange }) => {
  return (
    <Item label="Status">
      <Select value={status} onChange={(value) => handleStatusChange(value)}>
        <Option value="OPEN">OPEN</Option>
        <Option value="WORKING">WORKING</Option>
        <Option value="DONE">DONE</Option>
        <Option value="OVERDUE">OVERDUE</Option>
      </Select>
    </Item>
  );
};

export default TodoStatus;
