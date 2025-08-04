import { FaGithub } from 'react-icons/fa6'
import { TbHome } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div
            className="fixed top-2 right-2 p-2 flex items-center justify-center rounded-2xl bg-white shadow-lg border border-white/30 z-50 gap-5"
            style={{
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
            }}
        >
            <Link To='/' > <FaGithub size={40} /> </Link>
            <Link To='/' > <TbHome size={40} /> </Link>
        </div >
    )
}

export default Navbar