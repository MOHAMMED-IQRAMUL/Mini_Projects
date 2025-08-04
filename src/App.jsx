import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import TerminalBot from './pages/TerminalBot';
import Navbar from './components/Navbar';

import './index.css'

export default function App() {
  return (
    <main >
      <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/Terminal-Bot" element={<TerminalBot />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}
