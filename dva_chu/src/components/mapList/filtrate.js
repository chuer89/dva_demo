import React from 'react';
import PropTypes from 'prop-types';
import style from './filtrate.less';

const Filtrate = ({onClick, siteResult}) => {
  const site = [{
    name: '不限', id: '1'
  }, {
    name: '新南威尔士州', id: '2'
  }, {
    name: '西澳', id: '3'
  }];
  const range = [{
    name: '一千一下', id: '1'
  }, {
    name: '一万', id: '2'
  }, {
    name: '十万', id: '3'
  }];

  const siteList = site.map((item, key) => {
    return <span key={key} className={style.seleItem} onClick={() => onClick(item)}>{item.name}</span>
  });
  const rangeList = range.map((item, key) => {
    return <span key={key} className={style.seleItem}>{item.name}</span>
  });

  return (
    <div>
      <div>筛选类型：{siteList}</div>
      <div>选择农场类型：</div>
      <div>选择结果：{siteResult.name}</div>
    </div>
  );
};

Filtrate.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Filtrate;
