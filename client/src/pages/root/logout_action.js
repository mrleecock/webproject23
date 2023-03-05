// removes token from session storage
export async function logout_action()
{
    sessionStorage.removeItem('token');
    return null;
}