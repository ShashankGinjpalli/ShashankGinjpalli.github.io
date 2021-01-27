import React from 'react';
import { HashRouter as Router,Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
 


import './App.css';
import Home from './pages/Home';
import allExperience from './pages/allExperience';
import R from './assets/files/Shashank_Ginjpalli_Resume.pdf'



class App extends React.Component {

  render(){
    return (
      <Router>
        <Container fluid = {true} className = "p-4 px-5">
              <Navbar className="ml-2 fluid">
                <Nav>
                  <Link className="nav-link" to = "/" >Shashank Ginjpalli</Link>
                </Nav>
                <Nav className="ml-auto mr-2">
                  <a className="nav-link" href={R} target="_blank" rel="noopener noreferrer">Resumé</a>
                </Nav>
              </Navbar>
        </Container>
        
        <Route path='/' exact component = {Home} />
        <Route path='/experience' exact component = {allExperience}/>
      </Router> 
    );
  }
}

export default App;
