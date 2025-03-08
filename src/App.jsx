import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateMovie from './screens/CreateMovie';
import Home from './screens/Home';

function App() {

  return (
    <div style={{width: '100%', margin: '0 auto'}}>
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
