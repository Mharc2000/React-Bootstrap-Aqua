import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Navmenu from '../components/Navmenu'


const Home = () =>{
  return (

    <>
    <Navmenu/>
      <Container className="d-flex justify-content-center mt-5">
        
        
        <Card style={{ width: "35rem" }}>
        <Card.Header>Login</Card.Header>
            <Card.Body >
                <h1>HOME</h1>
            </Card.Body>
                
        </Card>
      </Container>
    </>
  );
}

export default Home;