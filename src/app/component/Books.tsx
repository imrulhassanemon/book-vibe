import React from "react";
import BookCard from "./BookCard";
import { IBook } from "@/types/books.type";

const getbooks = async () => {
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
  const data = await response.json();
  return data;
  }catch (err){
    console.log(err);
  }
};

const Books = async () => {
  const booksData = await getbooks();

  return (
    <div>
      <h1 className="text-4xl font-semibold text-center my-5">Explore Popular Books</h1>
      <div className="grid grid-cols-3 gap-6 max-w-7xl mx-auto">
        {booksData.slice(0, 6).map((book: IBook, index: number) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
