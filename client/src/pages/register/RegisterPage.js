import { Container, Nav } from "react-bootstrap";
import { Link, useActionData } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";

export default function RegisterPage()
{
    return (
            <RegisterForm />
    );
}