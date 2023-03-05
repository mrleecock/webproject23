import { redirect } from "react-router-dom";
import fetchAPI from "../../helppers/fetch";

// post vote
export async function post_action({params, request})
{
    const formdata = await request.formData();
    const obj = Object.fromEntries(formdata);

    let [success, data] = await fetchAPI(`post/${params.postid}/vote`, {
        method: 'post',
        body: JSON.stringify(obj)
    })
    if (!success)
    {
        return data;
    }
    return redirect(`/post/${params.postid}`);
}