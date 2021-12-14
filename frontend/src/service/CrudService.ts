import CrudRepository from "@/repository/CrudRepository";

class CrudService<T> {
  repository: CrudRepository<T>;

  constructor(repository: CrudRepository<T>) {
    this.repository = repository;
  }

  async add(data: T): Promise<void> {
    return this.repository.add(data);
  }

  async update(id: number, data: T): Promise<void> {
    return this.repository.update(id, data);
  }

  async find(id: number): Promise<T> {
    return this.repository.find(id);
  }

  async findAll(): Promise<T[]> {
    return this.repository.findAll();
  }

  async remove(id: number): Promise<void> {
    return this.repository.remove(id);
  }
}

export default CrudService;
