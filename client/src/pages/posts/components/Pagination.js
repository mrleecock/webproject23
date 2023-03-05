import { useLoaderData } from "react-router-dom";
import { Pagination as BPagination } from "react-bootstrap";

// pagination component
/*
STRUCTURE
p = current page
n = total page count
[1][2/...][p-1][p][p+1][n-1/...][n]
*/
export default function Pagination({setPage})
{
    const [None, page_data] = useLoaderData();

    return (
        <BPagination>
            {page_data.page > 2 && <BPagination.Item onClick={() => setPage(1)}>1</BPagination.Item>} 
            
            {page_data.page == 4 && <BPagination.Item onClick={() => setPage(2)}>2</BPagination.Item>} 
            {page_data.page > 4 && <BPagination.Ellipsis disabled/>} 
            
            {page_data.page > 1 && <BPagination.Item onClick={() => setPage(page_data.page-1)}>{page_data.page-1}</BPagination.Item>} 
            {page_data.total > 1 && <BPagination.Item active="true">{page_data.page}</BPagination.Item>} 
            {page_data.total-page_data.page > 0 && <BPagination.Item onClick={() => setPage(page_data.page+1)}>{page_data.page+1}</BPagination.Item>} 
            
            {page_data.total-page_data.page == 3 && <BPagination.Item onClick={() => setPage(page_data.total-1)}>{page_data.total-1} </BPagination.Item>} 
            {page_data.total-page_data.page > 3 && <BPagination.Ellipsis disabled/>} 
            
            {page_data.total-page_data.page > 1 && <BPagination.Item onClick={() => setPage(page_data.total)}>{page_data.total}</BPagination.Item>} 
        </BPagination>
    );
}
 