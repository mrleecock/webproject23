import fetchAPI from "../../helppers/fetch";

// fetch post and all comments
export async function post_loader({params})
{
    let [success, data] = await fetchAPI(`post/${params.postid}`);
    if (!success)
    {
        return null;
    }
    let [success2, data2] = await fetchAPI(`comment/post/${params.postid}`)
    if (!success2)
    {
        return null;
    }

    return [data, data2];
}