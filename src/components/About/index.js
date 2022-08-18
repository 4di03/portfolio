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

                <p> I am an aspiring software engineer who hopes to leverage software and artifical intellgence to solve some of the world's most challenging problems.
                    I am currently looking for an internship/co-op role for Spring 2023 at an inspiring tech company. 
                </p>

                <p> I am currently working with the Mhealth research group of northeastern university as an undergraduate researcher.
                    Currently, I am working on developing quality control scripts to flag bugs in data from the CDC's NHANES physical activity dataset 
                    in order to allow our group and other researchers to effectively use machine learning to gain insights from the dataset. </p>

                <p> My biggest strength is my curiositiy for solving interseting problems and learning about new technologies. I love finding new ways in which technology and science can better the world, and hope to be part of the force that can help make that change! In my free time, I spend time exercising, playing video games, cooking, and hanging out with friends and family.</p>

                
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