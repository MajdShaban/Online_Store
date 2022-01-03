import { ActionTypes } from "../constants/actionType";
// import { bake_cookie, read_cookie } from "sfcookies";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

let uniq = [];

export const quantityCartReducer = (state = [], { type, payload }) => {
  // state = read_cookie("cart");
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      // bake_cookie("cart", [...state, payload]);
      state.push(payload);
      uniq = [
        ...state.reduce((map, obj) => map.set(obj.id, obj), new Map()).values(),
      ];

      return [...uniq];

    case ActionTypes.REMOVE_FROM_CART: {
      // const elem = state.find((el) => el.id === payload);
      // state.splice(state.indexOf(elem), 1);
      // bake_cookie("cart", [...state]);
      // return [...state];

      const newState = state.filter((item) => item.id !== payload.id);
      return newState;
    }

    case ActionTypes.ADDQTYTOCART:
      const newState = state.map((item) => {
        if (item.id === payload.id) {
          item.quantity = payload.quantity;
          return item;
        }
        return item;
      });
      return newState;

    case ActionTypes.CLEAR_CART:
      // bake_cookie("cart", []);
      return [];

    default:
      return state;
  }
};

export const selectedCategoryReducer = (
  state = { selected: "all" },
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SELECTED_CATEGORY:
      return { ...state, selected: payload };
    default:
      return state;
  }
};

export const setQuantityReducer = (state = 1, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_QUANTITY:
      return payload;
    default:
      return state;
  }
};
