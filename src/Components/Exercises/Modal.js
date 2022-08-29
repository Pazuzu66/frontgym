import React from "react";
import PropTypes from "prop-types";

const Modal = ({ show, children }) => {
  const showHideModalClass = show ? "modal block" : "modal hidden";
  return (
    <div className={showHideModalClass}>
      <section className="absolute bottom-12 w-full border-2">
        {children}
      </section>
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
};
export default Modal;
