import { connect } from 'dva';
import React from 'react';
import style from './index.less';
import { Map, Markers } from 'react-amap';

import Filtrate from '../../components/mapList/filtrate';
import Result from '../../components/mapList/result';

// https://elemefe.github.io/react-amap/articles/start 高德地图 react 版本

class MapList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amapkey: '30678ae375a00a1107177e2a272d1ec9',
      // amapkey: '9ea6e111fff732f3d64c1fa2026a8cd4',
      amapVersion: '1.4.6',

      recommend: []
    };
  }

  componentWillMount() {
    this.toolEvents = {
      created: (tool) => {
        this.tool = tool;
      }
    }

    this.mapPlugins = ['ToolBar'];
    this.mapCenter = {longitude: 120, latitude: 35};
    this.markerPosition = [{
      position: {longitude: 103, latitude: 30},
      myLabel: 'A',
      myIndex: '1'
    }, {
      position: {longitude: 107, latitude: 29.8},
      myLabel: '地址',
      myIndex: '11'
    }];

    this.markersEvents = {
      click(e, marker){
        // 通过高德原生提供的 getExtData 方法获取原始数据
        const extData = marker.getExtData();
        const index = extData.myIndex;
        console.log(index, extData);
      }
    };
  }

  renderMarkerLayout (extData) {
    const style = {
      backgroundColor: '#000',
      color: '#fff',
      border: '1px solid #fff',
      fontSize: '12px',
      width: '30px',
      textAlign: 'center'
    };

    return (
      <div style={style}>
        <span>{extData.myLabel}</span><br/>
        <span>{extData.myIndex}</span>
      </div>
    )
  }

  handleContact(item) {
    const dispatch = this.props.dispatch;

    dispatch({
      type: 'map/filter',
      payload: item,
    });
  }

  render() {
    const dispatch = this.props.dispatch;
    const mapData = this.props.map;

    dispatch({
      type: 'map/getData',
      payload: '',
    });

    function handleFilter(item) {
      dispatch({
        type: 'map/filter',
        payload: item,
      });
    }

    const Loading = <div className={style.loadingStyle}>Loading Map...</div>
    const MapDom = () => {
      return (
        <Map zoom={5} 
          events={events}
          loading={Loading}
          plugins={this.mapPlugins}
          amapkey={this.state.amapkey} 
          version={this.state.amapVersion}>
          <Markers 
          events={this.markersEvents}
          render={this.renderMarkerLayout}
          markers={this.markerPosition} />
        </Map>
      )
    }

    let mapInstance;
    const events = {
      click: (e) => {
        console.log(e);
      },

      created(_map) {
        mapInstance = _map;
      },

      zoomchange(e) {
        // console.log(e, 'zoomchange', mapInstance.getZoom(), mapInstance.getCenter());
      },

      moveend(e) {
        // console.log(e, 'moveend')
      }
    }

    return (
      <div>
        <Filtrate onClick={handleFilter} siteResult={mapData.site}/>
        <h1>地图</h1>
        <div className={style.mapBox}>
          <MapDom/>
          <Result onClick={this.handleContact}/>
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
