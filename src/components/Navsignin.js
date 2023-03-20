import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Logov2 from "./Logov2.png";
import {LinkContainer} from 'react-router-bootstrap';

function Navsignin() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
      <Container fluid="md" className="container-fluid">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={Logov2}
            width="40"
            height="40"
            className="d-inline-block align-center"
          />
          {" PROJECT AQUA "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto text-center">
            
          </Nav>
          <Nav className="text-center">
            <LinkContainer to="/">
            <Nav.Link>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/Signin">
            <Nav.Link>
              <Button variant="primary" type="submit">
                Sign in
              </Button>
            </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navsignin;
