import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Intro() {
  const navigate = useNavigate();
  return (
    <motion.div
      className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 opacity-30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 opacity-30 rounded-full blur-3xl animate-pulse delay-500" />
      </div>
      <motion.h1
        className="text-6xl font-extrabold text-white drop-shadow-lg z-10"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Mini Projects
      </motion.h1>
      <motion.button
        className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xl font-bold rounded-full shadow-lg hover:scale-105 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 z-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/menu')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        Get Started
      </motion.button>
    </motion.div>
  );
}
