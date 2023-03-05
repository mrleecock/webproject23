import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Form as RouterForm, useActionData, useLoaderData } from "react-router-dom";

export default function EditPostForm()
{
    const error_message = useActionData();
    const post = useLoaderData();

    const [title, setTitle] = useState(post.title);
    const [text, setText] = useState(post.text);
    const [code_body, setCodeBody] = useState(post.code_body);

    return (
        <Form as={RouterForm} method="post">
            <h2>Edit Post</h2><p>{error_message}</p>
            <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control required type="text" placeholder="Title" name="title" autoFocus 
                    value={title} onChange={(e) => setTitle(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formText">
                <Form.Label>Text</Form.Label>
                <Form.Control required as="textarea" placeholder="text" name="text" rows={4}
                    value={text} onChange={(e) => setText(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCode">
                <Form.Label>Code</Form.Label>
                <Form.Control required as="textarea" placeholder="code" name="code_body" rows={20}
                    value={code_body} onChange={(e) => setCodeBody(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}