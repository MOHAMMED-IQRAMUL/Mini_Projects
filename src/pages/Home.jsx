import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="min-w-screen min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center">
            <div className="bg-white shadow-2xl rounded-2xl p-10 flex flex-col items-center space-y-8">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Mini Projects</h1>
                <div className="w-80 bg-gradient-to-r from-purple-100 to-blue-50 rounded-xl p-8 flex flex-col items-center shadow-lg">
                    <p className="text-2xl font-semibold text-gray-800 mb-4">Terminal-Bot</p>
                    <Link
                        to="/Terminal-Bot"
                        className="mt-2 px-6 py-3 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 transition-all duration-200 shadow"
                    >
                        Visit Project
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home