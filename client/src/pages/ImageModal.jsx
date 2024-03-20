import React, { useState } from "react";
import Modal from "react-modal";

const ImageModal = ({ isOpen, onClose, imageUrl }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <img src={imageUrl} alt="Full-size image" />
    </Modal>
  );
};

export default ImageModal;
