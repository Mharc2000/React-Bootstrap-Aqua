import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";



function Login() {
  return (
    <div className="Login">
      <Container className="d-flex justify-content-center mt-5">
        
        
        <Card style={{ width: "35rem" }}>
        <Card.Header>Login</Card.Header>
            <Card.Body >
                <Form className="px-3 py-3 mx-3 my-3">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                
                    
                    <div className="d-flex">
                        <Button className="flex-grow-1" variant="primary" type="submit">
                            Login
                        </Button>
                    
                    </div>
                </Form>
            </Card.Body>
                
        </Card>
      </Container>
    </div>
  );
}

export default Login;