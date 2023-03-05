import fetchAPI from "../../helppers/fetch";

// fetch user data
export async function user_loader()
{
    let [success, data] = await fetchAPI('auth/info');
    if (!success) 
    {
        sessionStorage.removeItem('token');
        return null;
    }
    return data;
}