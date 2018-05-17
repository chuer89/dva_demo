import React from 'react';
import {connect} from 'dva';

import List from '../components/list';

const Products = ({ dispatch, products }) => {

  console.log(products, 'dis');

  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id
    })
  }
  return (
    <div>
      <h2>list of products</h2>
      <List onDelete={handleDelete} products={ products }/>
    </div>
  )
};

export default connect(({ products }) => ({
  products
}))(Products);
