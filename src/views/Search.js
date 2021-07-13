import React from 'react';
import './Search.css';
import { MDBCol, MDBIcon } from "mdbreact";

function Search(props) {
    return (
        <div className="search">
            <h1>Lister de futur évenements à Paris</h1>
            <MDBCol md="6">
                <form className="form-inline mt-4 mb-4">
            <MDBIcon icon="search" />
                <input 
                className="form-control form-control-sm ml-3 w-75" 
                type="text" 
                placeholder={props.placeholder}
                aria-label="Search"
                onChange = {props.placeholder}
                />
                </form>
            </MDBCol>
        </div>
    )
}

export default Search;
