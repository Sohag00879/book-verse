const Book = ({ data }) => {
    return (
        <div className="mx-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10">
            {data.map((book) => (
                <div
                    className="card bg-white border border-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    key={book.author_key || Math.random()}
                >
                    <figure className="relative h-64 bg-gradient-to-br from-indigo-50 to-blue-100">
                        {book.cover_i ? (
                            <img
                                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                                alt={book.title || "Book cover"}
                                className="w-full h-full object-contain p-4"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "fallback-image-url";
                                }}
                            />
                        ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                                <span className="text-4xl mb-2">📖</span>
                                <p className="text-gray-500 font-medium">No cover available</p>
                            </div>
                        )}
                    </figure>

                    {/* Book Details */}
                    <div className="card-body p-5">
                        <h2 className="card-title text-lg font-bold text-gray-800 line-clamp-2 mb-2">
                            {book.title || "Untitled"}
                        </h2>

                        <div className="text-sm text-gray-600 mb-3">
                            {book.author_name?.length > 0 ? (
                                book.author_name.map((author, i) => (
                                    <p key={i} className="hover:text-blue-600 transition-colors">
                                        by {author}
                                    </p>
                                ))
                            ) : (
                                <p className="text-gray-400">Author unknown</p>
                            )}
                        </div>

                        <div className="flex justify-between items-center mt-auto">
                            <span className="badge badge-outline border-blue-200 text-blue-600">
                                {book.first_publish_year || "Unknown year"}
                            </span>

                            <button className="btn btn-primary btn-sm bg-blue-600 border-blue-600 hover:bg-blue-700 hover:border-blue-700 text-white">
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Book;
