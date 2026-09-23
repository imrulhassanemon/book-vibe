import { IBook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BookCardProps {
  book: IBook;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {/* Book Image */}
      <div className="flex h-[280px] items-center justify-center rounded-lg bg-gray-100 p-5">
        <Image
          src={book.image}
          alt={book.bookName}
          className="h-full w-auto object-contain"
          width={300}
          height={300}
        />
      </div>

      {/* Tags */}
      <div className="mt-4 flex gap-2">
        {book.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Book Name */}
      <h2 className="mt-3 text-xl font-bold text-gray-900">{book.bookName}</h2>

      {/* Author */}
      <p className="mt-1 text-sm text-gray-500">
        By <span className="font-medium text-gray-700">{book.author}</span>
      </p>

      {/* Details */}
      <div className="mt-4 space-y-2 border-t border-gray-100 pt-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Category</span>
          <span className="font-medium text-gray-700">{book.category}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Publisher</span>
          <span className="font-medium text-gray-700">{book.publisher}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Pages</span>
          <span className="font-medium text-gray-700">{book.totalPages}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Published</span>
          <span className="font-medium text-gray-700">
            {book.yearOfPublishing}
          </span>
        </div>
      </div>

      {/* Rating */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="text-yellow-500">★</span>

          <span className="font-semibold text-gray-800">{book.rating}</span>
        </div>

        <Link href={`/books/${book.bookId}`}>
          <button
            className="rounded-md border border-green-500 px-4 py-2
                     text-sm font-semibold text-green-600
                     transition hover:bg-green-500 hover:text-white"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
