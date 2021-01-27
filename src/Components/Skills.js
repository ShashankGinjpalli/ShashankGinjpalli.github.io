import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'


function Skills(){
    return (
      <div>
        
        <h5 className="font-weight-bolder">Here Are Some Of My Skills</h5>

        <Container fluid={true} className="margins p-4 justify-content-center">
          <h5 className="mint-gradient">Fluent</h5>
          <Row className = 'd-flex flex-row ml-auto'>
            <p>Python | C/C++ | Java | Swift | SwiftUI | IOS | C# | SQL | HTML | CSS | Bootstrap | Firebase</p>
          </Row>


          <h5 className="mint-gradient">Familiar</h5>
          <Row className = "d-flex flex-row ml-auto">
            <p>ReactJS | Keras | NumPy | Selenium | NLTK | TensorFlow | OpenCV | Windows Communication Foundation | .NET | RESTful and SOAP Services
d3.js | Neo4j | Docker</p>
          </Row>

        </Container>
      </div>
    );
}

export default Skills;