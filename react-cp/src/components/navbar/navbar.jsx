import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
    return (
        <>
        <Navbar bg="#878f5e" data-bs-theme="dark">
            <Container>
            <Navbar.Brand href="#home">SEYI's</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Portfolio</Nav.Link>
                <Nav.Link href="#pricing">Certificates</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        </>
    );
}

export default ColorSchemesExample;