
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
	},

	reducers: {
		onCollapse (state, {payload: collapsed}){
			console.log(collapsed);
			this.setState({ collapsed });
		},
	},
};
