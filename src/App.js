import Navbar from './Components/Home/Navbar/Navbar';
import './App.css';
import Hero from './Components/Home/Hero/Hero';
import About from './Components/Home/About/About';
import Seperator from './Components/Sub_Components/Seperator';
import Work from './Components/Home/Work/Work';
import Contact from './Components/Home/Contact/Contact';


function App() {
  return (
      <div>
        <div className="Navbar_Hero_Container">
          <Navbar/>
        <Hero/>
        </div>
        <div className="Hero_About_Container">
          <div>

        </div>
        <Seperator/>
        <About/>
        {/* <Seperator/> */}
        <Work/>
        {/* <Seperator/> */}
        <Contact/>
        </div>
        </div>

     
     );
}

export default App;
