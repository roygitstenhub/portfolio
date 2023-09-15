import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = ({ openmenu, setOpenmenu }) => {

  return (
    <>
      <nav>
        <NavContent setOpenmenu={setOpenmenu}/>
      </nav>

        <GiHamburgerMenu className='hamberger' onClick={() => {setOpenmenu(!openmenu) }} />
    </>

  )
}

const NavContent = ({ setOpenmenu }) => {
  return (
    <>
      <h2>Roysten.</h2>
      <div>
        <a href="#home" onClick={()=>{setOpenmenu(false)}} >home</a>
        <a href="#work" onClick={()=>{setOpenmenu(false)}} >work</a>
        <a href="#timeline" onClick={()=>{setOpenmenu(false)}}>Education</a>
        <a href="#services" onClick={()=>{setOpenmenu(false)}}>services</a>
        <a href="#testimonial" onClick={()=>{setOpenmenu(false)}}>testimonial</a>
        <a href="#contact" onClick={()=>{setOpenmenu(false)}}>contact</a>

        <a href="mailto:roystongonsalves2002@gmail.com">
          <button>Email</button>
        </a>

      </div>


    </>
  )
}


export const Miniheader = ({openmenu,setOpenmenu}) => {
  return (
    <div  className={`phonenav ${ openmenu ? "downnav" : " "}`}>
      <NavContent setOpenmenu={setOpenmenu} />
    </div>
  )
}

export default Header