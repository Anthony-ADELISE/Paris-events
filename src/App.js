import './App.css';
import Search from './views/Search';
import Favoris from './views/Favoris';
import Acceuil from './views/Acceuil';
import NavigationBar from './views/NavigationBar';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      search:[],
      stats:[]
    }
  }
  async componentDidMount(){
    const resp = await fetch('https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?search=')
    const search = await resp.json()
    this.setState({search});
   /* this.state.search.forEach(async search => {

    })*/
  }
  render(){
    return (
      <div className="App">
        <Router>
          <NavigationBar></NavigationBar>
          <Route exact path="/" component={Acceuil}></Route>
          <Route path="/favoris" component={Favoris}></Route>
          <Route exact path="/liste des évenements" handleChange={(e) => console.log(e)} component={Search}></Route>
        </Router>
      </div>
);
}
}
export default App;
