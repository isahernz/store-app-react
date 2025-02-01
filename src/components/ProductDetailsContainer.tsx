import { useEffect, useState } from "react";
import { IProduct } from "../interfaces/response-products";
import { getProductById } from "../helpers/getData";
import { ProductDetailsCard } from "./ProductDetailsCard";

export const ProductDetailsContainer = ({ id }: { id: number }) => {
  const [productDetails, setProductDetails] = useState<IProduct | undefined>(
    undefined
  );
  console.log(productDetails);

  useEffect(() => {
    getProductById(id).then((res) => setProductDetails(res));
  }, [id]);

  return (
    <div>
      {productDetails && <ProductDetailsCard product={productDetails} />}
    </div>
  );
};
