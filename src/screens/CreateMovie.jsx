import React, { useState, useCallback } from 'react';
import './CreateMovie.css';
import CustomInput from '../components/CustomInput';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const CreateMovie = () => {
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    title: '',
    description: '',
    releaseYear: '',
    genre: '',
    director: '',
    imageUrl: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setMovie((prevMovie) => ({ ...prevMovie, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setErrors((prevErrors) => ({ [e.target.name]: '' }));


    if (!movie.title) errors.title = 'Title is required';
    if (!movie.description) errors.description = 'Description is required';
    console.log(!movie.releaseYear || isNaN(movie.releaseYear) || (movie.releaseYear < 1900 || movie.releaseYear > 2025));
    if (!movie.releaseYear || isNaN(movie.releaseYear) || (movie.releaseYear < 1900 || movie.releaseYear > 2025)) errors.releaseYear = 'Release Year must be a number';
    if (!movie.genre) errors.genre = 'Genre is required';
    if (!movie.director) errors.director = 'Director is required';
    if (!movie.imageUrl) errors.imageUrl = 'Image URL is required';
    setErrors(() => ({ ...errors, [e.target.name]: '' }));

    if (Object.keys(errors).length > 0) return;

    console.log('New Movie:', movie);
    // Reset form fields
    setMovie({
      title: '',
      description: '',
      releaseYear: '',
      genre: '',
      director: '',
      imageUrl: '',
    });
    navigate('/');
  }, [movie, navigate, errors]);

  const fields = [
    { label: 'Movie Title', name: 'title', type: 'text' },
    { label: 'Description', name: 'description', type: 'text' },
    { label: 'Release Year', name: 'releaseYear', type: 'number' },
    { label: 'Genre', name: 'genre', type: 'text' },
    { label: 'Director', name: 'director', type: 'text' },
    { label: 'Image Url', name: 'imageUrl', type: 'url' },
  ];

  return (
    <div className="create-movie">
      <h2>Create Movie</h2>
      <form onSubmit={handleSubmit}>
        {fields.map(({ label, name, type }) => (
          <div key={name} className="form-group">
            <label><strong>{label}:</strong></label>
            <CustomInput
              label={label}
              type={type}
              name={name}
              value={movie[name]}
              onChange={handleInputChange}
              required
              error={errors[name]}
            />
            {errors[name] && <span className="error-message">{errors[name]}</span>}
          </div>
        ))}
        <Button
          label="Add Movie"
          type="submit"
          className="submit-button"
          disabled={Object.keys(errors).length > 0}
        />
      </form>
    </div>
  );
};

export default CreateMovie;