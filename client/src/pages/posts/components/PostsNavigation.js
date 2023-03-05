import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";

export default function PostsNavigation()
{
    const [filter, setFilter] = useState('');
    const [page, setPage] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        try {
            // bubblegum
            new RegExp(filter);
            if (filter.includes("[]")) throw new Error('Invalid regex')
            navigate(`/posts?filter=${filter}`);
        } catch (err)
        {

        }
    }, [filter])
    
    useEffect(() => {
        navigate(`/posts?filter=${filter}&page=${page}`);
    }, [page])

    

    return (
        <>
            <SearchBar filter={filter} setFilter={setFilter} />
            <Pagination setPage={setPage}/>
        </>
    );
}