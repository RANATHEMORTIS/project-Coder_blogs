import { createContext } from "react";
import {baseUrl} from "../baseUrl";
import { useState } from "react";

//1st step create context
 export const AppContext = createContext();

 //2nd step create provider
 export default function AppContextProvider({children}) {
    const [loading , setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    //data filling pending
    async function fetchBlogPosts (page = 1) {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
            
        }
         catch(err) {
            console.log(err);
            setLoading(false);
            setPage(1);
            setPosts([]);
            setTotalPages(null);
         }
         setLoading(false);
    }

    function handlerPageChange(page) {
        setPage(page);
        fetchBlogPosts(page);
    }

    //3ed step consuming
    const value = {
        loading,
        posts,
        page,
        totalPages,
        setPosts,
        setPage,
        setTotalPages,
        setLoading,
        fetchBlogPosts,
        handlerPageChange
    };
      return <AppContext.Provider value = {value}>{children}</AppContext.Provider>
}