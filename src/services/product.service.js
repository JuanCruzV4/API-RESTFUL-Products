import * as model from '../models/products.model.js';

export const getAllProducts = async () => {
    return await model.getAllProducts();
}

export const getProductById = async (id) => {
    return await model.getProductById(id);
}

export const createProduct = async (product) => {
   const newProduct = await model.createProduct(product);
   return newProduct;
}

export const updateProduct = async (id, product) => {
    const updatedProduct = await model.updateProduct(id, product);
    return updatedProduct;
}

export const deleteProduct = async (id) => {
    return await model.deleteProduct(id);
}

