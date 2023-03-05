import { Button, Container } from "react-bootstrap";
import { Link, useLoaderData, useRouteLoaderData } from "react-router-dom";
import PostBody from "./components/PostBody";
import PostComment from "./components/PostComment";
import PostVote from "./components/PostVote";

export default function PostPage()
{
    const [post, comments] = useLoaderData();
    const user = useRouteLoaderData('root');

    return (
        <>
            <PostVote vote_value={post.cached_vote_count} />
            <PostBody post={post} user={user}/>
            <Container style={{padding: '2em'}}>
                {comments.map((comment, idx) => {
                    return <PostComment key={idx} comment={comment} />
                })}
            </Container>
            {user && <Button as={Link} to={`/post/${post._id}/addcomment`}>Add Comment</Button>}
        </>
    );
}