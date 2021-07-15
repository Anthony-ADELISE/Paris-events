import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import DATA from '../data/que-faire-a-paris-.json'
import { Card, Button} from 'react-bootstrap';


function Evenement() {
   
    const params = useParams();
    const id = params.id;

    const [event, setEvent] = useState(null);

   useEffect (() => {
    

    setEvent( 
        
        DATA.filter(d => d.recordid === id )[0] 
        
        );

   }, []);
   
    return (
        <div>
            {event && 
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={event.fields.cover_url} />
            <Card.Body>
                <Card.Title>{event.fields.title}</Card.Title>
                <Card.Text>
                    {event.fields.date_start}
                </Card.Text>
                <Card.Text>
                {event.fields.lead_text}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card> 
            }
        </div>
    )
}

export default Evenement
