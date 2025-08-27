import { FaGithub } from 'react-icons/fa6'
import { TbHome } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="fixed top-4 right-4 p-3 flex items-center justify-center rounded-2xl bg-white/80 shadow-xl border border-white/30 z-50 gap-6 backdrop-blur-md">
            <Link to='/' className="hover:scale-110 transition-transform" title="Home">
                <TbHome size={32} />
            </Link>
            <a href='https://github.com/MOHAMMED-IQRAMUL/Mini_Projects' target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" title="GitHub">
                <FaGithub size={32} />
            </a>
        </nav>
    )
}

export default Navbar