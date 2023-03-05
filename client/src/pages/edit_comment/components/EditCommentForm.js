import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Form as RouterForm, useActionData, useLoaderData } from "react-router-dom";

export default function EditCommentForm()
{
    const error_message = useActionData();

    const comment = useLoaderData();

    const [text, setText] = useState(comment.text);

    return (
        <Form as={RouterForm} method="post">
            <h2>Edit Comment</h2><p>{error_message}</p>
            <Form.Group className="mb-3" controlId="formText">
                <Form.Label>Comment</Form.Label>
                <Form.Control required as="textarea" placeholder="text" name="text" rows={4}
                    value={text} onChange={(e) => setText(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}