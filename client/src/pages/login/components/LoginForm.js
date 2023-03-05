import { Form as RouterForm, useActionData } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

export default function LoginForm()
{
    const error_message = useActionData('');
    return (
        <Form as={RouterForm} method="post">
            <h2>Login</h2><p>{error_message}</p>
            <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control required type="text" placeholder="Username" name="username" autoFocus/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" placeholder="Password" name="password"/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
}