import React from 'react';
import { connect } from 'dva';
import { Layout, Breadcrumb } from 'antd';
// import styles from './body.less';
import App from './app';
import Menus from './menu';

const { Header, Content, Footer } = Layout;

class Page extends React.Component {
	constructor(props) {
		super(props);
		// 设置 initial state
		this.state = {};
	}

	render() {
		const {
			children
		} = this.props;

		return (
			<App>
				<Layout style={{ minHeight: '100vh' }}>
					<Menus />
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
			</App>
		)
	}
};

export default connect()(Page);
