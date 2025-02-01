import { IProduct } from "../interfaces/response-products";
import { ProductCard } from "./ProductCard";

export const ProductList = ({ products }: { products: IProduct[] }) => {
  console.log("Product List Rendered");
  return (
    <section>
      <h2 className="text-2xl font-bold">Products</h2>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};
