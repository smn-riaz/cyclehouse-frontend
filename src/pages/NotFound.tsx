import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img 
        src="https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x998-yjzeuy4v.png" 
        alt="404 Not Found" 
        className="  md:h-72 object-cover rounded-lg shadow-lg"
      />
      <h1 className="text-4xl font-bold text-gray-800 mt-6">Not Found Page</h1>
      
      <Link 
        to="/" 
        className="mt-4 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
