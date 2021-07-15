import React from 'react';
import { useEffect, useState } from 'react';
import './Acceuil.css';
import { Card, Button} from 'react-bootstrap';
import DATA from '../data/que-faire-a-paris-.json';
import { Link } from 'react-router-dom';


function Acceuil () {
    
    const [record, setRecord] = useState(null);

    useEffect(() => {


        setRecord(DATA[0]);

    }, []);


    return (
        <div className="acceuil-event">
            <div className="welcome">
                <h1>Bienvenue sur Paris event</h1>
                <p>L'application qui permet de chercher en direct les prochains évenements sur Paris</p>
            </div>
            <div className="actu-event">
                <h1>Actualité</h1>
                <p>Le dernier évenement publié :</p>
            </div>
           { record && <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={record.fields.cover_url} />
                <Card.Body>
                    <Card.Title><Link to={`event/${record.recordid}`}>{record.fields.title}</Link></Card.Title>
                    <Card.Text>
                        {record.fields.date_start}
                    </Card.Text>
                    <Card.Text>
                    {record.fields.lead_text}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card> 
                }
        </div>
        
    )
}

export default Acceuil;