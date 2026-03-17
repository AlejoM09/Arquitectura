import { MongoClient } from "mongodb";

const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017";

let client;

export async function connectDB() {
  if (!client) {
    client = new MongoClient(MONGO_URL);
    await client.connect();
    console.log("Conectado");
  }
  return client;
}
