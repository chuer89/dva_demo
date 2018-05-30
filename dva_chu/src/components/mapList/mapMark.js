import React from 'react';
import PropTypes from 'prop-types';
import { Map, Markers } from 'react-amap';
import style from './mapMark.less';

const MapMark = () => {
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
  const Loading = <div className={style.loadingStyle}>Loading Map...</div>

  const mapConfig = {
    amapkey: '30678ae375a00a1107177e2a272d1ec9',
    amapVersion: '1.4.6',
  }

  let mapPlugins = ['ToolBar'];
  let markerPosition = [{
    position: { longitude: 103, latitude: 30 },
    myLabel: 'A',
    myIndex: '1'
  }, {
    position: { longitude: 107, latitude: 29.8 },
    myLabel: '地址',
    myIndex: '11'
  }];

  let markersEvents = {
    click(e, marker) {
      // 通过高德原生提供的 getExtData 方法获取原始数据
      const extData = marker.getExtData();
      const index = extData.myIndex;
      console.log(index, extData);
    }
  };

  function renderMarkerLayout(extData) {
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
        <span>{extData.myLabel}</span><br />
        <span>{extData.myIndex}</span>
      </div>
    )
  }

  return (
    <Map zoom={5}
      events={events}
      loading={Loading}
      plugins={mapPlugins}
      amapkey={mapConfig.amapkey}
      version={mapConfig.amapVersion}>
      <Markers
        events={markersEvents}
        render={renderMarkerLayout}
        markers={markerPosition} />
    </Map>
  )
}

MapMark.propTypes = {

};

export default MapMark;
