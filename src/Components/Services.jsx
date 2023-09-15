import React from 'react';
import {motion} from 'framer-motion';
import {AiFillAndroid, AiFillIeCircle,AiFillWindows} from 'react-icons/ai'
 
const Services = () => {
   
  const animations ={
    whileInView:{
      x:0,
      y:0,
      opacity:1,
    },
    one:{
      x:'-100%',
      opacity:0,
    }
    ,
    twoThree:{
      y:'-100%',
      opacity:0,
    },
    four:{
      x:'100%',
      opacity:0,
    }
  }

  return (
    <div id='services'>
          <h2>services</h2>
        <section>
          <motion.div className="serviceItem1" whileInView={animations.whileInView} initial={animations.one} >
           <h1>1+ </h1>
           <p>year Expirence </p>
          </motion.div>

          <motion.div className="serviceItem2" whileInView={animations.whileInView} initial={animations.twoThree} >
           <AiFillIeCircle/>
           <p> web development </p>
          </motion.div>

          <motion.div className="serviceItem3"  
          whileInView={animations.whileInView} 
          initial={animations.twoThree}
          transition={{
            delay:0.2
          }}
          >
           <AiFillWindows/>
           <p> desktop development </p>
          </motion.div>

          <motion.div className="serviceItem4" whileInView={animations.whileInView} initial={animations.four}>
           <AiFillAndroid/>
           <p> andriod development </p>
          </motion.div>
       </section>

 
    </div>
  )
}

export default Services