import * as service from "../services/product.service.js";

export const getAllProducts = async (req, res) => {
  try {
    res.json(await service.getAllProducts());
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const searchProduct = async (req, res) => {
  try {
    const { name } = req.query;
    const filteredProducts = await service.searchProduct(name);
    res.json(filteredProducts);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await service.getProductById(id);
    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    if (!name || !price) {
      return res.status(400).json({ error: "Nombre y precio son requeridos" });
    }
    const newProduct = await service.createProduct({ name, price, description });
    res.status(201).json({ message: "Producto creado", product: newProduct });
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;

    if (!name || !description || !price) {
      return res.status(400).json({ error: "Nombre, descripcion y precio son requeridos" });
    }
    const updatedProduct = await service.updateProduct(id, { name, description, price });
    res.status(200).json({ message: "Producto actualizado", product: updatedProduct });
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await service.deleteProduct(id);
    if (!deletedProduct) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.json({ message: "Producto eliminado", product: deletedProduct });
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
};