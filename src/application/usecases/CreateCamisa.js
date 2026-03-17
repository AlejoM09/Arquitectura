import Camisa from "../../domain/entities/Camisa.js";

export default class CreateCamisa {
  constructor(camisaRepository) {
    this.camisaRepository = camisaRepository;
  }

  async execute({ sku, price }) {
    const camisa = new Camisa({ sku, price });
    return await this.camisaRepository.save(camisa);
  }
}
