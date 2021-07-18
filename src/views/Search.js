import React from 'react';
import './Search.css';
import { MDBCol } from "mdbreact";
import { Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Search extends React.Component {
    
    constructor(){
        super();
        this.state = {
          search:null,
          data:[],
        }
      }
      async componentDidMount(){
        /*Object.values(search).forEach(element => console.log(element)) ;
       /* this.state.search.forEach(async search => {
    
        })*/
      }
     
     handleChange = (evt) => {
         const {value} = evt.target
         this.setState({search:value})
     }
     handleClick = async (evt) => {
         evt.preventDefault();
         const {search} = this.state;
        const resp = await fetch(`https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?search=${search}`)
        const data = await resp.json();
        this.setState({data:data.records});

        // console.log(data.records);
     }


     // fonction 
     
     handleFavoris = (favoris) => {
        
        
        // recup id 
        const id = favoris.record.id;
         let fav = localStorage.getItem('favoris');
       
         if (fav) {
            // console.log('antho', JSON.parse(fav));

        //JSON.parse pour lire l'objet du localStorage 
         
        const localFav = JSON.parse(fav) 

        
        localFav[id] = favoris.record;

        // JSON.stringify convertit une valeur en chaîne JSON pour le localStorage

       localStorage.setItem('favoris', JSON.stringify(localFav))
          
        }
        else {
            localStorage.setItem('favoris', JSON.stringify({}))
        }
         


     }

    


      render(){

    const {data, search} = this.state;
    //console.log(search);

    
        
    return (
        <div className="search">
           <h1>Lister de futurs événements à Paris</h1>
            <MDBCol md="6">
                <form className="form-inline mt-4 mb-4">
                <input 
                className="form-control form-control-sm ml-3 w-75" 
                type="text" 
                placeholder={this.props.placeholder}
                aria-label="Search"
                onChange = {this.handleChange}
                />
                <button className="button-search"
                onClick={this.handleClick}
                >Entrée</button>
                </form>
            </MDBCol>
            <h1>Résultats de la recherche</h1>
            <div className="card-display">
            {search ? 
                data.length ? 
                    data.map(value =>  <Card key={value.record.id} className="card-style"  style={{ width: '20rem' }}>
                    <Card.Img className="card-img" variant="top" src={value.record.fields.cover_url} />
                    <Card.Body>
                      <Card.Title className="card-title" ><Link to={`event/${value.record.id}`}>{value.record.fields.title}</Link></Card.Title>
                        <Card.Text>
                           {value.record.fields.date_start}
                        </Card.Text>
                        <Card.Text>
                            {value.record.fields.lead_text}
                        </Card.Text>
                        <Button variant="primary" onClick={() => this.handleFavoris (value)} >FAV</Button>
                    </Card.Body>
                    </Card>)
                    :<p>aucun résultat</p>
                        :<div></div>}
            </div>
            
        </div>
   
        
    )
}
}

export default Search;
