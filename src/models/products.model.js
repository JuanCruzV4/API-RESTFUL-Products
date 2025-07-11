import fs from "fs";
import path from "path";
import { db } from "./data.js";
import { collection, getDocs, doc, getDoc, addDoc, deleteDoc, setDoc } from "firebase/firestore";
import { error } from "console";

const __dirname = import.meta.dirname;

const filePath = path.join(__dirname, "./products.json");
const json = fs.readFileSync(filePath, "utf-8");
const products = JSON.parse(json);
const productsCollection = collection(db, "products");

// ...existing code...
export const getAllProducts = async () => {
    try {
        const snapshot = await getDocs(productsCollection);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        throw new Error("Error al obtener productos: " + error.message);
    }
};

export const searchProduct = async (name) => {
    try {
        const snapshot = await getDocs(productsCollection);
        return snapshot.docs
            .map(doc => ({ id: doc.id, ...doc.data() }))
            .filter(product => product.name.toLowerCase().includes(name.toLowerCase()));
    } catch (error) {
        throw new Error("Error buscando productos: " + error.message);
    }
};

export const updateProduct = async (id, updatedProduct) => {
    try {
        const docRef = doc(productsCollection, id);
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) {
            return null;
        }
        await setDoc(docRef, updatedProduct);
        return { id, ...updatedProduct };
    } catch (error) {
        throw new Error("Error actualizando producto: " + error.message);
    }
};

export const getProductById = async (id) => {
    try {
        const docRef = doc(productsCollection, id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            return null;
        }
    } catch (error) {
        throw new Error("Error al obtener producto por ID: " + error.message);
    }
};

export const createProduct = async (product) => {
    try {
        const docRef = await addDoc(productsCollection, product);
        return { id: docRef.id, ...product };
    } catch (error) {
        throw new Error("Error al crear producto: " + error.message);
    }
};

export const deleteProduct = async (id) => {
    try {
        const docRef = doc(productsCollection, id);
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) {
            return null;
        }
        await deleteDoc(docRef);
        return { id };
    } catch (error) {
        throw new Error("Error al eliminar producto: " + error.message);
    }
};


