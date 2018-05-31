import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';
import style from './body.less';
import { Link } from 'dva/router';

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <Link to="/">
          <img className={style.logoImg} src={require('../../assets/yay.jpg')} />
        </Link>
      </div>
      <div className={style.userBox}>
        <Link to="/product">
          <Avatar icon="user" />
        </Link>
        <a href="javascript:;" className={style.loginOut}>退出</a>
      </div>
    </div>
  )
};

Header.propTypes = {};

export default Header;
