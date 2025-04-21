"use client"
import Books from "@/components/UI/Books/Books";
import SearchBox from "@/components/UI/SearchBox/SearchBox";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const handleBooks = async (data) => {
    setIsLoading(true)
    setTimeout(() => {
      setBooks(data);
      setIsLoading(false);
    }, 500)
  }

  return (
    <div>
      <SearchBox handleBooks={handleBooks} />
      <Books data={books} isLoading={isLoading} />

      <ToastContainer />
    </div>
  );
}
