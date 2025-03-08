import React from 'react';
import './MovieCard.css';

const MovieCard = ({ title, description, releaseYear, genre, director, imageUrl, createdAt, updatedAt }) => {
  return (
    <div className="movie-card">
      {imageUrl && <img src={imageUrl} alt={title} className="movie-card-image" />}
      <div className="movie-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p><strong>Release Year:</strong> {releaseYear}</p>
        <p><strong>Genre:</strong> {genre}</p>
        <p><strong>Director:</strong> {director}</p>
        <p><strong>Created At:</strong> {new Date(createdAt).toLocaleDateString()}</p>
        <p><strong>Updated At:</strong> {new Date(updatedAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default MovieCard;
