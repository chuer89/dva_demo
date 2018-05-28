import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
// import styles from './body.less';
import { Link } from 'dva/router';
import axios from 'axios';

axios.defaults.headers.post['content-Type'] = 'application/json;charset=UTF-8';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Page extends React.Component {
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

		let ajax = (api, params) => {
			let config = {
				url: api,
				// url: '/ks_manager/partner/yunfang/areaSearch.do',
				method: 'get',
				params,
				headers: {
					'Content-Type': 'application/json;charset=UTF-8'
				}
			};

			axios(config).then((res) => {

			})
		};

		ajax('/ks_manager/partner/yunfang/areaSearch.do', {
			comName: 'ts'
		});
	}

	onCollapse = (collapsed) => {
		this.setState({ collapsed });
	}

	render() {
		const {
			children
		} = this.props;

		const { selectedKeys } = this.state;

		return (
			<Layout style={{ minHeight: '100vh' }}>
				<Sider
					collapsible
					collapsed={this.state.collapsed}
					onCollapse={this.onCollapse}
				>
					<div className="logo" />
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

export default connect()(Page);
