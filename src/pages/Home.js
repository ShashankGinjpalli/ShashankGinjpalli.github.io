import React from 'react';
import Intro from '../Components/Intro'
import Experience from '../Components/Experience' 
import Projects from '../Components/Projects'
import Skills from '../Components/Skills'
import Contact from '../Components/Contact'






function Home(props){

    const hd1 = "Passionate in all things Technology and eagerly seeking new opportunities to learn"
<<<<<<< HEAD
    const hd2 = " Interested in AI, DataVis and Robotics and I am pursuing internship positions for Summer 2022"
=======
    const hd2 = " Interested in AI, DataVis and Robotics and I am actively looking for new grad/internship positions for Summer 2021"
>>>>>>> parent of e5083784 (Page Updates End of Summer 2021)

    return(
        <div>
            <div className = ""> 
                <div className = "center">
                    <div className = "align-center-left">
                        <Intro title="Hi I'm Shashank!" subTitle="Computer Science @ Arizona State University 🔱" headlineln1={hd1} headlineln2={hd2} />
                    </div>
                </div>
            </div> 
            <div className = "">  
            <div className="center">
                <div className="align-center-left">        
                    <Experience />
                    <Projects />
                    <Skills />
                    {/* <Contact /> */}

                </div> 
            </div>
            </div>
    
        </div>
    );   
}

export default Home;
