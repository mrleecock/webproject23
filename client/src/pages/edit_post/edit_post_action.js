import { redirect } from "react-router-dom";
import fetchAPI from "../../helppers/fetch";

// update post
export async function edit_post_action({request, params})
{
    const formdata = await request.formData();
    const obj = Object.fromEntries(formdata);

    let [success, data] = await fetchAPI(`post/${params.postid}`, {
        method: 'put',
        body: JSON.stringify(obj)
    })
    if (!success)
    {
        return data;
    }
    return redirect(`/post/${data._id}`);
}