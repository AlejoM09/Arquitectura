export default class TallaController {
  constructor({ createTalla, getAllTallas }) {
    this.createTalla = createTalla;
    this.getAllTallas = getAllTallas;
  }

  async create(req, res) {
    try {
      const talla = await this.createTalla.execute(req.body);
      res.status(201).json(talla);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const tallas = await this.getAllTallas.execute();
      res.status(200).json(tallas);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
