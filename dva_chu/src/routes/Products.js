import React from 'react';
import {connect} from 'dva';
import Page from '../components/body/body';

// 4008170100 kinder技术客户
// https://bookfere.com/post/644.html  kinder教程

const Products = ({ products, dispatch }) => {
  return (
    <div>
      <Page name="chu">
        <h1>h1</h1>
        <h3>h3</h3>
        <p>2323</p>
      </Page>
    </div>
  )
};

export default connect()(Products);
