import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'


function Skills(){
    return (
      <div>
        
        <h5 className="font-weight-bolder">Here Are Some Of My Skills</h5>

        <Container fluid={true} className="margins p-4 justify-content-center">
          <h5 className="mint-gradient">Languages</h5>
          <Row className = 'd-flex flex-row ml-auto'>
            <p>Python | C/C++ | Java | Swift | C# | HTML/CSS | SQL | JavaScript</p>
          </Row>


          <h5 className="mint-gradient">Technologies/Frameworks</h5>
          <Row className = "d-flex flex-row ml-auto">
            <p>ReactJS | Keras | Sk-Learn | NumPy | Selenium | NLTK | TensorFlow | .NET | Express | Elastic Search | Kibana | Docker | AWS | GCP | ROS</p>
          </Row>

        </Container>
      </div>
    );
}

export default Skills;