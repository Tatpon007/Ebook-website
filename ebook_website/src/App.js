import './App.css';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import ComicNovels from './components/ComicNovels';
import Support from './components/Support';
import Sciences from './components/Sciences';
import Business from './components/Business';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/ComicNovels" element={<ComicNovels />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Sciences" element={<Sciences />} />
        <Route path="/Business" element={<Business />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
