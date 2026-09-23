import React from 'react';

import { IBook } from '@/types/books.type';
import BookCard from '../component/BookCard';


const getbooks = async()=> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
    const data = await response.json()
    return data
}


const Books = async() => {


    const booksData = await getbooks()


    return (
        <div>
            <h1 className='text-4xl font-semibold text-center my-5'>Explore All Books</h1>
            <div className='grid grid-cols-3 gap-6 max-w-7xl mx-auto'>
            {
                booksData.map((book: IBook, index:number) => <BookCard key={index} book={book}/>)
            }
        </div>
        </div>
    );
};

export default Books;