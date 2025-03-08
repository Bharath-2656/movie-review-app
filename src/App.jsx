import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateMovie from './screens/CreateMovie';
import Home from './screens/Home';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-movie" element={<CreateMovie />} />
      </Routes>
    </Router>
  );
}

export default App;
