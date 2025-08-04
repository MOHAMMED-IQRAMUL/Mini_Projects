import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center space-y-4">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Mini Projects</h1>
                <div className="w-72 bg-gray-50 rounded-md p-6 flex flex-col items-center shadow">
                    <p className="text-xl font-semibold text-gray-700 mb-2">Terminal-Bot</p>
                    <Link
                        to="/Terminal-Bot"
                        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                        Visit Project
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home