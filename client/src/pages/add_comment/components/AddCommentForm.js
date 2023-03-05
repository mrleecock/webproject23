import { Button, Form } from "react-bootstrap";
import { Form as RouterForm, useActionData } from "react-router-dom";

export default function AddCommentForm()
{
    const error_message = useActionData();
    return (
        <Form as={RouterForm} method="post">
            <h2>New Comment</h2><p>{error_message}</p>
            <Form.Group className="mb-3" controlId="formText">
                <Form.Label>Comment</Form.Label>
                <Form.Control required as="textarea" placeholder="text" name="text" rows={4}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}