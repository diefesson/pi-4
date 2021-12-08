import axios from "axios";

const DEFAULT_CONFIG = {
    withCredentials: true
}

function identity(data) {
    return data;
}

export default class AxiosRepository {

    constructor(url, config = {}, from = identity, to = identity) {
        this.url = url;
        this.from = from;
        this.to = to;
        this.config = { ...DEFAULT_CONFIG, ...config };
    }

    async add(data) {
        return axios.post(this.url, this.to(data), this.config);
    }

    async update(id, data) {
        return axios.put(this.url + "/" + id, this.to(data), this.config);
    }

    async get(id) {
        return axios.get(this.url + "/" + id, this.config).then(this.from)
    }

    async del(id) {
        return axios.delete(this.url + "/" + id, this.config)
    }

}