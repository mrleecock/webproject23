import fetchAPI from "../../helppers/fetch";

// fetch post
export async function edit_post_loader({params})
{
    let [success, data] = await fetchAPI(`post/${params.postid}`);
    if (!success) return null;
    return data;
}