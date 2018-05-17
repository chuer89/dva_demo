
export default {

  namespace: 'products',

  state: [],

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
      console.log(id);
      return state.filter(item => item.id !== id);
    },
  },

};
