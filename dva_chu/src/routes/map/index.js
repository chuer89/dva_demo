import { connect } from 'dva';
import React from 'react';
import { Button } from 'antd';
import { Link } from 'dva/router';
import style from './index.less';
import { Map } from 'react-amap';

class MapList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amapkey: '30678ae375a00a1107177e2a272d1ec9',
      amapVersion: '1.4.6'
    };
  }

  render() {
    let self = this;

    const events = {
      created: (ins) => {console.log(ins)},
      click: (e) => {
        console.log(e);
      }
    }

    return (
      <div style={{ width: 1200, height: 400 }}>
        <h1>地图</h1>
        <Map zoom={5} 
          events={events}
          amapkey={this.state.amapkey} 
          version={this.state.amapVersion} />
      </div>
    )
  }
}

export default connect()(MapList);
