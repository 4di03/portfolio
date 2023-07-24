import './App.scss';
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
    <Routes>

      <Route path="/" element={<Layout />} >
      <Route path = "/portfolio" index element={<Home />} />
      <Route path = "/about" element={<About />} />
      <Route path = "/work" element={<Portfolio />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
