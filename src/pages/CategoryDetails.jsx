import React from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data/data";

function CategoryDetails() {
  const { categoryId } = useParams();
  const currentCategoryArray = products.filter(
    (product) => product.categoryId === categoryId
  );
  console.log(currentCategoryArray);
  console.log(categoryId);
  return (
    <div>
      CategoryDetails of {categoryId}
      <ul className="flex gap-4">
        {currentCategoryArray.map((product) => (
          <li key={product.id}>
            <Link to={`ProductDetail/${product.id}`}>
              {product.name}
              {product.price}
              <img
                src={product.img}
                alt={product.name}
                style={{ width: "150px" }}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryDetails;
