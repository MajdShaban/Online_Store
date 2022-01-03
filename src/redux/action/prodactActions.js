import { ActionTypes } from "../constants/actionType";
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = (product) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    payload: product,
  };
};

export const addToCart = (product, quantity) => {
  console.log("From Action Generator");
  console.log(quantity);
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: { ...product, quantity },
  };
};

export const removeFromCart = (productId) => {
  console.log("Action");
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: productId,
  };
};

export const addQtyToProduct = (id, quantity) => {
  return {
    type: ActionTypes.ADDQTYTOCART,
    payload: { id, quantity },
  };
};

export const clearCart = () => {
  return {
    type: ActionTypes.CLEAR_CART,
  };
};

export const setSelectedCategory = (selected) => {
  return {
    type: ActionTypes.SELECTED_CATEGORY,
    payload: selected,
  };
};

export const setQuantity = (quantity) => {
  return {
    type: ActionTypes.SET_QUANTITY,
    payload: quantity,
  };
};
