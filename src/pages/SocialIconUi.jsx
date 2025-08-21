import { 
  FaInstagram, 
  FaLinkedin, 
  FaGithub, 
  FaTwitter, 
  FaFacebook, 
  FaYoutube 
} from "react-icons/fa";

const SocialIconUi = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <div className="w-[650px] h-[650px] flex flex-col justify-center items-center rounded-[40px] bg-white/10 backdrop-blur-2xl shadow-2xl border border-white/20 p-6">

        {/* Top Circle */}
        <div className="w-[160px] h-[160px] flex justify-center items-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl mb-10 animate-pulse">
          <span className="text-white font-bold text-2xl">LOGO</span>
        </div>

        {/* Middle Grid */}
        <div className="group w-[260px] h-[260px] bg-white/10 rounded-3xl flex justify-center items-center cursor-pointer relative overflow-hidden shadow-2xl">
          <div className="hidden group-hover:grid grid-cols-3 grid-rows-3 gap-5 items-center justify-center w-[220px] h-[220px] animate-fadeIn">
            
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noreferrer"
              className="w-[70px] h-[70px] flex justify-center items-center rounded-2xl bg-gradient-to-tr from-pink-500 to-yellow-400 text-white text-4xl 
                         transition-all duration-500 ease-in-out transform hover:scale-125 hover:rotate-12 hover:shadow-[0_0_25px_rgba(255,0,150,0.6)]">
              <FaInstagram />
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"
              className="w-[70px] h-[70px] flex justify-center items-center rounded-2xl bg-blue-600 text-white text-4xl 
                         transition-all duration-500 ease-in-out transform hover:scale-125 hover:-rotate-12 hover:shadow-[0_0_25px_rgba(0,119,181,0.6)]">
              <FaLinkedin />
            </a>

            {/* GitHub */}
            <a href="https://github.com" target="_blank" rel="noreferrer"
              className="w-[70px] h-[70px] flex justify-center items-center rounded-2xl bg-gray-800 text-white text-4xl 
                         transition-all duration-500 ease-in-out transform hover:scale-125 hover:rotate-6 hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]">
              <FaGithub />
            </a>

            {/* Twitter */}
            <a href="https://twitter.com" target="_blank" rel="noreferrer"
              className="w-[70px] h-[70px] flex justify-center items-center rounded-2xl bg-sky-500 text-white text-4xl 
                         transition-all duration-500 ease-in-out transform hover:scale-125 hover:-rotate-6 hover:shadow-[0_0_25px_rgba(29,155,240,0.6)]">
              <FaTwitter />
            </a>

            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noreferrer"
              className="w-[70px] h-[70px] flex justify-center items-center rounded-2xl bg-blue-700 text-white text-4xl 
                         transition-all duration-500 ease-in-out transform hover:scale-125 hover:rotate-12 hover:shadow-[0_0_25px_rgba(24,119,242,0.6)]">
              <FaFacebook />
            </a>

            {/* YouTube */}
            <a href="https://youtube.com" target="_blank" rel="noreferrer"
              className="w-[70px] h-[70px] flex justify-center items-center rounded-2xl bg-red-600 text-white text-4xl 
                         transition-all duration-500 ease-in-out transform hover:scale-125 hover:-rotate-12 hover:shadow-[0_0_25px_rgba(255,0,0,0.6)]">
              <FaYoutube />
            </a>
          </div>

          {/* Default Center Text */}
          <span className="absolute text-white/70 group-hover:opacity-0 transition duration-500 text-xl">
            Hover Me 🚀
          </span>
        </div>

        {/* Bottom Circle */}
        <div className="w-[160px] h-[160px] mt-10 flex justify-center items-center rounded-full bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 shadow-2xl animate-pulse">
          <span className="text-white font-bold text-2xl">Cool</span>
        </div>
      </div>
    </div>
  );
};

export default SocialIconUi;
