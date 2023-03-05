import { Button, Card } from "react-bootstrap";
import { Link, useRouteLoaderData } from "react-router-dom";
import { time_passed_str } from "../../../helppers/time_formatter";
import UserComponent from "../../../helppers/UserComponent";

export default function PostComment({comment})
{
    const user = useRouteLoaderData('root');
    return (
        <Card>
            <Card.Header>
                <UserComponent username={comment.user.username} />
                <span> Posted </span>
                {time_passed_str(comment.createdAt)}
                {comment.edit_user && <>
                <UserComponent username={comment.edit_user.username} />
                <span> Edited </span>
                {time_passed_str(comment.updatedAt)}
                </>}
                {user && (user._id == comment.user._id || user.role == 'admin') &&  <Button as={Link} to={`/comment/${comment._id}/edit`}>Edit</Button>}
            </Card.Header>
            <Card.Body>
                <Card.Text>
                {comment.text}</Card.Text>
            </Card.Body>
        </Card>
    );
}