import React from 'react';

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'

function ProjectCard(props){
    return(
        <Card className="p-4" style={{ border: 'none', height: 'auto', marginRight: 'auto', marginLeft: 'auto' , background: 'transparent' }}>
            <Card.Img className= "neumorphicShadow" style={{
            
                maxHeight: 'auto',
                maxWidth: '600px',
                marginLeft: 'auto',
                marginRight: 'auto',
                boxShadow: '0px 0px 20px 1px #CCC',
                borderRadius: '15px',
            }} variant="top" src={props.img} />
            <Card.Body>
                <br/>
            <Card.Title>{props.title}</Card.Title>
            <small>{props.dates}</small>
            <br/>
            <p className = "lead">{props.projectType}</p>
                <h6 className = "font-weight-bolder">Skills Used</h6>
                <Row className = "d-flex flex-row p-0 ml-auto">
                    <h6 className = "p-2 mr-2 bg-dark text-white mt-2">{props.skill1}</h6>
                    <h6 className= " p-2 mr-2 bg-dark text-white mt-2 " >{props.skill2}</h6>
                    <h6 className=" p-2 mr-2 bg-dark text-white mt-2" >{props.skill3}</h6>
                    <h6 className=" p-2 mr-2 bg-dark text-white mt-2" >{props.skill4}</h6>
                </Row>
                <br />
                <Card.Text>
                    {props.headline}
                </Card.Text>
                <a className="mint-gradient remove-color-hyperlink font-weight-bolder" href={props.link} target="_blank" rel="noopener noreferrer">See Details...</a>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;