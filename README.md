# API-RESTFUL-Products

API RESTful para la gestión de productos, desarrollada con Node.js, Express y Firebase Firestore.

## Requisitos

- Node.js (v18 o superior recomendado)
- npm
- Cuenta y proyecto en Firebase (para Firestore)
- Archivo `.env` con las variables de entorno necesarias (ver `.env.example`)

## Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/JuanCruzV4/API-RESTFUL-Products.git
   cd API-RESTFUL-Products
   ```

2. Instala las dependencias:
   ```sh
   npm install
   ```

3. Configura las variables de entorno:
   - Crea un archivo `.env` en la raíz del proyecto.
   - Agrega tus credenciales de Firebase y otras variables necesarias.

4. Inicia el servidor:
   ```sh
   npm run dev
   ```
   o
   ```sh
   npm start
   ```

## Endpoints

### Productos

- `GET /api/products`  
  Lista todos los productos.

- `GET /api/products/search?name=...`  
  Busca productos por nombre.

- `GET /api/products/:id`  
  Obtiene un producto por ID.

- `POST /api/products`  
  Crea un producto.  
  **Body:**  
  ```json
  {
    "name": "Producto",
    "price": 100,
    "description": "Descripción"
  }
  ```

- `PUT /api/products/:id`  
  Actualiza un producto.  
  **Body igual al POST**

- `DELETE /api/products/:id`  
  Elimina un producto.

## Ejemplo de uso con cURL

Crear un producto:
```sh
curl -X POST http://localhost:3001/api/products \
-H "Content-Type: application/json" \
-d '{"name":"Camiseta","price":200,"description":"Camiseta azul"}'
```

Buscar productos por nombre:
```sh
curl "http://localhost:3001/api/products/search?name=camiseta"
```

Actualizar un producto:
```sh
curl -X PUT http://localhost:3001/api/products/ID_DEL_PRODUCTO \
-H "Content-Type: application/json" \
-d '{"name":"Camiseta actualizada","price":250,"description":"Nueva descripción"}'
```

Eliminar un producto:
```sh
curl -X DELETE http://localhost:3001/api/products/ID_DEL_PRODUCTO
```

## Documentación Swagger

La documentación interactiva de la API está disponible gracias a Swagger.

- Accede a [http://localhost:3001/api-docs](http://localhost:3001/api-docs) una vez que el servidor esté corriendo.
- Desde ahí puedes probar los endpoints y ver los detalles de cada uno.

## Notas

- Asegúrate de tener configurado correctamente Firestore en tu proyecto de Firebase.
- Si tienes dudas sobre las variables de entorno, revisa el archivo `.env.example` o consulta la documentación de Firebase.

---

**Autor:** Juan Cruz Vazquez  
**Repositorio:** [https://github.com/JuanCruzV4/API-RESTFUL-Products](https://github.com/JuanCruzV4/API-RESTFUL-Products)