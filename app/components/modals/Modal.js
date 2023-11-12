import React from "react";
import Modal from "react-bootstrap/Modal";

const CustomModal = ({ onClose, isOpen, body, title, footer }) => {
  return (
    <Modal show={isOpen} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {body}
        {footer}
      </Modal.Body>
    </Modal>
  );
};

export default CustomModal;
