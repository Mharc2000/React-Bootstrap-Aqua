import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {LinkContainer} from 'react-router-bootstrap';


function Homemenu() {
    return (
    <Container fluid className="d-flex justify-content-center mt-5">

         <Nav justify variant="tabs" defaultActiveKey="/reader" >
    
        <Nav.Item>
            <LinkContainer to="/Reader">
                <Nav.Link eventKey="link-1" className="HomeMenu">Reader</Nav.Link>
            </LinkContainer>
        </Nav.Item>
        
        <Nav.Item>
            <LinkContainer to="/Payment">
            <Nav.Link eventKey="link-2" className="HomeMenu">Payments</Nav.Link>
            </LinkContainer>
        </Nav.Item>
        <Nav.Item>
            <LinkContainer to="/Client">
            <Nav.Link eventKey="link-3" className="HomeMenu">Clients</Nav.Link>
            </LinkContainer>
        </Nav.Item>
        <Nav.Item>
            <LinkContainer to="/Bills">
            <Nav.Link eventKey="link-4" className="HomeMenu">Bills</Nav.Link>
            </LinkContainer>
        </Nav.Item>
        <Nav.Item>
            <LinkContainer to="/Invoice">
            <Nav.Link eventKey="link-5" className="HomeMenu">Invoice</Nav.Link>
            </LinkContainer>
        </Nav.Item>
        <Nav.Item>
            <LinkContainer to="/Setting">
            <Nav.Link eventKey="link-6"className="HomeMenu">Setting</Nav.Link>
            </LinkContainer>
        </Nav.Item>
        
        </Nav>
            
        </Container>
    );
  }
  export default Homemenu;