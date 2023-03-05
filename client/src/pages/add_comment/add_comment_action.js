import { redirect } from "react-router-dom";
import fetchAPI from "../../helppers/fetch";

// post comment
export async function add_comment_action({params, request})
{
    const formdata = await request.formData();
    const obj = Object.fromEntries(formdata);

    let [success, data] = await fetchAPI(`comment/post/${params.postid}`, {
        method: 'post',
        body: JSON.stringify(obj)
    })
    if (!success)
    {
        return data;
    }
    return redirect(`/post/${params.postid}`);
}