import axios from 'axios';
import * as farmService from '../services/farm';

export default {

	namespace: 'map',

	state: {
		site: '',
		result: []
	},

	subscriptions: {
		setup({ dispatch, history }) {  // eslint-disable-line
		},
	},

	effects: {
		*fetch({ payload }, { call, put }) {  // eslint-disable-line
			yield put({ type: 'save' });
		},
		*getData({payload}, {call, put}) {

			// const temp = yield call(farmService.query, {
			// 	comName: 't1s'
			// }, (data) => {
			// 	console.log(data, 'back');
			// });

			// const temp = yield call(farmService.queryArea, {
			// 	comName: 't1s'
			// });

			// console.log(temp, 'back');

			// yield put({ type: 'save' });

			// yield put({ type: 'setData'});

			// yield put({
			// 	type: 'map/setData',
			// 	payload: {
			// 		y: '1'
			// 	}
			// })
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
		setData(state, action) {
			console.log('put');
			return { ...state, ...action.payload };
		},
		save(state, action) {
      return { ...state, ...action.payload };
    },
	},
};
