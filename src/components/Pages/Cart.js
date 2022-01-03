import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/action/prodactActions";
import Modal from "../Modal/Modal";
import QuantityForm from "../Layout/QuantityForm/QuantityForm";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Show Sign In Modal
  const [showModal, setShowModal] = useState(false);

  // Array Of Prices Products
  const totalPriceList = cart.map((el) => {
    return el.price * el.quantity;
  });

  // Total Price
  let sumTotalPriceList = totalPriceList.reduce((a, b) => a + b, 0).toFixed(2);

  const cartList = cart.map((el, i) => {
    return (
      <tr key={i}>
        <th scope="row">{i + 1}</th>
        <td>{el.category}</td>
        <td>${el.price}</td>
        <td className="px-3">{el.quantity}</td>
        <td>
          <QuantityForm
            itemQuantity={el.quantity}
            id={el.id}
            selectStyle={`form-select-sm`}
          />
        </td>
        <td>${el.price * el.quantity}</td>
        <td>
          <span
            style={{ cursor: "pointer", color: "#dc3545" }}
            onClick={() => dispatch(removeFromCart(el.id))}
          >
            Remove
          </span>
        </td>
      </tr>
    );
  });

  return (
    <div className="container">
      <Modal show={showModal} closeModal={() => setShowModal(false)} />
      {cart.length ? (
        <div className="table-responsive-md">
          <table className="table table-striped my-4">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Category</th>
                <th scope="col">Price</th>
                <th scope="col">QTY</th>
                <th scope="col"></th>
                <th scope="col">T.Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{cartList}</tbody>
            <tfoot>
              <tr>
                <th>Total Price</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>${sumTotalPriceList}</th>
                <th></th>
              </tr>
            </tfoot>
          </table>
          <div className="text-center">
            <button
              type="button"
              className="btn btn-outline-primary col-6"
              onClick={() => setShowModal(true)}
            >
              Sign In To Payment
            </button>
          </div>
        </div>
      ) : (
        <div className="text-danger text-center fs-1 fw-bold my-1">
          <i className="bi bi-reply-fill"></i>
          <div>Please Go Back And Select Product !!! </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
