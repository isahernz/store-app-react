import { useEffect, useState } from "react";
import { getData } from "../helpers/getData";
import { IProduct } from "../interfaces/response-products";
import { ProductList } from "./ProductList";

export const ProductListContainer = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  console.log("Product List Container Redendered");

  useEffect(() => {
    getData().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};
