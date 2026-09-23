"use client";

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import { useContext } from "react";
import { toast } from "react-toastify";

const WishListButton = ({ book }: { book: IBook }) => {
  const { wishList, setWishList } = useContext(BooksContext);

  const handleReadBooks = () => {
    console.log("Book button tiggered");
    setWishList([...wishList, book]);
    // setReadBooks((previousBook ) => [...previousBook, book])
    toast.success(`Added ${book.bookName} to the listed books.`);
  };

  return (
    <button
      onClick={() => handleReadBooks()}
      className="rounded-md bg-cyan-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-cyan-600"
    >
      WishList
    </button>
  );
};

export default WishListButton;
