import React from 'react';
import PropTypes from 'prop-types';

const Filtrate = ({onClick, siteResult}) => {
  const site = [{
    name: '姓名', id: '1'
  }, {
    name: '性别', id: '2'
  }, {
    name: '类型', id: '3'
  }];
  const siteList = site.map((item, key) => {
    return <span key={key} onClick={() => onClick(item)}>{item.name}</span>
  });

  return (
    <div>
      <div>筛选类型：{siteList}</div>
      <div>选择结果：{siteResult.name}</div>
    </div>
  );
};

Filtrate.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Filtrate;
