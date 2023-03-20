import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logov2 from "./Logov2.png";
import {LinkContainer} from 'react-router-bootstrap';

function Navmenu() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark" >
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
          <Nav className="me-auto">
            
          </Nav>
          <Nav className="text-center" >
              <LinkContainer to="/Home">
                
                  <Nav.Link>Home</Nav.Link>
              </LinkContainer>

          </Nav>
         
               
          <Nav className="text-center" >
              <NavDropdown title="John Doe" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Account</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Setting
                </NavDropdown.Item>
                <LinkContainer to="/">
                <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
                </LinkContainer>
            
            
              </NavDropdown>
            </Nav>
          
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navmenu;
