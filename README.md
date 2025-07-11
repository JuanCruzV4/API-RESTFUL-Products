# API-RESTFUL-Products
API RESTFUL Products with NodeJS

# API de Productos

## Endpoints

- `GET /api/products` - Lista todos los productos
- `GET /api/products/search?name=...` - Busca productos por nombre
- `GET /api/products/:id` - Obtiene un producto por ID
- `POST /api/products` - Crea un producto  
  **Body:**  
  ```json
  {
    "name": "Producto",
    "price": 100,
    "description": "Descripción"
  }
  ```
- `PUT /api/products/:id` - Actualiza un producto  
  **Body igual al POST**
- `DELETE /api/products/:id` - Elimina un producto

## Ejemplo de uso

```sh
curl -X POST http://localhost:3001/api/products \
-H "Content-Type: application/json" \
-d '{"name":"Camiseta","price":200,"description":"Camiseta azul"}'
```

## Requisitos

- Node.js
- Variables de entorno en `.env`