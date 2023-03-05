import { Form as RouterForm, useActionData } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

export default function RegisterForm()
{
    const error_message = useActionData('');
    return (
        <Form as={RouterForm} method="post">
            <h2>Register</h2><p>{error_message}</p>
            <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control required type="text" placeholder="Username" name="username" autoFocus/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" placeholder="Password" name="password"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formRole">
                <Form.Check type="checkbox" label="Admin" name="role" value="admin" id="check_admin"/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>
    );
}