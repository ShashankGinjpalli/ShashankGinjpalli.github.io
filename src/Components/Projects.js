import React from 'react';
import ProjectCard from '../Components/ProjectCard'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import graphAlgorithms from '../assets/images/graphAlgorithms.png'
import movielist from '../assets/images/MovieList.png'




class Projects extends React.Component {
    constructor (props){
        super (props);
        this.state = {
            items:[
                {
                    img: graphAlgorithms,
                    title: 'Graph Algorithms',
                    dates: '[April 2019]',
                    projectType: 'Website',
                    skill1: 'HTML',
                    skill2: 'CSS',
                    skill3: 'd3.js',
                    skill4: 'Web-Design',
                    headline: 'An Educational Website that teaches a small section of Graph Theory from the Data Structures and Algorithms course at ASU.',
                    link: 'https://shashankginjpalli.github.io/GraphAlgorithms/index.html'

                    
                },
                {
                    img: movielist,
                    title: 'MovieList',
                    dates: '[November 2019]',
                    projectType: 'IOS App',
                    skill1: 'Swift',
                    skill2: 'CoreData',
                    skill3: 'Multithreading',
                    skill4: 'IOS',
                    headline: 'A Comprehensive IOS Application that keeps track of the movies that you want to watch and fetches ratings for those movies.',
                    link: 'https://github.com/ShashankGinjpalli/MovieList'


                }  
            ]
        }
    }

    makeItems = (items) => {
        return items.map(item => {
            return (

                <Col xl={6} lg={12} md={12} sm={12} >
                   <ProjectCard img = {item.img} title={item.title} dates = {item.dates} projectType={item.projectType} skill1={item.skill1} skill2={item.skill2} skill3={item.skill3} skill4={item.skill4} headline={item.headline} link={item.link}/>
                </Col>
            );
        })
    }

    render(){
        return(
            <div>
                <h5 className="font-weight-bolder">Personal Projects</h5>
                <br/>
                <Container fluid={true} className = 'margins'>
                    <Row className="experience">
                        {this.makeItems(this.state.items)}
                    </Row>
                    

                </Container>
                <br />
                <br />
                
            </div>
           
        );

       
    }
}

export default Projects;