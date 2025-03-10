import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateMovie from './screens/CreateMovie';
import Home from './screens/Home';
import { getTheme } from './theme/theme';

function App() {
  const theme = getTheme()

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
