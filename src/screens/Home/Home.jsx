import React, { useEffect, useState } from 'react'
import MovieCard from '../../components/MovieCard/MovieCard'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import { getMovies } from '../../service/api.service'
import './Home.css'

const Home = () => {
  const navigate = useNavigate()
  const [movies, setMovies] = useState([])
  const userData = JSON.parse(localStorage.getItem('user')) || null
  const role = userData?.role

  useEffect(() => {
    fetchMovies()
  }, [])

  const fetchMovies = async () => {
    try {
      const data = await getMovies()
      setMovies(data)
    } catch (error) {
      console.error('Failed to fetch movies:', error)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate('/login')
  }

  const handleLogin = () => {
    navigate('/login')
  }

  return (
    <div className="home-container">
      <div className="home-header">
        <h2 className="home-title">Browse Movies</h2>

        <div className="home-buttons">
          {role === 'admin' && (
            <Button
              label="Create Movie"
              className="create-movie-btn"
              onClick={() => navigate('/create-movie')}
            />
          )}

          {role ? (
            <Button
              label="Logout"
              className="logout-btn"
              onClick={handleLogout}
            />
          ) : (
            <Button label="Login" className="login-btn" onClick={handleLogin} />
          )}
        </div>
      </div>

      <div>
        {movies?.length > 0 ? (
          movies.map((movie, index) => (
            <div key={index}>
              <MovieCard
                {...movie}
                type="home"
                refreshMovies={fetchMovies}
                hasUserReviewed={true}
              />
            </div>
          ))
        ) : (
          <div className="no-movies">No movies available.</div>
        )}
      </div>
    </div>
  )
}

export default Home
