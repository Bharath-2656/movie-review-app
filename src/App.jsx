import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import Home from './screens/Home';
import CreateMovie from './screens/CreateMovie';
import Login from './screens/Auth/Login';
import Register from './screens/Auth/Register';

import { configureTheme, getTheme } from './theme/theme';

function App() {
  useEffect(() => {
    configureTheme();
  }, []);

  const theme = getTheme();

  return (
    <div
      className="app-container"
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: theme.primaryBackground,
        color: theme.text,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-movie" element={<CreateMovie />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
