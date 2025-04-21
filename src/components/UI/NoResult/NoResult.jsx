const NoResult = ({ data }) => {
    return (
        <div>
            {
                data?.q && (
                    <div className="text-center py-12">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                            No Books Found
                        </h1>
                        <p className="text-gray-600 mb-6">
                            We couldn't find any books matching your search. Try different keywords.
                        </p>
                    </div>
                )
            }
        </div>
    )
}

export default NoResult;