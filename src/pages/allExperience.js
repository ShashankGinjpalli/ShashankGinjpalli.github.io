import React from 'react';
import Container from 'react-bootstrap/Container'
import Crd from '../Components/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import engineering from '../assets/images/engineering.png'
import ASU from '../assets/images/ASU.png'
import AutonomIQ from '../assets/images/autonomiq.jpeg'
import oneclass from '../assets/images/oneclass.jpg'
import Fulton from '../assets/images/Fulton.png'



class allExperience extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    title: 'Undergraduate Student Researcher',
                    company: 'Sonoran Visualization Lab @ Arizona State University',
                    time: '[August 2019 - Current]',
                    image: engineering,
                    source: 'https://svl-at-asu.github.io',
                    text: "Working on a research project to see the feasability of using NLP automatically recommending datasets based on a text document"
                },
                {
                    title: 'Undergraduate Student Researcher - Fulton Undergraduate Research Initiative',
                    company: 'Ira A. Fulton Schools of Engineering',
                    time: '[Jan 2020 - May 2020]', 
                    image: Fulton,
                    source: 'https://furi.engineering.asu.edu/furiproject/connecting-the-dots-towards-automated-dataset-and-visualization-recommendation-from-news-articles/',
                    text: "Researched under the supervision of Dr. Chris Bryan to determine if NLP can be used in to automatically recommend Datasets based on a News Article"
                },
                {
                    title: 'AI Intern',
                    company: 'AutonomIQ',
                    time: '[May 2019 - August 2019]',
                    image: AutonomIQ,
                    source: 'https://autonomiq.io',
                    text: "Worked on a product that greatly improves a Software Tester’s efficiency by using AI to automatically test their application. Created a smart scraper that goes through the customers website and grabs all of the data that is required to feed into the test case generation algorithm"
                },
                {
                    title: 'Student Deskside Support I',
                    company: 'Arizona State Universtiy Technology Office',
                    time: '[October 2017 - Decemeber 2018]',
                    image: ASU,
                    source: 'https://uto.asu.edu',
                    text: 'Worked as an IT technician where I was in charge of setting up technology for use in classrooms and helped the staff diagnose issues with their lab equipment'
                },
                {
                    title: 'Student Note Taker',
                    company: 'OneClass Inc',
                    time: '[August 2017 - Decemeber 2017]',
                    image: oneclass,
                    source: 'https://oneclass.com',
                    text: 'Took Notes for the duration of my Calc 1 and Intro to Programming classes so that students who required help with those classes could refer back to my notes and understand the material '
                }
            ]
        }
    }

    makeItems = (items) => {
        return items.map(item => {
            return (
                <Col xl={4} lg={6} md={9} sm={12}>
                <a href={item.source} target="_blank" className="remove-hyperlink" rel="noopener noreferrer">
                    <Crd title={item.title} company={item.company} time={item.time} image={item.image} text={item.text} />
                </a>
            </Col>
            );
        })
    }

    render(){
        return (
        <div>
        <div className="center">
            <div className="align-center-left">
                <h5 className = "font-weight-bolder pt-5"> All Experience</h5>

                <Container fluid = {true}>
                        <Row className="justify-content-around margins">
                            {this.makeItems(this.state.items)}
                            
                        </Row>
                </Container>
               
            </div>

        </div>
        </div>

        );
    }



    
}

export default allExperience;