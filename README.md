# Tienda de Camisas — Clean Architecture (Node.js + Express)

## Estructura del proyecto

```
src/
├── domain/
│   ├── entities/
│   │   └── Camisa.js                        # Entidad principal
│   └── repositories/
│       └── CamisaRepository.js              # Contrato/interfaz
├── application/
│   └── usecases/
│       ├── CreateCamisa.js
│       └── GetAllCamisas.js
├── infrastructure/
│   ├── controllers/
│   │   └── CamisaController.js
│   ├── repositories/
│   │   └── InMemoryCamisaRepository.js
│   └── config/
│       ├── container.js                     # Composition root
│       └── routes/
│           └── camisaRoutes.js
├── app.js
└── index.js
```

## Instalación y ejecución

```bash
npm install
npm start
# o en modo watch:
npm run dev
```

## Endpoints disponibles

| Método | Ruta           | Descripción           |
|--------|----------------|-----------------------|
| POST   | /api/camisas   | Crear una camisa      |
| GET    | /api/camisas   | Obtener todas         |

## Pruebas con curl

```bash
# Crear una camisa
curl -X POST http://localhost:3000/api/camisas \
  -H "Content-Type: application/json" \
  -d '{"sku":"CAM-001","price":25}'


*****
curl -X POST http://localhost:3000/api/camisas -H "Content-Type: application/json" -d "{\"sku\":\"CAM-001\",\"price\":25}"
*****
*****
curl -X POST http://localhost:3000/api/tallas -H "Content-Type: application/json" -d "{\"codigo\":\"XL\",\"descripcion\":\"Extra Large\"}"

curl -X POST http://localhost:3000/api/tallas -H "Content-Type: application/json" -d "{\"codigo\":\"M\",\"descripcion\":\"Medium\"}"
*****

curl http://localhost:3000/api/tallas
# Listar todas las camisas
curl http://localhost:3000/api/camisas
```


