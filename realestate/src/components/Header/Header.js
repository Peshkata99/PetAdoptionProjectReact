import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Header = () => {
    const { isAuthenticated, userEmail } = useContext(AuthContext)
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">AdoptionCenter</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {isAuthenticated && (
                            <div>
                                <Nav.Link href="/create-pet">Create Pet</Nav.Link>
                                <Nav.Link href="/logout">Logout</Nav.Link>
                                <Navbar.Text>Hello, {userEmail}</Navbar.Text>
                            </div>)
                        }
                        {!isAuthenticated && (
                            <div>
                                <Nav.Link href="/login">Login</Nav.Link>
                                <Nav.Link href="/register">Register</Nav.Link>
                            </div>
                        )}
                        <Nav.Link href="/catalog">Catalog</Nav.Link>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}