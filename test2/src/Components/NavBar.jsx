import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">FilmFinder</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Films</Nav.Link>
            <Nav.Link href="#pricing">Favourites</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default NavBar;