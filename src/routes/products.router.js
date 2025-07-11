import { Router } from 'express';
import * as productControllers from './../controllers/products.controller.js';

const router = Router();

router.get('/products', productControllers.getAllProducts);

router.get('/products/search', productControllers.searchProduct);

router.get('/products/:id', productControllers.getProductById);

router.post('/products', (productControllers.createProduct));

router.put('/products/:id', (productControllers.updateProduct));

router.delete('/products/:id', productControllers.deleteProduct);


export default router;