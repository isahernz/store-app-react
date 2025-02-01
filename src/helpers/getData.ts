import data from "../data/data.json";
import { IProduct } from "../interfaces/response-products";

export const getData = () => {
  return new Promise<IProduct[]>((resolve, reject) => {
    // console.log("Loading data...");
    const success = true;
    if (!success) {
      reject("Failed to load data");
    }
    return setTimeout(() => {
      resolve(data);
    }, 3000);
  });
};

export const getProductById = (id: number) => {
  return new Promise<IProduct | undefined>((resolve, reject) => {
    const product = data.find((product) => product.id === id);
    if (!product) {
      reject("Failed to get product");
    }
    return setTimeout(() => {
      resolve(product);
    }, 3000);
  });
};
