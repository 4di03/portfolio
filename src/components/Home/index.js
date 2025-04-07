import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Logo from '../Logo'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const greetArray = ['H', 'i' , ',' , ' ', 'I', "'", 'm']
    const nameArray = ['A', 'd','i', 't','h','y','a']
    const jobArray = ['C','S', ' ', '+', ,' ', 'P','h','y','s','i','c','s', ' ', 'M','a','j','o','r']


        useEffect(() => {
            setTimeout(() => {
                      setLetterClass('text-animate-hover')
                    }, 4000)
      }, [])


    return (
        <>
        <div className = "container home-page">
            <div className = "text-zone">
                <h1>
                    
                <AnimatedLetters letterClass={letterClass} 
                strArray={greetArray}
                idx = {10}/>
                    
                <br/> 
                <span className = "name-text"> 
                <AnimatedLetters letterClass={letterClass} 
                strArray={nameArray}
                idx = {16}/>
                <br/>
                </span>
                <AnimatedLetters letterClass={letterClass} 
                strArray={jobArray}
                idx = {16 + nameArray.length}/>
                </h1>
                <h2> Software Engineering / Machine Learning / Physics </h2>
                <br/>
                <a href = "mailto:adithyapalle12@gmail.com?subject = Feedback&body = Message" className="flat-button"> EMAIL ME</a>
            </div>

            {/* <Logo/> */}


        </div>
        <Loader type="line-scale-pulse-out-rapid" />

        </>
    )
}

export default Home