import axios from "axios";

const DEFAULT_CONFIG = {
  withCredentials: true,
};

class HttpResource {
  url: string;
  config: {};

  constructor(url: string, config = {}) {
    this.url = url;
    this.config = { ...DEFAULT_CONFIG, ...config };
  }

  async post(data: any, params = {}): Promise<any> {
    return axios
      .post(this.url, data, { ...this.config, ...params })
      .then((response) => response.data);
  }

  async put(id: number, data: any, params = {}): Promise<any> {
    return axios
      .put(this.url + "/" + id, data, { ...this.config, ...params })
      .then((response) => response.data);
  }

  async getById(id: number, params = {}): Promise<any> {
    return axios
      .get(this.url + "/" + id, { ...this.config, ...params })
      .then((response) => response.data);
  }

  async get(params = {}): Promise<any> {
    return axios
      .get(this.url, { ...this.config, ...params })
      .then((response) => response.data);
  }

  async delete(id: number, params = {}): Promise<void> {
    return axios
      .delete(this.url + "/" + id, { ...this.config, ...params })
      .then((response) => response.data);
  }
}

export default HttpResource;
