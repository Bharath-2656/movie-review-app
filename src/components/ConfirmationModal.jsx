import React, { useState } from 'react';
import './ConfirmationModal.css';

const DeleteConfirmationModal = ({ open, onClose, onConfirm }) => {
  const [confirming, setConfirming] = useState(false);
console.log('entry log');
  const handleConfirmClick = () => {
    setConfirming(true);
    setTimeout(() => {
      if (confirming) {
        onConfirm();
        onClose();
      }
    }, 100); // Small delay to ensure the click is registered
  };

  return (
    <div className={`modal ${open ? 'open' : ''}`}>
      <div className="modal-content">
        <h2>Delete Movie</h2>
        <p>Are you sure you want to delete this movie?</p>
        <button onClick={onClose}>Cancel</button>
        <button onClick={handleConfirmClick} disabled={confirming}>
          {confirming ? 'Deleting...' : 'Delete'}
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;