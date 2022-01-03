import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../../redux/action/prodactActions";
import "./ProdactComponent.css";

const Productcopmponent = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);

  const renderProduct = products.map((product) => {
    const { title, image, price, id } = product;

    return (
      <div className="col " key={id}>
        <div className="card h-100 cardSection">
          <Link to={`/product/${id}`} className="card-image ">
            <img src={image} className="card-img-top p-2 my-auto" alt={title} />
          </Link>
          <div className="card-body " style={{ overflow: "hidden" }}>
            <p className="card-title  text-center fw-bold ">{title}</p>
          </div>
          <div className="card-footer d-flex justify-content-between text-dark">
            <p className="card-text fw-bold price">
              <span className="fw-bold ">$</span>
              {price}
            </p>
            <i
              className="bi bi-cart4 text-muted  fs-5 align-self-center btn"
              onClick={() => dispatch(addToCart(product, 1))}
            ></i>
          </div>
        </div>
      </div>
    );
  });

  return <>{renderProduct}</>;
};
export default Productcopmponent;
