import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Anchor, Row, Col } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import Logov2 from "../img/Logov2.png";
import Navsignin from '../components/Navsignin'


const Signin = () =>{
  return (

    <div className="Login">
      <Navsignin/>
      <Container className="d-flex justify-content-center mt-5">

        
  
        <Card style={{ width: "40rem", borderRadius: "25px" }}>
         
            <Card.Body>

              <Container>
                <img 
                    alt=""
                    src={Logov2}
                    width="100"
                    height="100"
                    className="d-inline-block align-center"
                  />{"PROJECT AQUA"}

              </Container>
              
                <Form className="px-3 py-3 mx-3 my-3">
                    <Row>
                      <Col md={6}> 
                        <Form.Group className="mb-3" controlId="formBasicFisrtName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control  type="text" placeholder="Enter First Name"  style={{  borderRadius: "13px",}} />
                        </Form.Group>

                      </Col>

                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control  type="text" placeholder="Enter Last Name"  style={{  borderRadius: "13px",}} />
                        </Form.Group>
                      </Col>
                    </Row>
                    

                    

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control  type="email" placeholder="Enter email"  style={{  borderRadius: "13px",}} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"  style={{  marginBottom: "10px", borderRadius: "13px",}} />
    
                    </Form.Group>
                 
                  
         
                    <div className="d-flex mt-3">
                        <LinkContainer to="">
                        <Button className="flex-grow-1" variant="primary" type="submit" style={{  borderRadius: "13px",}}>
                           Signin
                        </Button>
                        </LinkContainer>

                     
                    
                    </div>

                    <div className="d-flex mt-2 justify-content-center">
                      
              
                      <LinkContainer to="/" style={{  textDecoration: "none"}} >
                        <Anchor> Already have Account </Anchor> 
                      </LinkContainer>
                    
                    </div>
                

                  
                </Form>
            </Card.Body>
                
        </Card>
      </Container>
    </div>
  );
}

export default Signin;