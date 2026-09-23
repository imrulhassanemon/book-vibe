'use client'
import React, { createContext, ReactNode, useState } from 'react';
import { ToastContainer } from 'react-toastify';
export const BooksContext = createContext({})

const BooksProvider = ({children}: {children: ReactNode}) => {

    const [readBooks, setReadBooks] = useState([])
    const [wishList, setWishList] = useState([])

    const sharedData = {
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