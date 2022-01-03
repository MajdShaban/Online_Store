import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
  addToCart,
  setQuantity,
} from "../../../redux/action/prodactActions";
import { fetchProductDetail } from "../../../apis/apis";
import "./ProductDetails.css";
import QuantityForm from "../../Layout/QuantityForm/QuantityForm";

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const quantity = useSelector((state) => state.quantity);
  console.log(quantity);

  const { image, title, price, category, description } = product;

  const totalPrice = quantity * price;

  useEffect(() => {
    if (productId && productId !== "")
      fetchProductDetail(dispatch, selectedProduct, productId);
    return () => {
      dispatch(removeSelectedProduct());
      dispatch(setQuantity(1));
    };
  }, [productId, dispatch]);

  const handleAddToCart = () => {
    quantity && dispatch(addToCart(product, quantity));
  };

  console.log("ProductDetails Render");

  return (
    <div className="container">
      {Object.keys(product).length === 0 ? (
        <div className="lds-dual-ring"></div>
      ) : (
        <div className="row p-md-5 p-lg-6 justify-content-around">
          <div className="col-lg-5 align-self-center my-5 m-md-6 detailsImg">
            <img src={image} className="img-fluid rounded-start " alt={title} />
          </div>
          <div className="col-lg-5 align-self-center detailsSection">
            <p className="   detailCategory">{category}</p>
            <div className="detailsContent">
              <div className="p-4">
                <h5 className="card-title  p-3 detailsTitle">{title}</h5>
                <span className="bg-primary p-3 detailsPrice fw-bolder">
                  ${totalPrice}
                </span>
              </div>
              <p className="card-text fs-6 p-2 my-2">{description}</p>
              <div className="d-flex ">
                <button
                  className="btn btn-outline-danger  mx-3 "
                  onClick={handleAddToCart}
                >
                  Add To Cart <i className="bi bi-cart4"></i>
                </button>
                <QuantityForm
                  itemQuantity={quantity}
                  id={productId}
                  selectStyle={`form-select-lg`}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductDetails;
