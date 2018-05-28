import axios from 'axios';
import * as farmService from '../services/farm';

export default {

	namespace: 'map',

	state: {
		site: ''
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

			const temp = yield call(farmService.query, {});
			console.log('temp', put);

			//  put({
			// 	type: 'setData',
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
		setData(state, data) {
			console.log(data, 'put');
			return {...state}
		}
	},
};
