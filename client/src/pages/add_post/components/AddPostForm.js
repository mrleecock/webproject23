import { Button, Form } from "react-bootstrap";
import { Form as RouterForm, useActionData } from "react-router-dom";

export default function AddPostForm()
{
    const error_message = useActionData();
    return (
        <Form as={RouterForm} method="post">
            <h2>New Post</h2><p>{error_message}</p>
            <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control required type="text" placeholder="Title" name="title" autoFocus/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formText">
                <Form.Label>Text</Form.Label>
                <Form.Control required as="textarea" placeholder="text" name="text" rows={4}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCode">
                <Form.Label>Code</Form.Label>
                <Form.Control required as="textarea" placeholder="code" name="code_body" rows={20}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}