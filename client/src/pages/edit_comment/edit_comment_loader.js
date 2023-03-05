import fetchAPI from "../../helppers/fetch";

// fetch comment
export async function edit_comment_loader({params})
{
    let [success, data] = await fetchAPI(`comment/${params.commentid}`);
    if (!success) return null;
    return data;
}