import Highlight from 'react-highlight';
import { Button, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { time_passed_str } from '../../../helppers/time_formatter';
import UserComponent from '../../../helppers/UserComponent';

export default function PostBody({post, user})
{
    
    return (
    <Container>
            <h2>{post.title} 
            {user && (user._id == post.user._id || user.role == 'admin') && 
                <Button as={Link} to={`/post/${post._id}/edit`}>Edit</Button>}
            </h2>
            <p style={{whiteSpace: 'pre-wrap'}}>{post.text}</p>
            <Container>
                <Highlight>
                    <code>{post.code_body}</code>
                </Highlight>
            </Container>
            <p>
                Created by: <UserComponent username={post.user.username} /> 
                {time_passed_str(post.createdAt)}
            </p>
            {post.edit_user &&
            <p>
                Edited by: <UserComponent username={post.edit_user.username} />
                {time_passed_str(post.editedAt)}
            </p>
            
            }
        </Container>
    );
}