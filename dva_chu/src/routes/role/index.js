import {connect} from 'dva';
import React from 'react';
import Page from '../../components/body/body';

class RoleList extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
			collapsed: false,
			selectedKeys: ['1']
		}
  }
  
  render () {
    return (
      <Page>
        <div>223</div>
      </Page>
    )
  }
};

export default connect()(RoleList);