
// post new user picture
export async function user_picture_action({request})
{
    const formdata = await request.formData();
    const req = new XMLHttpRequest();
    req.open('post', `${process.env.REACT_APP_API_ROOT_URL}${process.env.REACT_APP_API_ROOT_PATH}user/image`, false);
    req.setRequestHeader('authorization', `Bearer ${sessionStorage.getItem('token')}`)
    req.send(formdata);
    return {};
}