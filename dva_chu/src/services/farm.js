import axios from 'axios';

let ajax = (api, params) => {
	let config = {
		url: api,
		method: 'post',
		params,
		headers: {
			'Content-Type': 'application/json;charset=UTF-8'
		}
	};

	axios(config).then((res) => {

	})
};

export function query(param) {
	return ajax('/ks_manager/partner/yunfang/areaSearch.do', {
		comName: 'ts'
	});
}
