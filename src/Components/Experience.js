import React from 'react';

import { Link } from 'react-router-dom';

import Crd from '../Components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import GDMS from '../assets/images/GDMS.jpeg'
import engineering from '../assets/images/engineering.png'
import Fulton from '../assets/images/Fulton.png'




class Experience extends React.Component{
    constructor(props){
        super (props);
        this.state = {
            items: [
                {
                    title: 'Engineering Intern',
                    company: 'General Dynamics Mission Systems',
                    time: '[June 2021 - Current]',
                    image: GDMS,
                    source: 'https://gdmissionsystems.com',
                    text: "Implemented health monitoring and stability tools on a Data Analytics platform for Threat Assessment across the BICES-X intelligence and communications network"
                },
                {
                    title: 'Undergraduate Student Researcher',
                    company: 'Sonoran Visualization Lab @ Arizona State University',
                    time: '[August 2019 - June 2021]', 
                    image: engineering,
                    source: 'https://svl-at-asu.github.io',
                    text: "Co-authored 2 machine learning and data visualization research papers under the supervision of Dr. Chris Bryan, an ASU Professor."
                },
                {
                    title: 'Undergraduate Student Researcher - Fulton Undergraduate Research Initiative',
                    company: 'Ira A. Fulton Schools of Engineering',
                    time: '[Jan 2020 - May 2020]', 
                    image: Fulton,
                    source: 'https://furi.engineering.asu.edu/furiproject/connecting-the-dots-towards-automated-dataset-and-visualization-recommendation-from-news-articles/',
                    text: "Researched under the supervision of Dr. Chris Bryan to determine if NLP can be used in to automatically recommend Datasets based on a News Article"
                }
            ]
        }
    }

    makeItems = (items) => {
        return items.map(item => {
            return (

                <Col xl={4} lg={6} md={9} sm={12} >
                    <a href={item.source} target="_blank" className="remove-hyperlink " rel="noopener noreferrer">
                        <Crd title={item.title} company={item.company} time={item.time} image={item.image} text = {item.text} />
                    </a>
                </Col>
            );
        })
    }

    render(){
        return(
            <div>
              
                <h5 className="font-weight-bolder">Recent Experience</h5>
                <br/>
               
                <Container fluid = {true}>
                    <Row className = "justify-content-around margins">
                        {this.makeItems(this.state.items)}
                    </Row>
                </Container>
                <br/>
                <Container fluid = {true}>
                    <Link className="text-right remove-color-hyperlink font-weight-bolder mint-gradient" to="/Experience">See More...</Link>
                </Container>
                <br />
                <br />
                
            </div>
        );
    }
}



export default Experience;