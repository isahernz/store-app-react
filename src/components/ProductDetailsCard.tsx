import { IProduct } from "../interfaces/response-products";

export const ProductDetailsCard = ({ product }: { product: IProduct }) => {
  return (
    <article className="border">
      <h3>{product.name}</h3>
    </article>
  );
};
