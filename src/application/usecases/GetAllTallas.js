export default class GetAllTallas {
  constructor(tallaRepository) {
    this.tallaRepository = tallaRepository;
  }

  async execute() {
    return await this.tallaRepository.findAll();
  }
}
