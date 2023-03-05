import fetchAPI from "../../helppers/fetch";

// fecth user data
export async function user_page_loader({params})
{
    const [success, data] = await fetchAPI(`user/un/${params.username}`)
    if (!success) return null;
    return data;
}