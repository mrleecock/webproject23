import { Container } from "react-bootstrap";
import { useRouteError } from "react-router-dom";

export default function ErrorPage()
{
    const error = useRouteError();
    return (
        <Container>
            <h2>Error</h2>
            <p>{error.statusText}</p>
            <p>{error.message}</p>
        </Container>
    );
}