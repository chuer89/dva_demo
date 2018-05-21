import React from 'react';
import {connect} from 'dva';
import Page from '../components/body/body';

const Products = ({ products, dispatch }) => {
  return (
    <div>
      <Page name="chu">
        <h1>错误</h1>
      </Page>
    </div>
  )
};

export default connect()(Products);
