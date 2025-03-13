import MovieCard from "../components/MovieCard";
import Button from "../components/Button"; // Import the Button component
import image from "../assets/images/image.png";
import { useNavigate } from "react-router-dom";
import { getMovies } from "../service/api.service";
import { useEffect , useState} from "react";

function Home() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  
  async function fetchData() {
    const movies = await getMovies();
    console.log(movies);
    setMovies(() => movies);
  }
  return (
    <>
      <div className="movie-list">
        <Button
          label="Create Movie"
          style={{ display: "flex", marginLeft: "auto" }}
          onClick={() => {
            navigate("/create-movie");
          }}
        />
        <div>Browse Movies</div>
        {movies && movies.map((movie, index) => (
          <>
         <MovieCard key={index} {...movie} />
         </>
        ))}
      </div>
    </>
  );
}

export default Home;
