import React, { useState } from 'react';
import { FaStar, FaTimes, FaCheck } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import './Review.css';
import { addReview } from '../service/api.service';

const Review = ({movieId, isModalOpen, setIsModalOpen}) => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const closeModal = () => setIsModalOpen(false);

  const handleStarClick = (value) => setRating(value);

  const handleSubmitReview = () => {
    if (rating === 0 || reviewText.trim() === '') {
      toast.error('Please provide both rating and review text.');
      return;
    }

    // Simulate saving the review
    console.log('Submitted Review:', { rating, reviewText });
    addReview({movieId: movieId, rating: rating, description: reviewText}).then(() => {
      toast.success('Review submitted successfully!');
      closeModal();
    });
  };

  return (
    <div className="review-container">

      {isModalOpen && (
        <div className="review-modal-overlay">
          <div className="review-modal">
            <div className="review-modal-header">
              <h3>Add Your Review</h3>
              <button className="modal-close-button" onClick={closeModal}>
                <FaTimes />
              </button>
            </div>

            <div className="review-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className="review-star"
                  onClick={() => handleStarClick(star)}
                  color={star <= rating ? "gold" : "gray"}
                />
              ))}
            </div>

            <textarea
              className="review-textarea"
              placeholder="Write your review here..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />

            <button
              className="submit-review-button"
              onClick={handleSubmitReview}
            >
              <FaCheck /> Submit Review
            </button>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default Review;