import { IProduct } from "../interfaces/response-products";

export const ProductCard = ({
  id,
  name,
  description,
  image,
  price,
}: IProduct) => {
  return (
    <article className="bg-white shadow-md rounded-lg">
      <img src={image} alt={name} className="aspect-square" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-700">{description}</p>
        <p className="text-gray-700">
          <span className="font-bold">Price:</span> ${price}
        </p>
      </div>
      <a href={`product/${id}`}>See more</a>
    </article>
  );
};
