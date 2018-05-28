import request from '../utils/request';
import axios from 'axios';

export function query(param) {
	let body = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json;charset=UTF-8',
						// 'Content-Type': 'application/json',
		},
		body: param,
	}

	return request('/ks_manager/partner/yunfang/areaSearch.do');
}
