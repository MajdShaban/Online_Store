import axios from "axios";

export const fetchProducts = async (dispatch, setProducts) => {
  const response = await axios
    .get("https://fakestoreapi.com/products")
    .catch((err) => console.log("ERR", err));
  dispatch(setProducts(response.data));
};

export const fetchCategoryProducts = async (
  dispatch,
  setProducts,
  selected
) => {
  if (selected === "all") {
    const response = await axios
      .get(`https://fakestoreapi.com/products`)
      .catch((err) => console.log("ERR", err));
    dispatch(setProducts(response.data));
  } else {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${selected}`
    );
    dispatch(setProducts(response.data));
  }
};

export const fetchProductDetail = async (
  dispatch,
  selectedProduct,
  productId
) => {
  const response = await axios
    .get(`https://fakestoreapi.com/products/${productId}`)
    .catch((err) => {
      console.log("Err: ", err);
    });

  dispatch(selectedProduct(response.data));
};
