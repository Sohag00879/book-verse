"use client"
import { searchBooks } from "@/action/fetchBook";
import { useState } from "react";
import { toast } from "react-toastify";

const SearchBox = ({ handleBooks }) => {
    const [query, setQuery] = useState("")
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {

            if (!query) {
                throw new Error("Please type keyword")
            }

            const result = await searchBooks(query);
            handleBooks(result)


            if (result?.docs?.length > 0) {
                toast.success('Books Loaded Successfully')
            }


            if (!result.ok && !result.docs) {
                throw new Error(`Request failed with status ${result.status || 404}`);
            }

            if (result.docs < 1) {
                throw new Error(`${result.q} is not found`)
            }

        } catch (err) {
            toast.error(err.message)
        }
    }

    const handleSearch = (e) => {
        setQuery(e.target.value);
        if (e.target.value === '') {
            handleBooks([])
        }
    }

    return (
        <div className="flex flex-col items-center justify-center mt-6">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <input
                    type="text"
                    value={query}
                    placeholder="Search books..."
                    className="input input-bordered w-64 md:w-96 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    onChange={handleSearch}
                />
                <button
                    type="submit"
                    className="btn btn-primary bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white px-6 py-2 rounded-lg transition-colors shadow-md ms-5"
                >
                    Submit
                </button>
            </form>
        </div >
    )
}

export default SearchBox