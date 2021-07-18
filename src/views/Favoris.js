import React, { useEffect, useState } from 'react'
import { Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Favoris.css';
function Favoris() {
   
    const [stateFavoris, setStateFavoris] = useState([]);
   

    useEffect (() => {

    let favoris = localStorage.getItem('favoris');
    
    const localFav = JSON.parse(favoris); 
    console.log('yo', localFav);
    
    setStateFavoris(localFav);
   

},[])
   
    return (
        <div>
            <h1>Elements sauvgardés
            </h1>
        <div className="card-display">
            {stateFavoris && Object.values(stateFavoris).map(value =>
            <>
            {/* <h1>{value.fields.title}</h1> */}
            <Card key={value.fields.id} className="card-style"  style={{ width: '20rem' }}>
            <Card.Img className="card-img" variant="top" src={value.fields.cover_url} />
            <Card.Body>
            <Card.Title className="card-title" ><Link to={`event/${value.fiels}`}>{value.fields.title}</Link></Card.Title>
            <Card.Text>
            {value.fields.date_start}
            </Card.Text>
            <Card.Text>
            {value.fields.lead_text}
            </Card.Text>
            <Button variant="primary" >Delete</Button>
            </Card.Body>
            </Card>
            
            </>
            
            
            )}
        </div>
        </div>
    )
}

export default Favoris
