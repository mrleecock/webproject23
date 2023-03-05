import { redirect } from "react-router-dom";
import fetchAPI from "./fetch";


// redirect user if already logged in
export async function register_login_loader()
{
    let [success, none] = await fetchAPI('auth/info');
    if (success)
    {
        return redirect('/');
    }
    return null;
}