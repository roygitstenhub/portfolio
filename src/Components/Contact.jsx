import React, { useState } from 'react';
import vg from '../assets/vg.png';
import { toast } from 'react-hot-toast';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {

  let [inputItem, setInputItem] = useState({ name:' ' , email:'', message:''})
   const form = useRef();

  function handlechange(e)
  {
      setInputItem({...inputItem,[e.target.name]:e.target.value})
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mgh737d', 'template_a2j7hvc',form.current, 'i4s-NaAH8ZWQAWzZw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      toast.success('Message Sent');
      setInputItem({ name:' ' , email:'', message:''})
       
      e.target.reset()
  };
  const animations={
    form:{
        initial:{
            x:'-100%',
            opacity:0,
        },
        whileInView:{
            x:0,
            opacity:1,
        }
    },

    button:{
      initial:{
        y:'-100%',
        opacity:0,
      },
      whileInView:{
        y:0,
        opacity:1,
      },
      transition:{
        delay:0.5,
      }
    }
  }
  return (
    <div id='contact'> 

      <section>
        <h1>say hello</h1>

        <motion.form onSubmit={sendEmail} {...animations.form} ref={form} >
          
          <input type="text" value={inputItem.user_name} name='user_name' placeholder='your name' required onChange={handlechange} />

          <input type="email" value={inputItem.user_email} name='user_email' placeholder='your email' onChange={handlechange}  />

          <input type="text" value={inputItem.message} name='message' placeholder='your message' required onChange={handlechange} />
        
        
          <motion.button {...animations.button} type='submit'>Send</motion.button>

        </motion.form>
      </section>

      <aside>

          <img src={vg} alt="" />

      </aside>

    </div>
  )
}

export default Contact