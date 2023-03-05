import { Button, Container } from "react-bootstrap";
import { Link, useLoaderData , useRouteLoaderData } from "react-router-dom";
import PostList from "./components/PostList";
import PostsNavigation from "./components/PostsNavigation";

export default function PostsPage()
{
    const [posts, page_data] = useLoaderData();
    const user = useRouteLoaderData('root');
    

    return (
        <>
        <Container style={{padding: '1em'}}>
            {user && <Button as={Link} to="/post/add">Add New Post</Button>}
        </Container>
        <Container style={{padding: '1em'}}>
            <PostsNavigation />
            <PostList posts={posts}/>
        </Container>
        </>
    );
}