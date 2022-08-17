export interface CrudRepository {
  save(domain: any);
  findAll();
  findById(id: number);
  deleteById(id: number);
}
