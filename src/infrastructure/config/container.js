import MongoCamisaRepository  from "../repositories/MongoCamisaRepository.js";
import MongoTallaRepository   from "../repositories/MongoTallaRepository.js";
import CreateCamisa            from "../../application/usecases/CreateCamisa.js";
import GetAllCamisas           from "../../application/usecases/GetAllCamisas.js";
import CreateTalla             from "../../application/usecases/CreateTalla.js";
import GetAllTallas            from "../../application/usecases/GetAllTallas.js";
import CamisaController        from "../controllers/CamisaController.js";
import TallaController         from "../controllers/TallaController.js";
import { connectDB }           from "./mongodb.js";

export async function buildContainer() {
  // 1. Conexión a MongoDB
  const client = await connectDB();

  // 2. Repositorios
  const camisaRepository = new MongoCamisaRepository(client);
  const tallaRepository  = new MongoTallaRepository(client);

  // 3. Use cases - Camisa
  const createCamisa = new CreateCamisa(camisaRepository);
  const getAllCamisas = new GetAllCamisas(camisaRepository);

  // 4. Use cases - Talla
  const createTalla = new CreateTalla(tallaRepository);
  const getAllTallas = new GetAllTallas(tallaRepository);

  // 5. Controllers
  const camisaController = new CamisaController({ createCamisa, getAllCamisas });
  const tallaController  = new TallaController({ createTalla, getAllTallas });

  return { camisaController, tallaController };
}
