import request from "../common/js/request";
const activeHost = process.env.NODE_ENV === "production" ? process.env.VUE_APP_API_URL : "/active";

// 查询首页任务列表接口
export function test(params = {}, clientConfig = {}) {
	return request.post("/path/to/api", { ...params }, { baseURL: activeHost, ...clientConfig });
}
