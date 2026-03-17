export default class CamisaController {
  constructor({ createCamisa, getAllCamisas }) {
    this.createCamisa = createCamisa;
    this.getAllCamisas = getAllCamisas;
  }

  async create(req, res) {
    try {
      const camisa = await this.createCamisa.execute(req.body);
      res.status(201).json(camisa);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const camisas = await this.getAllCamisas.execute();
      res.status(200).json(camisas);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
