
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Intro from './pages/Intro';
import Menu from './pages/Menu';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import TerminalBot from './pages/TerminalBot';
import PostCreaterBot from './pages/PostCreaterBot';
import SocialIconUi from './pages/SocialIconUi';
import GitHubProfileViewer from './pages/GitHubProfileViewer';
import GoogleFontTester from "./pages/GoogleFontTester";

import './index.css';

export default function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Terminal-Bot" element={<TerminalBot />} />
        <Route path="/Post-Creater-Bot" element={<PostCreaterBot />} />
        <Route path="/Social-Icon-Ui" element={<SocialIconUi />} />
        <Route path="/GitHub-Profile-Viewer" element={<GitHubProfileViewer />} />
        <Route path="/Google-Font-Tester" element={<GoogleFontTester />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}
