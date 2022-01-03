import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategoryProducts } from "../../../apis/apis";
import {
  setSelectedCategory,
  setProducts,
} from "../../../redux/action/prodactActions";

const CategoryForm = () => {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState("all");
  const dispatch = useDispatch();

  const fetchCategory = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products/categories")
      .catch((err) => console.log("Error Fetch Category", err));
    response && setCategories(response.data);
  };

  useEffect(() => {
    fetchCategory();
    console.log("CategoryForm FetchCategory");
  }, []);

  useEffect(() => {
    dispatch(setSelectedCategory(selected));
    fetchCategoryProducts(dispatch, setProducts, selected);
  }, [selected, dispatch]);

  const handleSelected = ({ target }) => {
    setSelected(target.value);
  };

  return (
    <form className="category">
      <select
        className="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
        onChange={handleSelected}
      >
        <option value="all">Select Category</option>
        {categories.map((category, index) => {
          return (
            <option value={category} key={index}>
              {category}
            </option>
          );
        })}
      </select>
    </form>
  );
};

export default CategoryForm;
