interface CrudRepository<T> {
  add(data: T): Promise<void>;

  update(id: number, data: T): Promise<void>;

  find(id: number): Promise<T>;

  findAll(): Promise<T[]>;

  remove(id: number): Promise<void>;
}

export default CrudRepository;
