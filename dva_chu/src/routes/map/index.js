import { connect } from 'dva';
import React from 'react';
import style from './index.less';
import { Map, Marker } from 'react-amap';

import Filtrate from '../../components/mapList/filtrate';

// https://elemefe.github.io/react-amap/articles/start 高德地图 react 版本

class MapList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amapkey: '30678ae375a00a1107177e2a272d1ec9',
      amapVersion: '1.4.6'
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
    const dispatch = this.props.dispatch;
    const mapData = this.props.map;

    function handleFilter(item) {
      dispatch({
        type: 'map/filter',
        payload: item,
      });
    }

    const events = {
      click: (e) => {
        console.log(e);
      }
    }
    const Loading = <div className={style.loadingStyle}>Loading Map...</div>

    return (
      <div>
        <Filtrate onClick={handleFilter} siteResult={mapData.site}/>
        <h1>地图</h1>
        <div style={{ width: 1100, height: 350 }}>
          <Map zoom={5} 
            events={events}
            loading={Loading}
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

export default connect(({map}) => {
  return {
    map
  }
})(MapList);
