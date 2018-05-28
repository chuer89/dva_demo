import axios from 'axios';

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
			let ajax = (api, params) => {
				let config = {
					url: api,
					// url: '/ks_manager/partner/yunfang/areaSearch.do',
					method: 'get',
					params,
					headers: {
						'Content-Type': 'application/json;charset=UTF-8'
					}
				};
	
				axios(config).then((res) => {
	
				})
			};
	
			ajax('/ks_manager/partner/yunfang/areaSearch.do', {
				comName: 'ts'
			});

			// const temp = yield call(ajax('/ks_manager/partner/yunfang/areaSearch.do', {
			// 	comName: 'ts'
			// }), {});
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
