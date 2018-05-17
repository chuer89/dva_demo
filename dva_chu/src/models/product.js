
export default {

  namespace: 'products',

  state: {
    products: [{
      name: '第一1次', id: 11
    }, {
      name: '第二1次', id: 22
    }]
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    'delete'(state, { payload: id }) {
      console.log(state, state.products.filter(item => item.id !== id));
      let products = {
        products: state.products.filter(item => item.id !== id)
      }
      return products;
    },
  },

};
