
import Header,{Miniheader} from './Components/Header';
import Home from './Components/Home';
import Work from './Components/Work';
import Timeline from './Components/Timeline';
import Services from './Components/Services';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import { Toaster } from 'react-hot-toast';
import Footer from './Components/Footer';
import './Styles/App.scss';
import { useState } from 'react';

function App() {

  let [openmenu,setOpenmenu] = useState(false)
  console.log(openmenu)
  return (
    <div className="App">
        { openmenu? <Miniheader openmenu={openmenu} setOpenmenu={setOpenmenu} /> : ''} 
       <Header  openmenu={openmenu} setOpenmenu={setOpenmenu} />
       <Home/>
       <Work/>
       <Timeline/>
       <Services/>
       <Testimonial/>
       <Contact/>
       <Toaster/>
       <Footer/>
    </div>
  );
  }

export default App;
