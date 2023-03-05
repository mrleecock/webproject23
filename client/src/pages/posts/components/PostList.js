import { Container } from "react-bootstrap";
import PostListItem from "./PostListItem";

export default function PostList({posts})
{
    return (
        <Container>
                {posts.map((post, idx) => {
                    return <PostListItem post={post} key={idx}/>
                })}
        </Container>
    );
}