import React from "react";
import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";
import Homemenu from '../components/Homemenu'
import Navmenu from '../components/Navmenu'

const Setting = () =>{
  return (

    <>
      <Navmenu/>
      <Homemenu/>
      <Container fluid className="d-flex justify-content-center mt-2">
        <Card style={{ width: '80rem' }}>
          <Card.Body>
            <Card.Title>Setting</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>

      </Container>
    </>
  );
}

export default Setting;