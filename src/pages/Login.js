import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Anchor } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import Logov2 from "../img/Logov2.png";



const Login = () =>{
  return (

    <div className="Login">
      <Container className="d-flex justify-content-center mt-5">

        
  
        <Card style={{ width: "30rem", borderRadius: "25px", marginTop: "10rem" }}>
         
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
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control  type="email" placeholder="Enter email"  style={{  borderRadius: "13px",}} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"  style={{  marginBottom: "10px", borderRadius: "13px",}} />
                    <Anchor className="mt-2 d-flex justify-content-center" to="" style={{  textDecoration: "none"}}  > Forgot Password?</Anchor>
                    </Form.Group>
                 
                  
                    <LinkContainer to="/home">
                    <div className="d-flex">
                        <Button className="flex-grow-1" variant="primary" type="submit" style={{  borderRadius: "13px",}}>
                            Login
                        </Button>
                    
                    </div>
                    </LinkContainer>
                </Form>
            </Card.Body>
                
        </Card>
      </Container>
    </div>
  );
}

export default Login;