import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Icon } from 'antd';
// import styles from './body.less';
import { Link } from 'dva/router';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Menus extends React.Component {
  constructor(props) {
    super(props);
    // 设置 initial state
    this.state = {
      collapsed: false,
      defaultSelectedKeys: ['1'],
      selectedKeys: '',
      menus: {
        '/role': ['2'],
        '/index': ['1']
      }
    }
  }

  componentWillMount() {
    let hash = window.location.hash.replace('#', '');
    let selectedKeys = this.state.menus[hash] || this.state.defaultSelectedKeys;

    this.setState({
      selectedKeys
    });
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  render() {
    const { selectedKeys } = this.state;

    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <Menu theme="dark"
          selectedKeys={selectedKeys}
          mode="inline">
          <Menu.Item key="1">
            <Link to="/product">
              <Icon type="pie-chart" />
              <span>11</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/role">
              <Icon type="desktop" />
              <span>角色表格</span>
            </Link>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={<span><Icon type="user" /><span>User</span></span>}
          >
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={<span><Icon type="team" /><span>Team</span></span>}
          >
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Icon type="file" />
            <span>File</span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
};

export default connect()(Menus);
