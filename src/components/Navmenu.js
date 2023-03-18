import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logov2 from "./Logov2.png";
import {LinkContainer} from 'react-router-bootstrap';

function Navmenu() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="container-fluid">
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
            <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="text-center">
            <LinkContainer to="/Login">
            <Nav.Link>
              <Button variant="primary" type="submit">
                logout
              </Button>
            </Nav.Link>
            </LinkContainer>
      
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navmenu;
