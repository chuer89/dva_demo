import React from 'react';
import PropTypes from 'prop-types';
import style from './result.less';

const Result = ({ onClick }) => {
  return (
    <div className={style.resultList}>结果</div>
  )
}

Result.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Result;
