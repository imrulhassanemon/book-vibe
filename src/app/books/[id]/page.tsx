import ReadButton from '@/app/button/ReadButton';
import WishListButton from '@/app/button/WishlistButton';
import { IBook } from '@/types/books.type';
import Image from 'next/image';
import React from 'react';

interface BookId {
    params:Promise<{
        id: string;
    }>;
}

const getbooks = async () => {
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
  const data: IBook[] = await response.json();
  return data;
  }catch(err){
    console.log(err);
  }
};


const BookDetails = async ({params}:BookId) => {

    const {id} = await params;

    const BookData = await getbooks()

    const book = BookData?.find((book: IBook) => book.bookId === parseInt(id))

    if (!book) {
        return <div className="py-10 text-center">Book not found</div>;
    }



    return (
        <div>
            <section className="min-h-screen bg-white py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-5 md:grid-cols-2 md:gap-12">

        {/* Book Image */}
        <div className="flex min-h-[500px] items-center justify-center rounded-xl bg-[#f5f5f5] p-8">
          <Image
            src={book.image}
            alt={book.bookName}
            className="max-h-[460px] w-auto max-w-full object-contain drop-shadow-xl"
            width={300}
            height={300}
          />
        </div>

        {/* Book Details */}
        <div className="flex flex-col justify-center">

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            {book.bookName}
          </h1>

          {/* Author */}
          <p className="mt-2 text-sm text-gray-600">
            By : <span className="font-medium">{book.author}</span>
          </p>

          <div className="my-4 border-b border-gray-200" />

          {/* Category */}
          <p className="text-sm font-medium text-gray-600">
            {book.category}
          </p>

          <div className="my-4 border-b border-gray-200" />

          {/* Review */}
          <div>
            <p className="mb-1 text-sm font-semibold text-gray-800">
              Review:
            </p>

            <p className="text-sm leading-6 text-gray-500">
              {book.review}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-5 flex items-center gap-3">
            <span className="text-sm font-semibold text-gray-800">
              Tag
            </span>

            <div className="flex flex-wrap gap-2">
              {book.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="my-5 border-b border-gray-200" />

          {/* Book Information */}
          <div className="space-y-3 text-sm">
            <div className="flex">
              <span className="w-40 text-gray-500">
                Number of Pages:
              </span>
              <span className="font-medium text-gray-700">
                {book.totalPages}
              </span>
            </div>

            <div className="flex">
              <span className="w-40 text-gray-500">
                Publisher:
              </span>
              <span className="font-medium text-gray-700">
                {book.publisher}
              </span>
            </div>

            <div className="flex">
              <span className="w-40 text-gray-500">
                Year of Publishing:
              </span>
              <span className="font-medium text-gray-700">
                {book.yearOfPublishing}
              </span>
            </div>

            <div className="flex">
              <span className="w-40 text-gray-500">
                Rating:
              </span>
              <span className="font-medium text-gray-700">
                {book.rating}
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-7 flex gap-3">
            <ReadButton book={book} />

            <WishListButton book={book}/> 
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default BookDetails;