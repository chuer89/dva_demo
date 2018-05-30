import React from 'react';
import PropTypes from 'prop-types';
import style from './result.less';
import { Pagination } from 'antd';

const Result = ({ onClick, resultData }) => {
  console.log(resultData, 'res');
  const List = resultData.map((item, key) => {
    return (
      <div key={key} className={style.farmBox}>
        <div><img className={style.farmImg} src={require('../../assets/yay.jpg')}/></div>
        <p>{item.address}</p>
      </div>
    )
  });
  const Page = <Pagination defaultCurrent={1} total={50} />;
  return (
    <div className={style.resultList}>
      <div className={style.farmList}>{List}</div>
      <div>{Page}</div>
    </div>
  )
};

Result.propTypes = {
  onClick: PropTypes.func.isRequired,
  resultData: PropTypes.array.isRequired,
};

export default Result;
