import React, { useState, useEffect } from 'react';
import { Form, Input, DatePicker, Select, Button } from 'antd';
import moment from 'moment';

const { Option } = Select;
const { TextArea } = Input;

const TodoForm = ({ todo, onSave, onCancel }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    form.resetFields();
    if(todo){
    form.setFieldsValue({
      title: todo.title,
      description: todo.description,
      dueDate: moment(todo.dueDate),
      tags: todo.tags,
      status: todo.status
    });
   }
  }, [todo]);

  const handleSave = () => {
    form.validateFields().then(values => {
      setLoading(true);
      onSave({
        ...todo,
        ...values,
        dueDate: values.dueDate.format('YYYY-MM-DD')
      }).finally(() => {
        setLoading(false);
      });
    });
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <Form layout="vertical" form={form}>
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: 'Please enter a title' }, { max: 100, message: 'Title should be less than 100 characters' }]}
      >
        <Input placeholder="Enter a title" />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Please enter a description' }, { max: 1000, message: 'Description should be less than 1000 characters' }]}
      >
        <TextArea rows={4} placeholder="Enter a description" />
      </Form.Item>
      <Form.Item label="Due Date" name="dueDate">
        <DatePicker placeholder="Select a due date" />
      </Form.Item>
      <Form.Item label="Tags" name="tags">
        <Select mode="tags" placeholder="Select or add tags">
          {/* TODO: Render tags options */}
        </Select>
      </Form.Item>
      <Form.Item label="Status" name="status">
        <Select placeholder="Select a status">
          <Option value="OPEN">OPEN</Option>
          <Option value="WORKING">WORKING</Option>
          <Option value="DONE">DONE</Option>
          <Option value="OVERDUE">OVERDUE</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" loading={loading} onClick={handleSave}>
          Save
        </Button>
        <Button style={{ marginLeft: '8px' }} onClick={handleCancel}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TodoForm;
