import React from 'react';
import { connect } from 'dva';
import Header from './header';

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
      </div>
    )
  }
};

export default connect()(App);
