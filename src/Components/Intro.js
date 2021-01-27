import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare,  } from "@fortawesome/free-brands-svg-icons";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons"



function Intro(props){ 
    
    return(
        <Jumbotron className = "jumbo-fluid bg-transparent intro ">
            <Container fluid={true}>
                        <h1 className= "display-3 font-weight-bolder mint-gradient">{props.title}</h1>
                        <h3 className = 'font-weight-bolder'>{props.subTitle}</h3>
                        <br/>
                        <h4 className = "font-weight-lighter">{props.headlineln1}</h4>
                        <h4 className = "font-weight-lighter">{props.headlineln2}</h4>
                        <br/>
                        <br/>

                        <a href="https://www.linkedin.com/in/shashank-ginjpalli/" target="_blank" rel="noopener noreferrer" className='social-icons'>
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                        <a href="https://github.com/ShashankGinjpalli" target="_blank" rel="noopener noreferrer" className="social-icons">
                            <FontAwesomeIcon icon={faGithubSquare} size="2x" />
                        </a>
                        <FontAwesomeIcon icon={faMapMarkerAlt} size="1.5x" className="mr-3 mint-gradient"  />
                        <h6 className="d-inline font-weight-bolder">Cupertino, California</h6>
                       
            </Container>
        </Jumbotron>
        
    );
} 

export default Intro;