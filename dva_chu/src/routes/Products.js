import React from 'react';
import {connect} from 'dva';

import List from '../components/list';

const Products = ({ products, dispatch }) => {

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

export default connect((state) => {
  let products = state.products.products;
  return{
    products
  }
})(Products);
