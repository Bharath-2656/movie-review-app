import React from 'react';
import { FaEdit, FaTrashAlt, FaCheck } from 'react-icons/fa';
import './MovieCard.css';
import RatingComponent from './Rating';

const MovieCard = ({ title, description, releaseYear, genre, director, imageUrl }) => {
  return (
    <div className="movie-card">
      {imageUrl && <img src={imageUrl} alt={title} className="movie-card-image" />}
      <div className="movie-card-content">
        <div className="movie-card-header">
          <h3>{title}</h3>
          <div className="movie-card-actions">
            <button className="edit-button"><FaEdit /> Edit</button>
            <button className="delete-button"><FaTrashAlt /> Delete</button>
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
    </div>
  );
};

export default MovieCard;
