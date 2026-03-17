import { MongoClient } from "mongodb";
import CamisaRepository from "../../domain/repositories/CamisaRepository.js";

export default class MongoCamisaRepository extends CamisaRepository {
  constructor(client) {
    super();
    this.collection = client.db("tienda-camisas").collection("camisas");
  }

  async save(camisa) {
    const existing = await this.collection.findOne({ sku: camisa.sku });
    if (existing) {
      await this.collection.updateOne({ sku: camisa.sku }, { $set: camisa });
    } else {
      await this.collection.insertOne(camisa);
    }
    return camisa;
  }

  async findAll() {
    return await this.collection.find({}, { projection: { _id: 0 } }).toArray();
  }
}
