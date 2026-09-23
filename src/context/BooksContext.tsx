'use client'
import React, { createContext, ReactNode, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { IBook } from "@/types/books.type";

interface BooksContextType {
    readBooks: IBook[];
    setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
    wishList: IBook[];
    setWishList: React.Dispatch<React.SetStateAction<IBook[]>>;
}

export const BooksContext = createContext<BooksContextType>({
    readBooks: [],
    setReadBooks: () => {},
    wishList: [],
    setWishList: () => {},
})

const BooksProvider = ({children}: {children: ReactNode}) => {

    const [readBooks, setReadBooks] = useState<IBook[]>([])
    const [wishList, setWishList] = useState<IBook[]>([])

    const sharedData: BooksContextType = {
        readBooks,
        setReadBooks,
        wishList,
        setWishList
    }


    return <BooksContext.Provider value={sharedData} >
        <ToastContainer />
        {children}
        </BooksContext.Provider>
};

export default BooksProvider;