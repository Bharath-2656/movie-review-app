import React, { useState } from 'react';
import './Rating.css';
import { FaCheck } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';


const RatingComponent = () => {
  const [rating, setRating] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveRating = () => {
    // Simulate saving the rating
    setTimeout(() => {
      // Show a toast notification instead of the message
      toast.success('Rating saved successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }, 1000);
  };

  const handleStarClick = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = () => {
    // Simulate saving the rating
    console.log('Rating saved:', rating);
    setIsSaved(true);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleStarClick(star)}
          style={{
            cursor: 'pointer',
            fontSize: '24px',
            color: star <= rating ? 'gold' : 'gray',
          }}
        >
          ★
        </span>
      ))}
      <button className="save-rating-button" onClick={handleSaveRating} disabled={isSaved}>
        <FaCheck className="check-icon" />
        <ToastContainer />
      </button>
      {isSaved && <p>Rating saved successfully!</p>}
    </div>
  );
};

export default RatingComponent;