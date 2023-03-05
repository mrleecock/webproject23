import { Form } from "react-bootstrap";

export default function SearchBar({filter, setFilter})
{
    return (
        <Form.Control value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="Search titles (RegEx)"/>
    );
}