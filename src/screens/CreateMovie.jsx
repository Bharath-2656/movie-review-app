import React, { useState } from 'react';
import CustomInput from '../components/CustomInput';
import Button from '../components/Button';
import { getTheme } from '../theme/index';

const CreateMovie = () => {
  const theme = getTheme();
  const [movie, setMovie] = useState({
    title: '',
    description: '',
    releaseYear: '',
    genre: '',
    director: '',
    imageUrl: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = { ...movie };
    console.log('New Movie:', newMovie);
    // Reset form fields
    setMovie({
      title: '',
      description: '',
      releaseYear: '',
      genre: '',
      director: '',
      imageUrl: '',
    });
  };

  return (
    <div className="create-movie" style={{width: '100%', justifyContent: 'center'}}>
      <h2>Create Movie</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', padding: '0 10px' }}>
          <label>Title:</label>
          <CustomInput label="Title:" type="text" value={movie.title} onChange={(e) => setMovie({ ...movie, title: e.target.value })} required style={{ width: '60%' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', padding: '0 10px' }}>
          <label>Description:</label>
          <CustomInput label="Description:" type="textarea" value={movie.description} onChange={(e) => setMovie({ ...movie, description: e.target.value })} required style={{ width: '60%' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', padding: '0 10px' }}>
          <label>Release Year:</label>
          <CustomInput label="Release Year:" type="number" value={movie.releaseYear} onChange={(e) => setMovie({ ...movie, releaseYear: e.target.value })} required style={{ width: '60%' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', padding: '0 10px' }}>
          <label>Genre:</label>
          <CustomInput label="Genre:" type="text" value={movie.genre} onChange={(e) => setMovie({ ...movie, genre: e.target.value })} required style={{ width: '60%' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', padding: '0 10px' }}>
          <label>Director:</label>
          <CustomInput label="Director:" type="text" value={movie.director} onChange={(e) => setMovie({ ...movie, director: e.target.value })} required style={{ width: '60%' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', padding: '0 10px' }}>
          <label>Image URL:</label>
          <CustomInput label="Image URL:" type="url" value={movie.imageUrl} onChange={(e) => setMovie({ ...movie, imageUrl: e.target.value })} required style={{ width: '60%' }} />
        </div>
        <Button 
          label="Add Movie" 
          onClick={handleSubmit} 
          style={{
            backgroundColor: 'var(--primary-color)',
            color: theme.secondaryBackground,
            padding: '10px 20px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
        />
      </form>
    </div>
  );
};

export default CreateMovie;
