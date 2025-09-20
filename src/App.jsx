import { Routes, Route } from 'react-router';
import { HomePage } from './pages/home/HomePage';
import { PhotoPage } from './pages/photo/PhotoPage';
import './App.css';

function App() {
  const PLAYER_AMOUNT = 11;

  return (
    <Routes>
      <Route index element={<HomePage playerAmount={PLAYER_AMOUNT} />} />
      <Route path="photo" element={<PhotoPage playerAmount={PLAYER_AMOUNT} />} />
    </Routes>
  );
}

export default App;
