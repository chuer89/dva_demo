import { connect } from 'dva';
import React from 'react';
import Page from '../../components/body/body';
import { Table } from 'antd';

class RoleList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const dataSource = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }];
    
    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    }];

    return (
      <Page>
        <Table dataSource={dataSource} columns={columns} />
      </Page>
    )
  }
}

export default connect()(RoleList);