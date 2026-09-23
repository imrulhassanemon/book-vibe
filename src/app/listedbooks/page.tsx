"use client";
import { BooksContext } from "@/context/BooksContext";
import { useContext } from "react";
import ListedBookCard from "../component/ListedBookCard";
import { BookOpen, Search } from "lucide-react";
import Link from "next/link";
import { IBook } from "@/types/books.type";

const ListedBooks = () => {
  const { readBooks, wishList } = useContext(BooksContext);

  return (
    <>
      {/* name of each tab group should be unique */}
      {/* name of each tab group should be unique */}
      <h2 className="mx-auto container max-w-7xl rounded-2xl my-14 justify-center items-center flex text-5xl border py-20 bg-slate-50 font-bold">
        This is Listed Books
      </h2>
      <div className="tabs tabs-lift max-w-7xl mx-auto" data-theme="light">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
        />
        <div className="tab-content py-6 border-base-300 p-6 lg:w-7xl ">
          <h3 className="mx-auto flex justify-center text-3xl font-bold pb-5">
            This is ReadBooks
          </h3>
          {readBooks.length> 0 ? readBooks.map((book: IBook, index: number) => (
            <ListedBookCard key={index} book={book}></ListedBookCard>
          )): <div className="flex min-h-125 items-center justify-center rounded-3xl border border-dashed border-slate-200 bg-gradient-to-br from-white via-slate-50 to-indigo-50/40 px-6 py-16">
              <div className="flex max-w-md flex-col items-center text-center">
                {/* Icon */}
                <div className="relative mb-7">
                  {/* Glow */}
                  <div className="absolute inset-0 scale-150 rounded-full bg-indigo-100 blur-2xl" />

                  {/* Icon Container */}
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-xl ring-1 ring-slate-100">
                    <BookOpen
                      size={42}
                      strokeWidth={1.6}
                      className="text-indigo-600"
                    />
                  </div>

                  {/* Small Badge */}
                  <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg">
                    <span className="text-lg">+</span>
                  </div>
                </div>

                {/* Heading */}
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  No books yet
                </h2>

                {/* Description */}
                <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500 sm:text-base">
                  Your reading list is empty. Discover a great book and start
                  building your personal library.
                </p>

                {/* Button */}
                <Link href={'/books'}>
                  <button className="mt-7 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-600 hover:shadow-indigo-200">
                    <Search size={17} />
                    Discover Books
                  </button>
                </Link>

                {/* Small hint */}
                <p className="mt-5 text-xs text-slate-400">
                  Find something you’ll love to read ✨
                </p>
              </div>
            </div>}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Wish List (${wishList.length})`}
          defaultChecked
        />
        <div className="tab-content py-6 border-base-300 p-6 lg:w-7xl">
          <h3 className="mx-auto flex justify-center text-3xl  font-bold pb-5">
            This is WishList
          </h3>
          {wishList.length > 0 ? (
            wishList.map((book: IBook, index: number) => (
              <ListedBookCard key={index} book={book}></ListedBookCard>
            ))
          ) : (
            <div className="flex min-h-125 items-center justify-center rounded-3xl border border-dashed border-slate-200 bg-gradient-to-br from-white via-slate-50 to-indigo-50/40 px-6 py-16">
              <div className="flex max-w-md flex-col items-center text-center">
                {/* Icon */}
                <div className="relative mb-7">
                  {/* Glow */}
                  <div className="absolute inset-0 scale-150 rounded-full bg-indigo-100 blur-2xl" />

                  {/* Icon Container */}
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-xl ring-1 ring-slate-100">
                    <BookOpen
                      size={42}
                      strokeWidth={1.6}
                      className="text-indigo-600"
                    />
                  </div>

                  {/* Small Badge */}
                  <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg">
                    <span className="text-lg">+</span>
                  </div>
                </div>

                {/* Heading */}
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  No books yet
                </h2>

                {/* Description */}
                <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500 sm:text-base">
                  Your reading list is empty. Discover a great book and start
                  building your personal library.
                </p>

                {/* Button */}
                <Link href={'/books'}>
                  <button className="mt-7 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-600 hover:shadow-indigo-200">
                    <Search size={17} />
                    Discover Books
                  </button>
                </Link>

                {/* Small hint */}
                <p className="mt-5 text-xs text-slate-400">
                  Find something you’ll love to read ✨
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ListedBooks;
