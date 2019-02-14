import axios from 'axios';

class Api {
    private instance = null
    private config = {
        baseURL: __ENV__.apiPath,
        timeout: 1000,
    }
    constructor() {
        this.activateMiddleware()
    }
    activateMiddleware() {
        const instance = axios.create(this.config)
        instance.interceptors.response.use( response => {
            return response;
        }, error =>  {
            return Promise.reject(error);
        });
        this.instance = instance
    }
    returnResponse(res) {
        return res && res.data
    }
    get(path) {
        return this.instance.get(path).then(this.returnResponse)
    }
    post(path, data) {
        return this.instance.post(path, data).then(this.returnResponse)
    }
}
const api = new Api();

export default api

