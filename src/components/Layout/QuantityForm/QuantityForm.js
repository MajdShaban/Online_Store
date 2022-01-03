import React from "react";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import {
  addQtyToProduct,
  setQuantity,
} from "../../../redux/action/prodactActions";

const QuantityForm = ({ itemQuantity, id, selectStyle }) => {
  const dispatch = useDispatch();
  // const quantity = useSelector((state) => state.quantity);

  const handleChange = ({ target }) => {
    const value = parseInt(target.value);
    dispatch(setQuantity(value));
    dispatch(addQtyToProduct(id, value));
  };

  console.log("QuantityForm Render");

  return (
    <select
      defaultValue={itemQuantity}
      onChange={handleChange}
      className={`form-select ${selectStyle}  h-100 mx-md-2`}
      aria-label={`.${selectStyle} example`}
      style={{ width: "fit-content", display: "inline-block" }}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
    </select>
  );
};

export default QuantityForm;
