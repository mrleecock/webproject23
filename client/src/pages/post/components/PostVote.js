import { Badge, Button, Container, Form } from "react-bootstrap";
import { Form as RouterForm, useRouteLoaderData } from "react-router-dom";

import {HandThumbsDown, HandThumbsUp} from 'react-bootstrap-icons';

// voting component
export default function PostVote({vote_value})
{
    const user = useRouteLoaderData('root');
    return (
        <Container>
            {user && 
            <Form as={RouterForm} method='post'>
                <Form.Control type="hidden" value={true} name="positive_vote" />
                <Button variant="success" type="submit"><HandThumbsUp></HandThumbsUp></Button>
                
            </Form>
            }
                {vote_value > 0 && <Badge bg="success" style={{margin: "1em"}}>+{vote_value}</Badge>}
                {vote_value < 0 && <Badge bg="danger" style={{margin: "1em"}}>{vote_value}</Badge>}
                {vote_value == 0 && <Badge bg="secondary" style={{margin: "1em"}}>{vote_value}</Badge>}

            {user &&
            <Form as={RouterForm} method='post'>
                <Form.Control type="hidden" value={false} name="positive_vote" />
                <Button variant="danger" type="submit"><HandThumbsDown></HandThumbsDown></Button>
            </Form>
            
            }
        </Container>
    );
}