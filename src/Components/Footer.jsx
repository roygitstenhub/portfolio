import React from 'react';
import { BsWhatsapp, BsGithub, BsTelephoneFill } from 'react-icons/bs';

const Footer = () => {
  return (
    <div id='footer'>

      <section>
        <img src={'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt="" srcset="" />
        <h3>roysten richard. gonsalves</h3>
        <p>motivation is temporary , but decipline last forever.</p>
      </section>

      <article>
        <h3>social media</h3>
        <div>
          <a href="https://github.com/roygitstenhub?tab=repositories" target='blank'> <BsGithub /> </a>
          <a href="https://wa.me/8296958471" target='blank'> <BsWhatsapp /> </a>
          <a href="tel:8296958471" target='blank'> <BsTelephoneFill /> </a>
        </div>
      </article>

      <p>&copy; Copyright roysten gonslaves 2023 ! admin</p>
    </div>
  )
}

export default Footer