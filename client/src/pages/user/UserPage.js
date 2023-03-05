import { Button, Card, Container, Form } from "react-bootstrap";
import { useLoaderData, useRouteLoaderData, Form as RouterForm} from "react-router-dom";

export default function UserPage()
{
    let userb = useLoaderData();
    let user = useRouteLoaderData('root');
    return (
        <Container>
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" 
                    src={`${process.env.REACT_APP_API_ROOT_URL}${process.env.REACT_APP_API_ROOT_PATH}${process.env.REACT_APP_API_USERNAME_IMAGE_PATH}${userb.username}`}
                />
                <Card.Body>
                    <Card.Title>{userb.username}</Card.Title>
                    <Card.Text>Role: {userb.role}</Card.Text>
                    {user && userb._id == user._id && 
                        <Form as={RouterForm} method="post" encType="multipart/form-data">
                            <Form.Control type="file" name="pic" required/>
                            <Button variant="primary" type="submit">Change Picture</Button>
                        </Form>
                    }
                </Card.Body>
            </Card>
        </Container>
    );
}