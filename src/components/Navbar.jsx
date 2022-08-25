import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link as LinkRouter} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import "../styles/style.css"

const navbarOptions= [
    { to: "/index", name: "Table" },
    { to: "/form", name: "Form" },
];

export default function NavbarC() {

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    {navbarOptions.map((navbarOptions, Index) => (
                        <LinkRouter 
                        key={Index}
                        to={navbarOptions.to}>
                        <Nav className="me-auto" >
                        <Button variant="outline-secondary">{navbarOptions.name}</Button>
                    </Nav>
                    </LinkRouter>
                    ))}
                    
                </Container>
            </Navbar>
        </>
    );
}
