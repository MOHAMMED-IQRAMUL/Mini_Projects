import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

const fontOptions = [
  { label: 'Monospace', value: 'Monospace' },
  { label: 'Roboto', value: 'Roboto' },
  { label: 'Open Sans', value: 'Open Sans' },
  { label: 'Lora', value: 'Lora' },
  { label: 'Poppins', value: 'Poppins' },
  { label: 'Playfair Display', value: 'Playfair Display' },
  { label: 'Fira Code', value: 'Fira Code' },
  { label: 'Montserrat', value: 'Montserrat' },
  { label: 'Raleway', value: 'Raleway' },
  { label: 'Merriweather', value: 'Merriweather' },
  { label: 'Nunito', value: 'Nunito' },
  { label: 'Ubuntu', value: 'Ubuntu' },
  { label: 'Inter', value: 'Inter' },
  { label: 'Quicksand', value: 'Quicksand' },
  { label: 'Cabin', value: 'Cabin' },
  { label: 'Source Sans Pro', value: 'Source Sans Pro' },
  { label: 'Oswald', value: 'Oswald' },
  { label: 'Work Sans', value: 'Work Sans' },
  { label: 'Karla', value: 'Karla' },
  { label: 'Dancing Script', value: 'Dancing Script' },
  { label: 'Amatic SC', value: 'Amatic SC' },
  { label: 'PT Sans', value: 'PT Sans' },
  { label: 'Bebas Neue', value: 'Bebas Neue' },
  { label: 'Inconsolata', value: 'Inconsolata' },
  { label: 'Cinzel', value: 'Cinzel' },
  // 👉 TEMPLATE: Add more like this
  // { label: 'Your Font Name', value: 'Your Font Name' },
];

const GoogleFontTester = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [selectedFont, setSelectedFont] = useState('Roboto');

  const handleKeyDown = (e) => {
    if (e.key === 'Backspace') {
      setInput((prev) => prev.slice(0, -1));
    } else if (e.key.length === 1) {
      setInput((prev) => prev + e.key);
    } else if (e.key === 'Enter') {
      const userPrompt = input.trim();
      if (userPrompt) {
        setMessages((prev) => [...prev, { role: 'user', content: userPrompt }]);
        setInput('');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [input]);

  // ✅ Dynamically load the selected Google Font
  useEffect(() => {
    const linkId = 'dynamic-google-font';
    let link = document.getElementById(linkId);

    const fontUrl = `https://fonts.googleapis.com/css2?family=${selectedFont.replace(
      / /g,
      '+'
    )}:wght@400;600&display=swap`;

    if (link) {
      link.href = fontUrl;
    } else {
      link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href = fontUrl;
      document.head.appendChild(link);
    }
  }, [selectedFont]);

  return (
    <div className="relative w-screen h-screen bg-gradient-to-br from-purple-900 via-black to-indigo-900 overflow-hidden">
      {/* Animated floating elements */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-30"
          animate={{
            x: [0, Math.random() * 800 - 400],
            y: [0, Math.random() * 800 - 400],
            rotate: 360,
          }}
          transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Glassmorphic Notepad */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-5/6 h-5/6 backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl shadow-lg p-4 flex flex-col">
        {/* Title Bar */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <div className="w-4 h-4 rounded-full bg-red-500"></div>
            <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
          </div>
          <div className="text-white font-semibold">Notepad</div>
          {/* Font Dropdown */}
          <select
            value={selectedFont}
            onChange={(e) => setSelectedFont(e.target.value)}
            className="bg-black/70 text-white border border-white/30 rounded px-2 py-1"
          >
            {fontOptions.map((font) => (
              <option
                key={font.value}
                value={font.value}
                style={{ fontFamily: font.value, color: 'black' }} // options must have black text for readability
              >
                {font.label}
              </option>
            ))}
          </select>
        </div>

        {/* Content */}
        <div
          className="flex-1 overflow-y-auto text-white"
          style={{ fontFamily: selectedFont, fontSize: '1rem' }}
        >
          {messages.map((msg, index) => (
            <div key={index} className="flex gap-2 mt-2">
              <span className="text-pink-400">{msg.role === 'user' ? 'You:' : 'AI:'}</span>
              <ReactMarkdown>{msg.content}</ReactMarkdown>
            </div>
          ))}
          <div className="flex gap-2 mt-2">
            <span className="text-pink-400">You:</span>
            <span>{input}</span>
            <motion.span
              className="text-white"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            >
              |
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleFontTester;
