import fetchAPI from "../../helppers/fetch";

// fetch posts
export async function posts_loader({request})
{
    const url = new URL(request.url);
    // query contains regex for filtering posts and page number
    const query = url.searchParams.toString();

    // fetch max 10 posts
    let [success, data] = await fetchAPI(`post?${query}`);
    if (!success)
    {
        return [];
    }
    
    let data2;
    // fetch total post count
    [success, data2] = await fetchAPI(`post/count?${query}`);

    let page_data = {
        page: url.searchParams.get('page') ?? 1,
        total: Math.ceil(data2/10)
    };
    page_data.page = Number(page_data.page);
    
    return [data, page_data];
}