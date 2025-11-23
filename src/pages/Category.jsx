import React from "react";
import Navbar from "../components/common/Navbar";
import { categories } from "../data/data";
import { Link } from "react-router-dom";
function Category() {
  return (
    <div>
      <h1>categories Sr2Edge</h1>
      <ul className="flex flex-wrap gap-4">
        {categories.map((categoryList) => (
          <li key={categoryList.id}>
            <Link to={`/CategoryDetails/${categoryList.name}`}>
              {categoryList.name}
              <img
                src={categoryList.img}
                alt={categoryList.name}
                style={{ width: "150px" }}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
