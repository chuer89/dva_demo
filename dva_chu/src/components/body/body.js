import React from 'react';
import {connect} from 'dva';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
// import styles from './body.less';
import { routerRedux } from 'dva/router';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Body extends React.Component {
	constructor(props) {
		super(props);
		// 设置 initial state
		this.state = {
			collapsed: false,
			selectedKeys: ['1']
		}
	}

	onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
	}

	onClick = ({item, key, keyPath}) => {
		let path = 'index';
		if (key === '2') {
			path = 'role';
		}
		this.setState({
			selectedKeys: [key]
		});
		this.props.dispatch(routerRedux.push(path));
	}
	
	render() {
		const {
      children
		} = this.props;
		
		return (
			<Layout style={{ minHeight: '100vh' }}>
				<Sider
					collapsible
					collapsed={this.state.collapsed}
					onCollapse={this.onCollapse}
				>
					<div className="logo" />
					<Menu theme="dark" 
					onClick={this.onClick}
					selectedKeys={this.state.selectedKeys} 
					defaultSelectedKeys={['1']} mode="inline">
						<Menu.Item key="1">
							<Icon type="pie-chart" />
							32434
						</Menu.Item>
						<Menu.Item key="2">
							<Icon type="desktop" />
							<span>角色</span>
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
				<Layout>
					<Header style={{ background: '#fff', padding: 0 }} />
					<Content style={{ margin: '0 16px' }}>
						<Breadcrumb style={{ margin: '16px 0' }}>
							<Breadcrumb.Item>User</Breadcrumb.Item>
							<Breadcrumb.Item>Bill</Breadcrumb.Item>
						</Breadcrumb>
						<div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
							Bill is a cat.{children}
            </div>
					</Content>
					<Footer style={{ textAlign: 'center' }}>
						Ant Design ©2016 Created by Ant UED
          </Footer>
				</Layout>
			</Layout>
		)
	}
};

export default connect()(Body);
