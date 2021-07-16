import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
//import DATA from '../data/que-faire-a-paris-.json'
import { Card, Button, Container, Row, Image, Col} from 'react-bootstrap';
import './Evenement.css';


function Evenement() {
   
    const params = useParams();
    const id = params.id;

    const [event, setEvent] = useState(null);

   useEffect (() => {

    fetch(`https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/${id}`)
        .then((res) => res.json())
        .then((result) => {
        setEvent(result)
        console.log("nsm",result)
    });
    // setEvent( 
        
    //     DATA.filter(d => d.recordid === id )[0] 
        
    //     );

   }, []);
    
   return (
        <div>
            <Container>
            <Row className="row-grid">
              <Col className="grid-1" >
              <Card.Title>{event?.record?.fields?.title}</Card.Title>
              <Image src={event?.record?.fields?.cover_url} thumbnail />
              <Card.Text>{event?.record?.fields?.lead_text}</Card.Text>
              </Col>
              <Col className="grid-2">
              <Button variant="primary">Go somewhere</Button>
              <Card.Title>Date </Card.Title>
              <Card.Text>{event?.record?.fields?.date_description}</Card.Text>
              <Card.Title>Prix </Card.Title>
              <Card.Text>{event?.record?.fields?.price_type}</Card.Text>
              <Card.Title>S'y rendre </Card.Title>
              <Card.Text>{event?.record?.fields?.lat_long}</Card.Text>
              <Card.Title>Transport </Card.Title>
              <Card.Text>{event?.record?.fields?.transport}</Card.Text>
              <Card.Title>Plus d'infos </Card.Title>
              <Card.Text>{event?.record?.fields?.contact_phone}</Card.Text>
              <Card.Text>{event?.record?.fields?.contact_facebook}</Card.Text>
              <Card.Text>{event?.record?.fields?.contact_mail}</Card.Text>
              <Card.Text>{event?.record?.fields?.contact_twitter}</Card.Text>
              <Card.Text>{event?.record?.fields?.acess_link}</Card.Text>
              
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default Evenement
