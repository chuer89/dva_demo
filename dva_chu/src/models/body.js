import { routerRedux } from 'dva/router';

export default {

	namespace: 'menus',

	state: {
		collapsed: false
	},

	subscriptions: {
		setup({ dispatch, history }) {  // eslint-disable-line
		},
	},

	effects: {
		*fetch({ payload }, { call, put }) {  // eslint-disable-line
			yield put({ type: 'save' });
		},

		* redirect ({ payload }, { put }) {
			yield put(routerRedux.push('/demo'));
		},
	},

	reducers: {
		onCollapse (state, {payload: collapsed}){
			console.log(collapsed);
			this.setState({ collapsed });
		},

		onClickMenu (state, {payload: key}) {
			console.log(key);
			return {};
		}
	},
};
