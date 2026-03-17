import Talla from "../../domain/entities/Talla.js";

export default class CreateTalla {
  constructor(tallaRepository) {
    this.tallaRepository = tallaRepository;
  }

  async execute({ codigo, descripcion }) {
    const talla = new Talla({ codigo, descripcion });
    return await this.tallaRepository.save(talla);
  }
}
