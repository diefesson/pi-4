export default class BaseService {
  constructor(repository) {
    this.repository = repository;
  }

  async add(data) {
    return this.repository.add(data);
  }

  async update(id, data) {
    return this.repository.update(id, data);
  }

  async find(id) {
    return this.repository.find(id);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async remove(id) {
    return this.repository.remove(id);
  }
}
