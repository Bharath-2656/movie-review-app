import MovieCard from '../components/MovieCard';
import Button from '../components/Button'; // Import the Button component
import image from '../assets/images/image.png';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();
  const movies = [
    { title: 'Inception', description: `In Interstellar, a team of astronauts embarks on a perilous journey through a newly discovered wormhole in search of a new habitable planet for humanity. Led by Cooper, they leave Earth's dying environment behind and venture into the 
unknown. As they navigate treacherous gravitational forces, time dilation, and cosmic radiation, they encounter 
strange occurrences and mysterious events that challenge their understanding of space and time. With the fate of 
humanity hanging in the balance.`, imageUrl: image, releaseYear: 2014, genre: 'Sci-Fi', director: 'Christopher Nolan', createdAt: '2021-09-01T00:00:00.000Z', updatedAt: '2021-09-01T00:00:00.000Z' },
    { title: 'Interstellar', description: 'A journey through space and time', imageUrl: image },
    { title: 'The Dark Knight', description: 'A gritty superhero tale', imageUrl: image },
  ];

  return (
    <>
      <div className="movie-list">
        <Button label="Create Movie" style={{display: 'flex', marginLeft: 'auto'}}  onClick={() => {navigate('/create-movie')}}/>
          <div>Browse Movies</div>
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            {...movie}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
