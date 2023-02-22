import './App.css';
import Header from './components/Hedear';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header1 from './components/Header1';
import Section from './components/Section';
import Addcontent from './components/Addcontent';
import OurProducts from './components/OurProducts';
import Rooms from './components/Rooms';
import Tipstricks from './components/Tipstricks';
import Furnio from './components/Furnio';
import Footer  from './components/Footer';

function App() {
  return (
    <>
      <div className='app'>
       
          <Header/>
          <Section/>
          <Header1/>
       
    </div>
    <div className='main'>
      
        <Addcontent/>
        <OurProducts/>
        <Rooms/>
        <Tipstricks/>
        <Furnio/>


    </div>
    <hr/>
    <footer>
        <Footer/>
    </footer>
    </>
  );
}

export default App;
