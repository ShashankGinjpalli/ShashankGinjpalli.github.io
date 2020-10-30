import React from 'react'
import Card from 'react-bootstrap/Card'



function Crd(props){
    return(
        <Card className = "p-4" style={{border: 'none', height: 'auto', marginRight: 'auto', marginLeft: 'auto', background: 'transparent'}}>
            <Card.Img className= "neumorphicShadow" style={{
                maxWidth: '300px',
                height: 'auto',
                marginLeft: 'auto',
                marginRight: 'auto',
                borderRadius: '30px',
                 }} variant="top" src={props.image} />
            <Card.Body>
                <br/>
            <Card.Title>{props.title}</Card.Title>
            <p>{props.company}</p>
            <small>{props.time}</small>
            <br/>
            <br/>
            <Card.Text>
                {props.text}
            </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Crd;