import MovieCard from '../components/MovieCard';
import Button from '../components/Button'; // Import the Button component
import image from '../assets/images/image.png';


function Home() {
  const movies = [
    { title: 'Inception', description: `In Interstellar, a team of astronauts embarks on a perilous journey through a newly discovered wormhole in search of a new habitable planet for humanity. Led by Cooper, they leave Earth's dying environment behind and venture into the 
unknown. As they navigate treacherous gravitational forces, time dilation, and cosmic radiation, they encounter 
strange occurrences and mysterious events that challenge their understanding of space and time. With the fate of 
humanity hanging in the balance, Cooper must find a way to communicate with his daughter Murph across vast distances, 
all while unraveling the secrets of the universe's past and future.`, imageUrl: image, releaseYear: 2014, genre: 'Sci-Fi', director: 'Christopher Nolan', createdAt: '2021-09-01T00:00:00.000Z', updatedAt: '2021-09-01T00:00:00.000Z' },
    { title: 'Interstellar', description: 'A journey through space and time', imageUrl: image },
    { title: 'The Dark Knight', description: 'A gritty superhero tale', imageUrl: image },
  ];

  return (
    <>
      <div className="movie-list">
        {/* Add the create movie button here */}
        <Button label="Create Movie" onClick={() => console.log('Create movie button clicked')} />
        
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
