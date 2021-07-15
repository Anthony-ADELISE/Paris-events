import React from 'react';
import './Acceuil.css';
import { Card, Button} from 'react-bootstrap';

class Acceuil extends React.Component {
    
    render(){
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
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
        
    )
}
}

export default Acceuil;