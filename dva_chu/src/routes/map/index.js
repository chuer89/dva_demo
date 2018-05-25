import { connect } from 'dva';
import React from 'react';
import { Button, Row, Col } from 'antd';
import { Link } from 'dva/router';
import style from './index.less';
import { Map, Marker } from 'react-amap';

// https://elemefe.github.io/react-amap/articles/start 高德地图 react 版本

class MapList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amapkey: '30678ae375a00a1107177e2a272d1ec9',
      amapVersion: '1.4.6',
      filtrate: {
        site: [{
          name: '姓名', id: '1'
        }, {
          name: '性别', id: '2'
        }, {
          name: '类型', id: '3'
        }]
      }
    };

    this.toolEvents = {
      created: (tool) => {
        this.tool = tool;
      }
    }

    this.mapPlugins = ['ToolBar'];
    this.mapCenter = {longitude: 120, latitude: 35};
    this.markerPosition = {longitude: 103, latitude: 30};
  }

  render() {
    let self = this;

    const events = {
      created: (ins) => {console.log(ins)},
      click: (e) => {
        console.log(e);
      }
    }

    const Site = () => {
      const site = this.state.filtrate.site;
      const siteList = site.map((item) => {
        return <span>{item.name}</span>
      });
      return (
        <div>{siteList}</div>
      )
    }

    return (
      <div>
        <div>
          <Site/>
        </div>
        <h1>地图</h1>
        <div style={{ width: 1100, height: 400 }}>
          <Map zoom={5} 
            events={events}
            plugins={this.mapPlugins}
            amapkey={this.state.amapkey} 
            version={this.state.amapVersion}>
            <Marker draggable={true} position={this.markerPosition} />
          </Map>
        </div>
      </div>
    )
  }
}

export default connect()(MapList);
