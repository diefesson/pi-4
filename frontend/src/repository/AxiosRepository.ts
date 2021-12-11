import axios from "axios";
import CrudRepository from "./CrudRepository";

const DEFAULT_CONFIG = {
  withCredentials: true,
};

class AxiosRepository<T> implements CrudRepository<T> {
  url: string;
  config: {};

  constructor(url: string, config = {}) {
    this.url = url;
    this.config = { ...DEFAULT_CONFIG, ...config };
  }

  async add(data: T): Promise<void> {
    return axios.post(this.url, data, this.config);
  }

  async update(id: number, data: T): Promise<void> {
    return axios.put(this.url + "/" + id, data, this.config);
  }

  async find(id: number): Promise<T> {
    return axios
      .get(this.url + "/" + id, this.config)
      .then((response) => response.data);
  }

  async findAll(): Promise<T[]> {
    return axios.get(this.url, this.config).then((response) => response.data);
  }

  async remove(id: number): Promise<void> {
    return axios.delete(this.url + "/" + id, this.config);
  }
}

export default AxiosRepository;
