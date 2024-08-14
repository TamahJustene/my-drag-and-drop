import React, { useState } from "react";
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";
import { Modal, Button } from "react-bootstrap";

const Card = ({ card }) => {
  const [show, setShow] = useState(false);

  const handleShowMore = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <Draggable defaultPosition={{ x: card.x, y: card.y }}>
      <Resizable
        defaultSize={{ width: card.width, height: card.height }}
        minWidth={100}
        minHeight={100}
      >
        <div className="card p-2">
          <p>
            {card.text.substring(0, 30)}...
            <button className="btn btn-link p-0" onClick={handleShowMore}>
              Show More
            </button>
          </p>
        </div>
        {/* Modal for showing more content */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Card Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>{card.text}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Resizable>
    </Draggable>
  );
};

export default Card;
