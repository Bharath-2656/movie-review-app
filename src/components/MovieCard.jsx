import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaEye, FaTrashAlt } from 'react-icons/fa';
import './MovieCard.css';
import Review from './Review';
import DeleteConfirmationModal from './ConfirmationModal';
import { deleteMovie } from '../service/api.service';

const MovieCard = ({ id, title, description, releaseYear, genre, director, imageUrl, refreshMovies }) => {
  const userData = JSON.parse(localStorage.getItem('user')) || null;
  const role = userData?.role;
  const navigate = useNavigate();
  
  const [openReviewModal, setOpenReviewModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  // Dummy review data
  const dummyReviews = [{ rating: 5, text: "Amazing!" }, { rating: 4, text: "Really enjoyed it." }];

  const handleCloseReview = () => setOpenReviewModal(false);

  const handleOpenDelete = () => setOpenDeleteModal(true);
  const handleCloseDelete = () => setOpenDeleteModal(false);


  const handleDelete = async () => {
    await onDelete(id);
    refreshMovies();
    handleCloseDelete();
  };

  const onDelete = async (movieId) => {
    try {
      await deleteMovie(movieId);
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  };

  const handleEdit = () => {
    navigate(`/create-movie?id=${id}`);
  };

  return (
    <div className="movie-card">
      <div className="movie-card-left">
        {imageUrl && <img src={imageUrl} alt={title} className="movie-card-image" />}
        <div className="movie-card-title">{title}</div>
      </div>

      <div className="movie-card-right">
        <p className="movie-card-description">{description}</p>
        <p><strong>Release Year:</strong> {releaseYear}</p>
        <p><strong>Genre:</strong> {genre}</p>
        <p><strong>Director:</strong> {director}</p>

        <Review movieId={id} open={openReviewModal} onClose={handleCloseReview} />

        {/* Admin Actions */}
        {role === "admin" && (
          <div className="movie-card-actions">
            <button className="edit-button" onClick={handleEdit}>
              <FaEdit /> Edit
            </button>
            <button className="delete-button" onClick={handleOpenDelete}>
              <FaTrashAlt /> Delete
            </button>
          </div>
        )}
      </div>

      <DeleteConfirmationModal open={openDeleteModal} onClose={handleCloseDelete} onConfirm={handleDelete} />
    </div>
  );
};

export default MovieCard;