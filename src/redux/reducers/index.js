// combine multiple reducers

import { combineReducers } from "redux";
import {
  productReducer,
  selectedProductReducer,
  quantityCartReducer,
  selectedCategoryReducer,
  setQuantityReducer,
} from "./producatReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  cart: quantityCartReducer,
  selectedCategory: selectedCategoryReducer,
  quantity: setQuantityReducer,
});

export default reducers;
