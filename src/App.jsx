import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';

import TerminalBot from './pages/TerminalBot';
import PostCreaterBot from "./pages/PostCreaterBot"

import './index.css'

export default function App() {
  return (
    <main >
      <Navbar />
      <Routes  basename="/Mini_Projects" >
        <Route path="/" element={<Home />} />
        <Route path="/Terminal-Bot" element={<TerminalBot />} />
        <Route path="/Post-Creater-Bot" element={<PostCreaterBot />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}
