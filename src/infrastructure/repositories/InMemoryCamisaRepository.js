import CamisaRepository from "../../domain/repositories/CamisaRepository.js";

export default class InMemoryCamisaRepository extends CamisaRepository {
  constructor() {
    super();
    this.camisas = [];
  }

  async save(camisa) {
    const index = this.camisas.findIndex(c => c.sku === camisa.sku);
    if (index >= 0) {
      this.camisas[index] = camisa;
    } else {
      this.camisas.push(camisa);
    }
    return camisa;
  }

  async findAll() {
    return this.camisas;
  }
}
