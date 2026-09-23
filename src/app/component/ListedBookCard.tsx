"use client";

import { BookOpen, Calendar, FileText, Star, Trash2 } from "lucide-react";
import { IBook } from "@/types/books.type";
import Link from "next/link";


interface ReadBookCardProps {
  book: IBook;
  onRemove?: (bookId: number) => void;
}

const ReadBookCard = ({ book, onRemove }: ReadBookCardProps) => {
  console.log(book);

  return (
    <div className="group w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-indigo-200 hover:shadow-xl">
      <div className="flex flex-col gap-6 p-5 sm:flex-row sm:p-6">
        {/* ================= BOOK COVER ================= */}
        <div className="relative mx-auto h-72 w-48 shrink-0 overflow-hidden rounded-2xl bg-slate-100 shadow-lg sm:mx-0 sm:h-64 sm:w-44">
          <img
            src={book.image}
            alt={book.bookName}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Category */}
          <div className="absolute left-3 top-3">
            <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-800 shadow backdrop-blur">
              {book.category}
            </span>
          </div>
        </div>

        {/* ================= BOOK CONTENT ================= */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                {book.bookName}
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Written by{" "}
                <span className="font-semibold text-slate-700">
                  {book.author}
                </span>
              </p>
            </div>

            {/* Remove Button */}
            <button
              onClick={() => onRemove?.(book.bookId)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-slate-400 transition-all hover:bg-red-50 hover:text-red-500"
              title="Remove from read books"
            >
              <Trash2 size={18} />
            </button>
          </div>

          {/* Rating */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5">
              <Star size={16} className="fill-amber-400 text-amber-400" />

              <span className="text-sm font-bold text-amber-700">
                {book.rating}
              </span>
            </div>

            <span className="h-1 w-1 rounded-full bg-slate-300" />

            <div className="flex items-center gap-1.5 text-sm text-slate-500">
              <FileText size={15} />
              {book.totalPages} pages
            </div>

            <span className="h-1 w-1 rounded-full bg-slate-300" />

            <div className="flex items-center gap-1.5 text-sm text-slate-500">
              <Calendar size={15} />
              {book.yearOfPublishing}
            </div>
          </div>

          {/* Review */}
          <div className="mt-5">
            <p className="line-clamp-3 text-sm leading-6 text-slate-500">
              {book.review}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {book.tags?.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Bottom */}
          <div className="mt-6 flex flex-col gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
            {/* Read Status */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50">
                <BookOpen size={18} className="text-emerald-600" />
              </div>

              <div>
                <p className="text-xs text-slate-400">Reading Status</p>

                <p className="text-sm font-bold text-emerald-600">
                  Finished Reading
                </p>
              </div>
            </div>

            {/* Details Button */}
            <Link href={`/books/${book.bookId}`} >
              <button className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-600 hover:shadow-lg">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBookCard;
