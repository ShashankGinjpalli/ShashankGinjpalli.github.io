import React from 'react';
import Intro from '../Components/Intro'
import Experience from '../Components/Experience' 
import Projects from '../Components/Projects'
import Skills from '../Components/Skills'






function Home(props){

    const hd1 = "Passionate in all things Technology and eagerly seeking new opportunities to learn"
    const hd2 = " Interested in AI, DataVis and Robotics and I am pursuing internship positions for Summer 2021"

    return(
        <div>
            <div className = ""> 
                <div className = "center">
                    <div className = "align-center-left">
                        <Intro title="Hi I'm Shashank! 👋" subTitle="Computer Science MS @ UC San Diego" headlineln1={hd1} headlineln2={hd2} />
                    </div>
                </div>
            </div> 
            <div className = "">  
            <div className="center">
                <div className="align-center-left">        
                    <Experience />
                    <Projects />
                    <Skills />

                </div> 
            </div>
            </div>
    
        </div>
    );   
}

export default Home;
