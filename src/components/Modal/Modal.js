import React, { useState } from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";
import LoginForm from "../Layout/LoginForm";
import SignUpForm from "../Layout/SignUpForm";

const Backdrop = ({ close, show }) => {
  return (
    <div
      className={`${styles.backDrop} ${show ? styles.showBackdrop : null}`}
      onClick={close}
    ></div>
  );
};

const Overlay = ({ show, activeSignUp, showSignUp, hiddenSignUp, close }) => {
  return (
    <div className={`${styles.overlay} ${show ? styles.showOverlay : null}`}>
      {!showSignUp && (
        <LoginForm
          showSignUp={showSignUp}
          activeSignUp={activeSignUp}
          close={close}
        />
      )}
      {showSignUp && <SignUpForm hiddenSignUp={hiddenSignUp} close={close} />}
    </div>
  );
};

const Modal = ({ show, closeModal }) => {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <Backdrop close={closeModal} show={show} />
          <Overlay
            show={show}
            activeSignUp={() => setShowSignUp(true)}
            hiddenSignUp={() => setShowSignUp(false)}
            showSignUp={showSignUp}
            close={closeModal}
          />
        </>,
        document.getElementById("modal")
      )}
    </>
  );
};

export default Modal;
