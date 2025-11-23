import React from "react";
import { products } from "../data/data";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { productId } = useParams();
  const currentproducts = products.filter(
    (product) => product.productId === productId
  );
  const product = products.find((p) => p.id === parseInt(productId, 10));
  console.log(currentproducts);
  return (
    <>
      <div className="shadow-sm card bg-base-100 w-96">
        <figure>
          <img src={product.img} alt={product.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>

          <h1 className="card-title">{product.price}</h1>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
