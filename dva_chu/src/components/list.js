import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';

const List = ({onDelete, products}) => {
  const columns = [{
    title: 'name',
    dataIndex: 'name'
  }, {
    title: 'actions',
    render: (text, record) => {
      return (
        <Popconfirm title="Delete" onConfirm={() => onDelete(record.id)}>
          <Button>Delete</Button>
        </Popconfirm>
      )
    }
  }];

  return (
    <Table
      dataSource={products}
      columns={columns}
      rowKey="id"
    />
  )
}

List.protoTypes = {
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired
}

export default List;
