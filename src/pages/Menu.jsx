import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  { name: 'Terminal Bot', path: '/Terminal-Bot', desc: 'AI-powered terminal assistant.' },
  { name: 'Post Creater Bot', path: '/Post-Creater-Bot', desc: 'Create Insta-style posts easily.' },
  { name: 'Social Icon UI', path: '/Social-Icon-Ui', desc: 'Animated social icon showcase.' },
  { name: 'GitHub Profile Viewer', path: '/GitHub-Profile-Viewer', desc: 'View GitHub user profiles.' },
];

export default function Menu() {
  return (
    <motion.div
      className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 opacity-30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 opacity-30 rounded-full blur-3xl animate-pulse delay-500" />
      </div>
      <motion.h2
        className="text-4xl font-bold text-white mb-10 z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Explore Projects
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-3xl z-10">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.name}
            className="bg-white/20 rounded-2xl p-8 flex flex-col items-center shadow-xl hover:shadow-2xl transition-shadow border border-white/30 backdrop-blur-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + idx * 0.2, duration: 0.7 }}
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-2xl font-semibold text-white mb-2 drop-shadow">{proj.name}</p>
            <p className="text-white/80 mb-4 text-center">{proj.desc}</p>
            <Link
              to={proj.path}
              className="mt-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow"
            >
              Visit Project
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
