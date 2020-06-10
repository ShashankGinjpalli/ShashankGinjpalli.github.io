import React from 'react';
import { BrowserRouter as Router,Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
 


import './App.css';
import Home from './pages/Home';
import allExperience from './pages/allExperience';
import R from './assets/files/ShashankGinjpalli_Resume.pdf'



class App extends React.Component {

  render(){
    return (
      <Router>
        <Container fluid = {true} className = "p-4 px-5">
              <Navbar className="ml-2 " bg="white">
                <Nav>
                  <Link className="nav-link" to = "/" >Shashank Ginjpalli</Link>
                </Nav>
                <Nav className="ml-auto mr-2">
                  <a className="nav-link" href={R} target="_blank" rel="noopener noreferrer">Resumé</a>
                </Nav>
              </Navbar>
        </Container>
        
        <Route path='/' exact render={() => <Home />} />
        <Route path='/allExperience' render={() => <allExperience />}/>
      </Router> 
    );
  }
}

export default App;
