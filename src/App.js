import React from 'react'
import Header from './components/Header'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import {    AppContext } from './context/AppContext'
import { useContext } from 'react'
import { useEffect } from "react"

const App = () => {
  const {fetchBlogPosts} = useContext(AppContext);
  
    useEffect(() => {
      fetchBlogPosts();
    }, [])
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-x-1">
    <Header />
    <Blogs />
    <Pagination />
  </div>
  )
}

export default App
