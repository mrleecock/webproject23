import { redirect } from "react-router-dom";
import fetchAPI from "../../helppers/fetch";

// post post
export async function add_post_action({request})
{
    const formdata = await request.formData();
    const obj = Object.fromEntries(formdata);

    let [success, data] = await fetchAPI('post', {
        method: 'post',
        body: JSON.stringify(obj)
    })
    if (!success)
    {
        return data;
    }
    return redirect(`/post/${data._id}`);
}