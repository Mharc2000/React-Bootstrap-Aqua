import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Anchor } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import Logov2 from "../img/Logov2.png";
import Navsignin from '../components/Navsignin'


const Login = () =>{
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
              
                <Form className="px-3 py-3 mx-3 my-3 mb-4">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control  type="email" placeholder="Enter email"  style={{  borderRadius: "13px",}} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"  style={{  marginBottom: "10px", borderRadius: "13px",}} />
                  
                    </Form.Group>
                 
                    <div className="d-flex">
                        <LinkContainer to="/Home">
                        <Button className="flex-grow-1 mt-3" variant="primary" type="submit" style={{  borderRadius: "13px",}}>
                            Login
                        </Button>
                        </LinkContainer>
                    </div>
                    
                    <div className="d-flex justify-content-center">
                      <LinkContainer to="/Forgotpass" style={{  textDecoration: "none"}} >
                      <Anchor className="mt-2" to="" style={{  textDecoration: "none"}}  > Forgot Password?</Anchor> 
                      </LinkContainer>
                      
                      <LinkContainer to="/Signin" style={{  textDecoration: "none"}} >
                        <Anchor className="mt-2 mx-2"  > Or Signup</Anchor> 
                      </LinkContainer>
                    </div>
                    

                    
                </Form>
            </Card.Body>
                
        </Card>
      </Container>
    </div>
  );
}

export default Login;