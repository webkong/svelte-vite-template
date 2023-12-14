import axios from "axios";

// 创建axios实例
const service = axios.create({});

/**
 * @name clientConfig
 * @description 请求自定义配置项
 * @param {Boolean} hideNetCheck - 是否关闭请求前网络状态检查
 * @param {String} noNetworkTip - 网络状态检查无网络时提示文案
 */
// request拦截器
service.interceptors.request.use(
	(config) => {
		console.log("request config :>> ", config);

		const commonParams = {};
		// eslint-disable-next-line no-prototype-builtins
		if (config.hasOwnProperty("params")) {
			config.params = {
				...commonParams,
				...config.params
			};
		}
		// eslint-disable-next-line no-prototype-builtins
		if (config.hasOwnProperty("data")) {
			config.data = {
				...commonParams,
				...config.data
			};
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

// response 拦截器
service.interceptors.response.use(
	(response) => {
		console.log("response :>> ", response);
		const code = response?.data?.result_code;

		if (code === 200) {
			return response.data;
		}
	},
	(error) => {
		console.log("🚀 ~ file: request.js:52 ~ error:", error);

		return Promise.reject(error);
	}
);

export default service;
