const APIURL = process.env.REACT_APP_API_ROOT_URL + process.env.REACT_APP_API_ROOT_PATH
const DEFAULT_OPTIONS = {
    headers: {
        'Content-Type': 'application/json'
    }
}

// helpper function for handling api fetching
// params
    // endurl = api end path
    // options = same as in default fetch 
// return
    // [bool, data]
    // if success
        // bool = true
        // data = fetched data
    // if error
        // bool = false
        // data = error message
export default async function fetchAPI(endurl, options)
{
    try {
        // if jwt token exist in session storage, include it in every fetch
        let token = sessionStorage.getItem('token');
        if (token) {
            options = {...options, headers: {authorization: `Bearer ${token}`, 'Content-Type': 'application/json'}}
        };

        let response = await fetch(APIURL + endurl, {...DEFAULT_OPTIONS, ...options});
        let json = await response.json();
        
        // if status != 200 -> throw error
        if (response.status != 200) throw json.error;
        return [true, json.data];
    }
    catch (err)
    {
        return [false, err.message];
    }
}