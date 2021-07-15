import './App.css';
import Search from './views/Search';
import Favoris from './views/Favoris';
import Acceuil from './views/Acceuil';
import NavigationBar from './views/NavigationBar';
import Evenement from './views/Evenement';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';

class App extends React.Component {
  
  render(){
    return (
      <div className="App">
        <Router>
          <NavigationBar></NavigationBar>
          <Route exact path="/" component={Acceuil}></Route>
          <Route path="/favoris" component={Favoris}></Route>
          <Route exact path="/liste des évenements" handleChange={(e) => console.log(e)} component={Search}></Route>
          <Route path="/event/:id" component={Evenement}></Route>
        </Router>
      </div>
);
}
}
export default App;
