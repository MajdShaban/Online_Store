import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const cartQty = useSelector((state) => state.cart);

  return (
    <div className="position-sticky top-0" style={{ zIndex: 1200 }}>
      <nav className="navbar navbar-dark bg-dark p-3">
        <div className="container d-flex justify-content-between">
          <Link className="navbar-brand" to="/">
            <span className={styles.logoSpan1}>Online</span>{" "}
            <span className={styles.logoSpan2}>Store</span>
          </Link>
          <Link to="/cart">
            <i className={`bi bi-cart4  fs-2 position-relative ${styles.icon}`}>
              <span
                className={`${styles.iconSpan}  start-100 translate-middle   ${
                  cartQty.length ? "" : "d-none"
                } `}
              >
                {cartQty.length}
              </span>
            </i>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
