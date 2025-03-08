import React, { useState } from 'react';
import CustomInput from '../components/CustomInput';
import Button from '../components/Button';

const CreateMovie = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [genre, setGenre] = useState('');
  const [director, setDirector] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      title,
      description,
      releaseYear,
      genre,
      director,
      imageUrl,
    };
    console.log('New Movie:', newMovie);
    // Reset form fields
    setTitle('');
    setDescription('');
    setReleaseYear('');
    setGenre('');
    setDirector('');
    setImageUrl('');
  };

  return (
    <div className="create-movie">
      <h2>Create Movie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <CustomInput label="Title:" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <CustomInput label="Description:" type="textarea" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Release Year:</label>
          <CustomInput label="Release Year:" type="number" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} required />
        </div>
        <div>
          <label>Genre:</label>
          <CustomInput label="Genre:" type="text" value={genre} onChange={(e) => setGenre(e.target.value)} required />
        </div>
        <div>
          <label>Director:</label>
          <CustomInput label="Director:" type="text" value={director} onChange={(e) => setDirector(e.target.value)} required />
        </div>
        <div>
          <label>Image URL:</label>
          <CustomInput label="Image URL:" type="url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
        </div>
        <Button label="Add Movie" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default CreateMovie;
