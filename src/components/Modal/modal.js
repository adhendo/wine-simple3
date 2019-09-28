import React from "react";
import "./modal.css";

const Modal = props => (
  <div className="modal">
    <section className="modal__actions">
      {props.canCancel && (
        <button className="btn" onClick={props.onCancel}>
          X
        </button>
      )}
    </section>
    <header className="modal__header">
      <h1>{props.title}</h1>
    </header>
    <section className="modal__content">{props.children}</section>
  </div>
);

export default Modal;
