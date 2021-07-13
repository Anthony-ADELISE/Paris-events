import React from 'react';
import './Acceuil.css';

function Acceuil() {
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
        </div>
    )
}

export default Acceuil;