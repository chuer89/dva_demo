import _ from 'lodash';
import request from '../utils/request';

let post = (api, param = {}) => {
	let config = {
		method: 'POST',
		body: JSON.stringify(param)
	};

	return request(api, config);
}

let httpApi = {
	queryArea(param = {}) {
		return post('/ks_manager/partner/yunfang/areaSearch.do', param);
	}
};

export default httpApi;
