import { redirect } from "react-router-dom";
import fetchAPI from "../../helppers/fetch";

// post new user
export async function register_action({request})
{
    const formdata = await request.formData();
    const obj = Object.fromEntries(formdata);

    let [success, data] = await fetchAPI('register', {
        method: 'post',
        body: JSON.stringify(obj)
    });
    if (success) return redirect('/login');
    return data;
}