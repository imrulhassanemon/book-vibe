'use client'

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({book}:{book:IBook}) => {

    const {readBooks, setReadBooks} =  useContext(BooksContext)

    const handleReadBooks =  () => {
        console.log("Book button tiggered");
        setReadBooks([...readBooks, book])
        // setReadBooks((previousBook ) => [...previousBook, book])
        toast.success(`Added ${book.bookName} to the listed books.`)
    }


  return (
    <button onClick={() => handleReadBooks()} className="rounded-md border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100">
      Read
    </button>
  );
};

export default ReadButton;