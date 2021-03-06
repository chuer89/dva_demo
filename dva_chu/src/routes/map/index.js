import { connect } from 'dva';
import React from 'react';
import style from './index.less';

import Filtrate from '../../components/mapList/filtrate';
import Result from '../../components/mapList/result';
import MapMark from '../../components/mapList/mapMark';
import App from '../../components/body/app';

// https://elemefe.github.io/react-amap/articles/start 高德地图 react 版本

class MapList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommend: []
    };
  }

  componentWillMount() {
    const dispatch = this.props.dispatch;
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

    function handleFilter(item) {
      dispatch({
        type: 'map/filter',
        payload: item,
      });
    }

    return (
      <App>
        <Filtrate onClick={handleFilter} siteResult={mapData.site} />
        <h1>地图</h1>
        <div className={style.mapBox}>
          <MapMark />
          <Result onClick={this.handleContact} resultData={mapData.result} />
        </div>
      </App>
    )
  }
}

export default connect(({ map }) => {
  return {
    map
  }
})(MapList);
