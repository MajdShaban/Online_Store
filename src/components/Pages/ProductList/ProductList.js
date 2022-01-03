import React from "react";
import { useSelector } from "react-redux";
import ProductCopmponent from "./ProductComponent";

// import { setProducts } from "../../../redux/action/prodactActions";
// import { fetchProducts } from "../../../apis/apis";
import CategoryForm from "../../Layout/CategoryForm/CategoryForm";

import "./ProductList.css";

const ProductList = () => {
  const products = useSelector((state) => state.allProducts.products);
  const selectedCategory = useSelector(
    (state) => state.selectedCategory.selected
  );

  // useEffect(() => {
  //   console.log("ProductList ferchProducts");
  //   fetchProducts(dispatch, setProducts);
  // }, [dispatch]);

  return (
    <div className="container">
      <div className="homeHeader">
        <p>
          {selectedCategory === "all"
            ? "All Products"
            : selectedCategory.toUpperCase()}
        </p>
        <CategoryForm />
      </div>
      <div className=" row row-cols-1 row-cols-sm-2 row-cols-lg-4  g-4 allProducts">
        {products.length ? (
          <ProductCopmponent />
        ) : (
          <div className="lds-dual-ring"></div>
        )}
      </div>
    </div>
  );
};
export default React.memo(ProductList);
