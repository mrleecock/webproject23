import { redirect } from "react-router-dom";
import fetchAPI from "../../helppers/fetch";

// post credentials
export async function login_action({request})
{
    const formdata = await request.formData();
    const obj = Object.fromEntries(formdata);

    let [success, data] = await fetchAPI('auth/login', {
        method: 'post',
        body: JSON.stringify(obj)
    });
    if (success)
    {
        // store token to session storage
        sessionStorage.setItem('token', data);
        redirect('/');
    }
    return data;
}