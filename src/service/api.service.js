import axios from 'axios';

const API_URL = env.API_URL;

export const getMovies = async () => {
  try {
    const response = await axios.get(`${API_URL}/movies`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const createMovie = async (movieData) => {
  try {
    const response = await axios.post(`${API_URL}/movies`, movieData);
    return response.data;
  } catch (error) {
    console.error('Error creating movie:', error);
    throw error;
  }
};

export const updateMovie = async (movieId, movieData) => {
  try {
    const response = await axios.put(`${API_URL}/movies/${movieId}`, movieData);
    return response.data;
  } catch (error) {
    console.error('Error updating movie:', error);
    throw error;
  }
};

export const deleteMovie = async (movieId) => {
  try {
    const response = await axios.delete(`${API_URL}/movies/${movieId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting movie:', error);
    throw error;
  }
};

export const addReview = async (movieId) => {
  try {
    const response = await axios.post(`${API_URL}/reviews/${movieId}`);
    return response.data;
  } catch (error) {
    console.error('Error adding review:', error);
    throw error;
  }
};