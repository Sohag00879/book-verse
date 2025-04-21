import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-white px-4 text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
            <p className="text-lg text-gray-600 mb-6">Oops! The page you are looking for does not exist.</p>
            <Link
                href="/"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
                Go back home
            </Link>
        </div>
    );
};

export default NotFound;