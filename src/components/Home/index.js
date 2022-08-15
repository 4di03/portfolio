import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {


    return (
        <div className = "container home-page">
            <div className = "text-zone">
                <h1>Hi, I'm <br/> 
                <span className = "name-text"> Adithya</span>
                <br/>
                CS + Physics Major 
                </h1>
                <h2> Software Engineer / Machine Learning Engineer / Data Scientist </h2>
                <br/>
                <Link to = "/contact" className="flat-button"> CONTACT ME</Link>
            </div>


        </div>
    )
}

export default Home