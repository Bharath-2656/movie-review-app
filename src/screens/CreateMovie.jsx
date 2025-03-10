import React, { useState, useCallback } from 'react';
import './CreateMovie.css';
import CustomInput from '../components/CustomInput';
import Button from '../components/Button';
import {useNavigate} from 'react-router-dom';
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

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    console.log(e.target);
    console.log('Name:', name, 'Value:', value);
    setMovie((prevMovie) => ({ ...prevMovie, [name]: value }));
  }, []);

const handleSubmit = useCallback((e) => {
  e.preventDefault();
  const { title, description, releaseYear, genre, director, imageUrl } = movie;
  
  if (!title || !description || !releaseYear || !genre || !director || !imageUrl) {
    alert('All fields are required');
    return;
  }
  
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
}, [movie, navigate]);
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
            <label>{label}:</label>
            <CustomInput
              label={label}
              type={type}
              name={name}
              value={movie[name]}
              onChange={handleInputChange}
              required
            />
          </div>
        ))}
        <Button label="Add Movie" type="submit" className="submit-button" />
      </form>
    </div>
  );
};

export default CreateMovie;
