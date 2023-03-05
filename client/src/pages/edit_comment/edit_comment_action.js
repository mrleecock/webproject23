import { redirect } from "react-router-dom";
import fetchAPI from "../../helppers/fetch";

// update comment
export async function edit_comment_action({params, request})
{
    const formdata = await request.formData();
    const obj = Object.fromEntries(formdata);

    let [success, data] = await fetchAPI(`comment/${params.commentid}`, {
        method: 'put',
        body: JSON.stringify(obj)
    })
    if (!success)
    {
        return data;
    }
    return redirect(`/post/${data.post}`);
}