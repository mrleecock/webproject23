import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function UserComponent({username})
{
    return (
        <Link to={`/user/${username}`}>
            <Image 
                style={{height: '2em', width: '2em'}} 
                roundedCircle 
                src={`${process.env.REACT_APP_API_ROOT_URL}${process.env.REACT_APP_API_ROOT_PATH}${process.env.REACT_APP_API_USERNAME_IMAGE_PATH}${username}`}>
            </Image>
            {username}
        </Link>
    );
}