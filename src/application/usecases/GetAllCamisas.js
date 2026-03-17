export default class GetAllCamisas {
  constructor(camisaRepository) {
    this.camisaRepository = camisaRepository;
  }

  async execute() {
    return await this.camisaRepository.findAll();
  }
}
