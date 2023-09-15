import React, { useState } from "react";
import "./pizza.css";
import Modal from "react-bootstrap/Modal";
const Pizza = ({ pizza }) => {
  const [quentity, setquentity] = useState(1);
  const [varient, setvarient] = useState("small");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="content">
      <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
        <img
          src={pizza.imageUrl}
          className="img-fluid"
          style={{ height: "200px", width: "280px", paddingTop: "1px" }}
        />
      </div>

      <div className="flex-container">
        <div className="w-100">
          <p> Varients</p>

          <select
            value={varient}
            onChange={(e) => {
              setvarient(e.target.value);
            }}
          >
            {pizza.varients.map((varient, index) => (
              <option key={index} value={varient}>
                {varient}
              </option>
            ))}
          </select>
        </div>
        <div className="w-100">
          <p>Quentity</p>

          <select
            value={quentity}
            onChange={(e) => {
              setquentity(e.target.value);
            }}
          >
            {[...Array(10)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-prices">
          <div>
            <h1>price:{pizza.prices[0][varient] * quentity}</h1>
          </div>

          <div className="btn">ADD TO CART</div>
        </div>
      </div>

      <div className="content-model">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{pizza.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={pizza.imageUrl} className="img-fluid"></img>
            <p>{pizza.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn" onClick={handleClose}>
              CLOSE
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Pizza;
