import farmService from '../services/farm';

export default {

	namespace: 'map',

	state: {
		site: '',
		result: []
	},

	subscriptions: {
		setup({ dispatch, history }) {  // eslint-disable-line
			history.listen(({ pathname }) => {
				if (pathname === '/map') {
          dispatch({
						type: 'getData',
						payload: {
							comName: '房子'
						},
					});
        }
      });
		},
	},

	effects: {
		*fetch({ payload }, { call, put }) {  // eslint-disable-line
			yield put({ type: 'save' });
		},
		*getData({payload}, {call, put}) {
			const temp = yield call(farmService.queryArea, payload);
			yield put({
				type: 'setData',
				payload: temp.data.data
			})
		}
	},

	reducers: {
		delete(state, { payload: id }) {
			return state.filter(item => item.id !== id);
		},
		filter(state, {payload: item}) {
			return {
				...state,
				site: item
			};
		},
		setData(state, {payload: data}) {
			return { ...state, result: data.slice(0, 4)};
		},
	},
};
