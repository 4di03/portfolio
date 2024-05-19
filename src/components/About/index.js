import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitAlt, faJsSquare, faPython, faJava } from '@fortawesome/free-brands-svg-icons'
import { faRobot, faTerminal } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')


    useEffect(() => {
        setTimeout(() => {
                  setLetterClass('text-animate-hover')
                }, 3000)
  }, [])
    
    return (
        <>
        <div className = 'container about-page'>
            <div className ='text-zone'>
                <h1>

                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't' , ' ', 'm', 'e']}
                        idx = {15} />

                </h1>

                <p> Hi, I'm Adithya! I am an engineer who hopes to leverage my skills to solve some of the world's most challenging problems.
                    I am currently looking for an internship for Summer 2025 in the areas of software engineering and/or artificial intelligence.
                </p>

                <p> In 2023, I worked at Genentech as a Machine Learning intern. My work involved researching, designing, 
                    and implementing machine learning models to assess disease progression risk in Multiple Sclerosis patients.
                    I developed a Python framework that encapsulated and simplified the disease modeling pipeline, resulting in sparse, 
                    efficient regression-based models that outperformed existing statistical and deep learning approaches. These models will be vital 
                    for future MS prognosis and drug treatment research. This experience was fulfilling as it allowed me
                     to create a product that positively impacts lives by enabling advanced MS research, reaffirming 
                    my passion for solving challenging problems with AI. 
                    Additionally, I acquired new skills in ML, statistics, software engineering, and research. </p>

                <p> In 2024, I did a co-op at Wayfair where I worked on building inventory positioning, supply chain forecasting, and labor planning applications. 
                    Whereas my previous experience was more focused on diving into data science and modeling algorithms, this experience taught me so much about building
                    out the large-scale distributed software applications that enable these algorithms from the end-to-end. My favorite experience here was when I collaborated with my team to build a new internal warehouse labor recommendation tool 
                    that provided reliable warehouse headcount and shift recommendations 87% faster than the existing methods. This project challenged me to design efficient, decoupled microservices in a distributed environment, and 
                    I finished it with a newfound proficiency in Kubernetes and microservice development. 
                    </p>
                    <p>
                    Concurrent with that co-op, I've been working 
                    with a computational chemistry research lab at my school to apply deep learning to expedite and enhance calculations of electronic wavefunctions 
                    for molecular systems. This project has challenged me like no other as it required combining my knowledge in quantum physics and machine learning to solve a 
                    loosely-defined research problem. We are expecting to publish a paper related to this work soon, so look forward to that!</p>
                    
                    <p>
                    This summer, I will be interning at Workday as a Software Development Engineer Intern on the Intelligent Automation team. 
                    </p>


                <p> My biggest strength is my curiosity for solving interesting problems and learning about new technologies. 
                    I love finding new ways in which technology and science can better the world, 
                    and hope to be part of the force that can help make that change! 
                    My hobbies include cooking, coding, gaming, and exercise.</p>

                
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon ={faPython} color = '#28A4D9' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon ={faJava} color = '#F06529' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon ={faGitAlt} color = '#DD01F2' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon ={faJsSquare} color = '#5ED4F4' />
                    </div>
        
                    <div className='face5'>
                        <FontAwesomeIcon icon ={faRobot} color = '#EFD81D' />
                    </div>       
                    <div className='face6'>
                        <FontAwesomeIcon icon ={faTerminal} color = '#000000' />
                    </div>
                </div>
            </div>
        </div>

        <Loader type="line-scale-pulse-out-rapid" />
        </>
    )
}



export default About
