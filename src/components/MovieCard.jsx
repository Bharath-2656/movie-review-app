import React, { useState } from 'react';
import { FaEdit, FaTrashAlt, FaCheck } from 'react-icons/fa';
import './MovieCard.css';
import RatingComponent from './Rating';
import DeleteConfirmationModal from './ConfirmationModal';

const MovieCard = ({ id, title, description, releaseYear, genre, director, imageUrl }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleDelete = async () => {
    await onDelete();
    handleClose();
  };
  const onDelete = async (movieId) => {
    try {
      console.log('Deleting movie:', movieId);
      // await apiService.deleteMovie(movieId);
      // Optionally, refetch the list of movies to update the UI
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  };

  return (
    <div className="movie-card">
      {imageUrl && <img src={imageUrl} alt={title} className="movie-card-image" />}
      <div className="movie-card-content">
        <div className="movie-card-header">
          <h3>{title}</h3>
          <div className="movie-card-actions">
            <button className="edit-button"><FaEdit /> Edit</button>
            <button className="delete-button" onClick={() => handleClickOpen(id)}><FaTrashAlt /> Delete</button>
          </div>
        </div>
        <p>{description}</p>
        <p><strong>Release Year:</strong> {releaseYear}</p>
        <p><strong>Genre:</strong> {genre}</p>
        <p><strong>Director:</strong> {director}</p>
        <div className="movie-card-rating">
          <div className="stars">
            <RatingComponent  />
          </div>
        </div>
      </div>
      <DeleteConfirmationModal
        key={id}
        open={openModal}
        onClose={handleClose}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default MovieCard;
