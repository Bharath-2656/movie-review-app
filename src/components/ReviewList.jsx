import React, { useState } from "react";
import "./ReviewList.css";
import { FaEdit, FaStar, FaTrashAlt } from "react-icons/fa";
import DeleteConfirmationModal from "./ConfirmationModal";
import { deleteReview } from "../service/api.service";
import Review from "./Review";

const ReviewList = ({ reviews }) => {
  const [openReviewModal, setOpenReviewModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  

  const handleOpenDelete = () => setOpenDeleteModal(true);
    const handleCloseDelete = () => setOpenDeleteModal(false);
  
  
    const handleDelete = async (id) => {
      await onDelete(id);
      // refreshMovies();
      handleCloseDelete();
    };
  
    const onDelete = async (reviewId) => {
      try {
        await deleteReview(reviewId);
      } catch (error) {
        console.error('Error deleting movie:', error);
      }
    };
  
    const handleEdit = () => {
      setOpenReviewModal(true);
    };


  if (!reviews || reviews.length === 0) {
    return null;
  }

  return (
    <div className="review-list">
      <h4 className="review-list-heading">User Reviews</h4>
      <div
        className={`review-list-scroll ${
          reviews.length > 2 ? "scrollable" : ""
        }`}
      >
        {reviews.map((review, index) => (
          <div>
          <div key={index} className="review-item">
            <div>
            <div>
              {index === 0 && (
                <p className="review-author">User: {review.user.username}</p>
              )}
            </div>
              <div className="review-rating">
                <div>Rating: </div>
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} color="gold" />
                ))}
              </div>
              <p className="review-text">"Description: {review.description}"</p>
              {index < reviews.length - 1 && <hr className="review-divider" />}
            </div>
           
            <div className="movie-card-actions">
              <button className="edit-button" onClick={() => handleEdit(review.id)}>
                <FaEdit /> Edit
              </button>
              <button className="delete-button" onClick={() => handleOpenDelete(review.id)}>
                <FaTrashAlt /> Delete
              </button>
            </div>
          </div>
            {openReviewModal && <Review movieId={review.id} isModalOpen={openReviewModal} setIsModalOpen={setOpenReviewModal} />}
            <DeleteConfirmationModal  open={openDeleteModal} onClose={handleCloseDelete} onConfirm={handleDelete} title={'Delete Review'} description={'Are you sure you want to delete this review?'} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewList;
