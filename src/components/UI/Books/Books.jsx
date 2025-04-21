import Loader from "../Loader/Loader";
import NoResult from "../NoResult/NoResult";
import Book from "./Book";

const Books = ({ data, isLoading }) => {
    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div>
                    {data?.q && (
                        <h3 className="text-center mt-5 mb-8">
                            <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium tracking-wide shadow-sm border border-blue-100">
                                Found{" "}
                                <span className="font-bold text-blue-700 mx-1">
                                    {data?.docs?.length || 0}
                                </span>{" "}
                                Books
                            </span>
                        </h3>
                    )}
                    {data?.docs?.length > 0 ? (
                        <Book data={data.docs} />
                    ) : (
                        <NoResult data={data} />
                    )}
                </div>
            )}
        </>
    );
};

export default Books;
