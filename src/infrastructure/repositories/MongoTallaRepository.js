import TallaRepository from "../../domain/repositories/TallaRepository.js";

export default class MongoTallaRepository extends TallaRepository {
  constructor(client) {
    super();
    this.collection = client.db("tienda-camisas").collection("tallas");
  }

  async save(talla) {
    const existing = await this.collection.findOne({ codigo: talla.codigo });
    if (existing) {
      await this.collection.updateOne({ codigo: talla.codigo }, { $set: talla });
    } else {
      await this.collection.insertOne(talla);
    }
    return talla;
  }

  async findAll() {
    return await this.collection.find({}, { projection: { _id: 0 } }).toArray();
  }
}
