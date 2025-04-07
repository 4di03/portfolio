import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitAlt, faPython, faJava } from '@fortawesome/free-brands-svg-icons'
import { faAtom } from '@fortawesome/free-solid-svg-icons'

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
                    My biggest strength is my curiosity for solving interesting problems and learning about new technologies. 
                    I love finding new ways in which technology and science can better the world
                    and hope to be part of the force that helps make that change.
                    If you're working on something cool, I would love to hear about it!
                    Outside of tech, I spend my free time cooking, gaming, and working out.           
                </p>

                <p>
                    I have experience building distributed software applications and applying machine learning to solve impactful problems. 
                    Whether it’s drastically improving data latency for Workday’s cloud fleet management service, accelerating warehouse labor count 
                    recommendations in Wayfair’s supply chain, building Multiple Sclerosis risk assessment models to help Genentech enroll clinical trial subjects,
                    or training neural networks to generate better starting wavefunctions for electronic structure calculations as a researcher at Northeastern University, 
                    I've been able to leverage my passion for solving impactful problems to swiftly adapt to these domains and deliver lasting impact.                    
                </p>

                <p>
                This summer, I will be joining Meta as a Software Engineering Intern. I will also be joining SpaceX in the fall
                as a Software Engineering Intern on the Starlink Network Engineering team. 
                </p>


                <p>
                    </p>

                
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
                        <FontAwesomeIcon icon ={faAtom} color = '#5ED4F4' />
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
