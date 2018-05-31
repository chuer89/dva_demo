import React from 'react';
import { connect } from 'dva';
import Header from './header';
import { Layout } from 'antd';

const { Footer } = Layout;

class App extends React.Component {
  constructor(props) {
		super(props);
		// 设置 initial state
		this.state = {
		}
  }
  
  render() {
		const {
			children
    } = this.props;

    return (
      <div>
        <Header />
        <div>{children}</div>
        <Footer style={{ textAlign: 'center' }}>
							Ant Design ©2016 Created by Ant UED
          </Footer>
      </div>
    )
  }
};

export default connect()(App);
