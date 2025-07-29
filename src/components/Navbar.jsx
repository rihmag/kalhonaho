import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white mb-6">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">Yr-learning</Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/courses" className="text-gray-700 hover:text-blue-600">Courses</Link>
          <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link to="/login" className="text-gray-700 hover:text-blue-600  ">Login</Link>
          <Link to="/signup" className="text-gray-700 hover:text-blue-600">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
} 