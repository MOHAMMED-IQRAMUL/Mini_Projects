import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const projects = [
        { name: 'Terminal Bot', path: '/Terminal-Bot', desc: 'AI-powered terminal assistant.' },
        { name: 'Post Creater Bot', path: '/Post-Creater-Bot', desc: 'Create Insta-style posts easily.' },
        { name: 'Social Icon UI', path: '/Social-Icon-Ui', desc: 'Animated social icon showcase.' },
        { name: 'GitHub Profile Viewer', path: '/GitHub-Profile-Viewer', desc: 'View GitHub user profiles.' },
    ];
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center py-10 px-2">
            <div className="bg-white/80 shadow-2xl rounded-2xl p-10 flex flex-col items-center w-full max-w-4xl">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">Mini Projects</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
                    {projects.map((proj) => (
                        <div key={proj.name} className="bg-gradient-to-r from-purple-100 to-blue-50 rounded-xl p-8 flex flex-col items-center shadow-lg hover:shadow-2xl transition-shadow">
                            <p className="text-2xl font-semibold text-gray-800 mb-2">{proj.name}</p>
                            <p className="text-gray-600 mb-4 text-center">{proj.desc}</p>
                            <Link
                                to={proj.path}
                                className="mt-2 px-6 py-3 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 transition-all duration-200 shadow"
                            >
                                Visit Project
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home