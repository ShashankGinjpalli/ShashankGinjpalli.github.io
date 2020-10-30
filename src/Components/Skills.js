import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'


function Skills(){
    return (
      <div>
        <h5 className="font-weight-bolder">Here Are Some Of My Skills</h5>

        <Container fluid={true} className="margins p-4 justify-content-center">
          <h6 className="lead">Technical Skills</h6>
          <Row className = 'd-flex flex-row ml-auto'>
            <h6 className="mr-3 bg-dark box-shadow text-white p-2">Python</h6>
            <h6 className="mr-3 bg-dark box-shadow text-white p-2">C/C++</h6>
            <h6 className="mr-3 bg-dark box-shadow text-white p-2">Java</h6>
            <h6 className="mr-3 bg-dark box-shadow text-white p-2">Swift</h6>
            <h6 className="mr-3 bg-dark box-shadow text-white p-2">HTML</h6>
            <h6 className="mr-3 bg-dark box-shadow text-white p-2">CSS</h6>
            <h6 className="mr-3 bg-dark box-shadow text-white p-2">React.js</h6>
            <h6 className="mr-3 bg-dark box-shadow text-white p-2">JavaScript</h6>
            <h6 className="mr-3 bg-dark box-shadow text-white p-2">SQL</h6>
            <h6 className="mr-3 bg-dark box-shadow text-white p-2">
              Data Structures and Algorithms
            </h6>
            <h6 className="mr-3 bg-dark box-shadow text-white p-2">NumPy</h6>
            <h6 className="mr-3 bg-dark box-shadow text-white p-2">OpenCV</h6>
            <h6 className="mr-3 bg-dark box-shadow text-white p-2">Keras</h6>
            <h6 className="mr-3 bg-dark box-shadow text-white p-2">TensorFlow</h6>
            <h6 className="mr-3 bg-dark box-shadow text-white p-2">NLP</h6>

          </Row>
          <br/>
          <br/>
          <h6 className="lead">Other Skills</h6>
          <Row className = "d-flex flex-row ml-auto">
            <h6 className="mr-3 bg-dark box-shadow text-white p-2">Photoshop</h6>
            <h6 className="mr-3 bg-dark box-shadow text-white p-2">Adobe Illustrator</h6>
            <h6 className="mr-3 bg-dark box-shadow text-white p-2">Graphic Design</h6>
            <h6 className="mr-3 bg-dark box-shadow text-white p-2">Photography</h6>


          </Row>

        </Container>
      </div>
    );
}

export default Skills;