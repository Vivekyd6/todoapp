import React from 'react';
import { Table } from 'antd';

const TodoTable = ({ tasks }) => {
  // Columns configuration for our table
  const columns = [
    {
      title: 'Timestamp Created',
      dataIndex: 'timestamp',
      key: 'timestamp',
      sorter: (a, b) => a.timestamp - b.timestamp,
      render: (text) => <span>{new Date(text).toLocaleString()}</span>,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      sorter: (a, b) => a.description.localeCompare(b.description),
    },
    {
      title: 'Due Date',
      dataIndex: 'dueDate',
      key: 'dueDate',
      sorter: (a, b) => a.dueDate - b.dueDate,
      render: (text) => <span>{text ? new Date(text).toLocaleDateString() : '-'}</span>,
    },
    {
      title: 'Tag',
      dataIndex: 'tags',
      key: 'tags',
      filters: [],
      onFilter: (value, record) => record.tags.includes(value),
      render: (tags) => (
        <>
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      sorter: (a, b) => a.status.localeCompare(b.status),
    },
  ];

  return <Table columns={columns} dataSource={tasks} />;
};

export default TodoTable;
