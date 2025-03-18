// src/screens/ViewReview.jsx

import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import ReviewList from '../components/ReviewList';
import { getMovieById, getReviews } from '../service/api.service';

const ViewReview = () => {
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);
  const queryParams = new URLSearchParams(location.search);
  const movieId = queryParams.get('id');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieData = await getMovieById(movieId);
        const reviews = await getReviews(movieId);
        setMovie(movieData);
        setReviews(reviews);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Movie Reviews</h1>
      {!movie ? (
        <p>No movies found.</p>
      ) : (
          <div className="movie-card-container">
            <MovieCard {...movie} />
            <ReviewList reviews={reviews || []} />
          </div>
      )}
    </div>
  );
};

export default ViewReview;