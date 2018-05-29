import axios from 'axios';
import _ from 'lodash';

import request from '../utils/request';

let post = (api, param = {}) => {
	let config = {
		method: 'POST',
		body: JSON.stringify(param)
	};

	return request(api, config);
}

export function queryArea(param = {}) {
  return post('/ks_manager/partner/yunfang/areaSearch.do', param);
}


let ajax = (api, params = {}, success) => {
	let config = {
		url: api,
		method: 'post',
		params,
		headers: {
			'Content-Type': 'application/json;charset=UTF-8'
		}
	};

	return axios(config).then((res) => {
		if (res.status === 200) {
			_.isFunction(success) && success(res.data);
		}
	})
};

export function query(param, cb) {
	return ajax('/ks_manager/partner/yunfang/areaSearch.do', param, cb);
}
