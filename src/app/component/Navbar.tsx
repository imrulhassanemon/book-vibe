import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <div>
          <h1 className="text-xl font-bold text-gray-900">
            Book Vibe
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-5">
          <Link
            href="/"
            className="rounded-md border border-green-500 px-3 py-2 text-sm font-semibold text-green-600"
          >
            Home
          </Link>
          <Link
            href="/books"
            className="rounded-md border border-green-500 px-3 py-2 text-sm font-semibold text-green-600"
          >
            All Books
          </Link>
          <Link
            href="/listedbooks"
            className="rounded-md border border-green-500 px-3 py-2 text-sm font-semibold text-green-600"
          >
            ListedBooks
          </Link>

          

          <a
            href="#"
            className="text-sm text-gray-500 hover:text-gray-800"
          >
            Pages to Read
          </a>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <button
            className="rounded-md bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
          >
            Sign In
          </button>

          <button
            className="rounded-md bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-600"
          >
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;