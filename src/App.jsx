import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateMovie from './screens/CreateMovie';
import Home from './screens/Home';
import { configureTheme, getTheme } from './theme/theme';
import { useEffect } from 'react';

function App() {
  const theme = getTheme();
  useEffect(() => {
    configureTheme();
  }, []);

  return (
    <div style={{width: '100%', height: '100%', backgroundColor: theme.primaryBackground }}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-movie" element={<CreateMovie />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
