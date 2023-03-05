import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { Form, Link, Outlet, useLoaderData } from "react-router-dom";
import UserComponent from "../../helppers/UserComponent";

// main layout
export default function RootLayout()
{
    const user = useLoaderData(null);
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/posts">Posts</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav>
                    <Navbar.Collapse className="justify-content-end">
                        {!user && <Nav.Item><Nav.Link as={Link} to="/login">Login</Nav.Link></Nav.Item>}
                        {!user && <Nav.Item><Nav.Link as={Link} to="/register">Register</Nav.Link></Nav.Item>}
                        {user && 
                            <Nav.Item>
                                <UserComponent username={user.username} />
                            </Nav.Item>
                        }
                        {user && <Form method="post"><Button type="submit">Logout</Button></Form>}
                    </Navbar.Collapse>
                </Nav>
            </Container>
        </Navbar>
        <Container>
            <Outlet />
        </Container>
        </>
    );
}