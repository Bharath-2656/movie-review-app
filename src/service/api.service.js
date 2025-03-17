import axiosInstance from "../config/axiosConfig";

export const getMovies = async () => {
  try {
    const response = await axiosInstance.get("/movies");
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export const getMovieById = async (movieId) => {
  try {
    const response = await axiosInstance.get(`/movies/${movieId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export const createMovie = async (movieData) => {
  try {
    const response = await axiosInstance.post("/movies", movieData);
    return response.data;
  } catch (error) {
    console.error("Error creating movie:", error);
    throw error;
  }
};

export const updateMovie = async (movieId, movieData) => {
  try {
    const response = await axiosInstance.put(`/movies/${movieId}`, movieData);
    return response.data;
  } catch (error) {
    console.error("Error updating movie:", error);
    throw error;
  }
};

export const deleteMovie = async (movieId) => {
  try {
    const response = await axiosInstance.delete(`/movies/${movieId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting movie:", error);
    throw error;
  }
};

export const addReview = async (movieId, reviewData) => {
  try {
    const response = await axiosInstance.post(
      `/reviews/${movieId}`,
      reviewData
    );
    return response.data;
  } catch (error) {
    console.error("Error adding review:", error);
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axiosInstance.post("auth/login", { email, password });
    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

export const registerUser = async (username, email, password) => {
  try {
    const response = await axiosInstance.post("auth/register", {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
};
